// Minimal Chrome DevTools Protocol driver over Node's built-in WebSocket.
// No npm dependencies. Used for screenshots and rendered-behavior checks.
import { spawn } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const DEFAULT_BIN = `${process.env.HOME}/.cache/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell`;

export function browserBinary() {
  const candidates = [process.env.CHROME_HEADLESS_SHELL, DEFAULT_BIN,
    "/usr/bin/chromium-browser", "/snap/bin/chromium"];
  for (const c of candidates) if (c && existsSync(c)) return c;
  throw new Error("no chromium headless binary found");
}

export class CdpBrowser {
  constructor() { this.proc = null; this.ws = null; this.nextId = 1; this.pending = new Map(); this.listeners = new Map(); }

  static async launch() {
    const b = new CdpBrowser();
    await b.#start();
    return b;
  }

  async #start() {
    const bin = browserBinary();
    this.proc = spawn(bin, [
      "--remote-debugging-port=0", "--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage",
      "--hide-scrollbars", "--force-device-scale-factor=1", "--no-first-run", "about:blank",
    ], { stdio: ["ignore", "pipe", "pipe"] });

    const endpoint = await new Promise((ok, bad) => {
      let buf = "";
      const t = setTimeout(() => bad(new Error("timeout waiting for DevTools endpoint")), 20000);
      this.proc.stderr.on("data", (chunk) => {
        buf += chunk.toString();
        const m = buf.match(/DevTools listening on (ws:\/\/\S+)/);
        if (m) { clearTimeout(t); ok(m[1]); }
      });
      this.proc.on("exit", (code) => bad(new Error(`chromium exited early: ${code}`)));
    });

    const info = await fetch(endpoint.replace("ws://", "http://").replace(/\/devtools\/browser\/.*$/, "/json/version"));
    this.version = await info.json();
    this.ws = new WebSocket(endpoint);
    await new Promise((ok, bad) => {
      this.ws.addEventListener("open", ok, { once: true });
      this.ws.addEventListener("error", () => bad(new Error("websocket error")), { once: true });
    });
    this.ws.addEventListener("message", (ev) => this.#onMessage(ev));
    const { targetId } = await this.send("Target.createTarget", { url: "about:blank" });
    const { sessionId } = await this.send("Target.attachToTarget", { targetId, flatten: true });
    this.sessionId = sessionId;
    await this.send("Page.enable", {}, sessionId);
    await this.send("Runtime.enable", {}, sessionId);
    await this.send("DOM.enable", {}, sessionId);
  }

  #onMessage(ev) {
    const msg = JSON.parse(ev.data);
    if (msg.id && this.pending.has(msg.id)) {
      const { ok, bad } = this.pending.get(msg.id);
      this.pending.delete(msg.id);
      msg.error ? bad(new Error(`${msg.error.message} (${JSON.stringify(msg.error.data ?? "")})`)) : ok(msg.result);
    } else if (msg.method) {
      const key = `${msg.sessionId || ""}:${msg.method}`;
      for (const fn of this.listeners.get(key) || []) fn(msg.params);
      for (const fn of this.listeners.get(msg.method) || []) fn(msg.params);
    }
  }

  send(method, params = {}, sessionId = this.sessionId) {
    const id = this.nextId++;
    return new Promise((ok, bad) => {
      this.pending.set(id, { ok, bad });
      this.ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
    });
  }

  waitFor(method, sessionId = this.sessionId, timeoutMs = 20000) {
    return new Promise((ok, bad) => {
      const key = `${sessionId}:${method}`;
      const list = this.listeners.get(key) || [];
      const timer = setTimeout(() => bad(new Error(`timeout waiting for ${method}`)), timeoutMs);
      list.push((params) => { clearTimeout(timer); ok(params); });
      this.listeners.set(key, list);
    });
  }

  async setViewport(width, height, mobile = false) {
    await this.send("Emulation.setDeviceMetricsOverride", {
      width, height, deviceScaleFactor: 1, mobile,
      screenWidth: width, screenHeight: height,
    });
  }

  async setReducedMotion(value) {
    await this.send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value }] });
  }

  async navigate(url) {
    const loaded = this.waitFor("Page.loadEventFired");
    await this.send("Page.navigate", { url });
    await loaded;
    await new Promise((r) => setTimeout(r, 250));
  }

  async evaluate(expression, awaitPromise = false) {
    const res = await this.send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise });
    if (res.exceptionDetails) throw new Error(`evaluate failed: ${res.exceptionDetails.text} ${res.exceptionDetails.exception?.description ?? ""}`);
    return res.result.value;
  }

  async screenshot(path, { fullPage = true } = {}) {
    let clip;
    if (fullPage) {
      const metrics = await this.send("Page.getLayoutMetrics");
      const size = metrics.cssContentSize || metrics.contentSize;
      clip = { x: 0, y: 0, width: Math.ceil(size.width), height: Math.ceil(size.height), scale: 1 };
    }
    const shot = await this.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: fullPage, ...(clip ? { clip } : {}) });
    await writeFile(path, Buffer.from(shot.data, "base64"));
  }

  async close() {
    try { this.ws?.close(); } catch { /* ignore */ }
    if (this.proc && !this.proc.killed) { this.proc.kill("SIGKILL"); }
  }
}
