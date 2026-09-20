import { EmailMessage } from "cloudflare:email";

const OWNER = "iwarsame8@gmail.com";
const OPERATOR = "zuhurahmed1995@gmail.com";
const ADDRESS = "updates@globalinsightscollective.com";
const encoder = new TextEncoder();
const hex = (bytes) => [...new Uint8Array(bytes)].map((v) => v.toString(16).padStart(2, "0")).join("");
const header = (s) => String(s ?? "").replace(/[\r\n]/g, " ").slice(0, 500);
function mime(item) {
  if (![OWNER, OPERATOR].includes(item.to)) throw new Error("Recipient not permitted");
  const bytes = encoder.encode(item.text);
  let binary = "";
  for (const value of bytes) binary += String.fromCharCode(value);
  return [
    `From: Website Assistant <${ADDRESS}>`, `To: ${item.to}`,
    `Reply-To: ${ADDRESS}`, `Subject: ${header(item.subject)}`,
    `Message-ID: ${header(item.message_id)}`, `Date: ${new Date().toUTCString()}`,
    ...(item.in_reply_to ? [`In-Reply-To: ${header(item.in_reply_to)}`, `References: ${header(item.in_reply_to)}`] : []),
    "MIME-Version: 1.0", "Content-Type: text/plain; charset=utf-8",
    "Content-Transfer-Encoding: base64", "",
    btoa(binary).match(/.{1,76}/g).join("\r\n"), "",
  ].join("\r\n");
}

export default {
  async fetch() { return new Response("Not found", {status: 404}); },
  async email(message, env) {
    if (message.from.toLowerCase() !== OWNER || message.to.toLowerCase() !== ADDRESS) {
      message.setReject("This address accepts website requests from its registered owner only."); return;
    }
    if (message.rawSize > 10 * 1024 * 1024) {
      message.setReject("Please keep the total email size below 10 MB."); return;
    }
    const raw = await new Response(message.raw).arrayBuffer();
    const id = hex(await crypto.subtle.digest("SHA-256", raw));
    // Raw signed bytes are verified independently on the VPS before any action.
    await env.MAIL.put(`inbox/${id}`, raw, {expirationTtl: 30 * 86400});
    await env.DB.prepare("INSERT OR IGNORE INTO inbound(id,status,created_at) VALUES(?,?,?)")
      .bind(id, "pending", Date.now()).run();
  },
  async scheduled(event, env) {
    const now=Date.now()/1000;
    const {results} = await env.DB.prepare("SELECT id,payload FROM outbound WHERE status='pending' LIMIT 10").all();
    for (const row of results) {
      const claim = await env.DB.prepare("UPDATE outbound SET status=? WHERE id=? AND status='pending'").bind('sending:'+now,row.id).run();
      if (!claim.meta.changes) continue;
      try {
        const item = JSON.parse(row.payload);
        await env.SEND.send(new EmailMessage(ADDRESS, item.to, mime(item)));
        await env.DB.prepare("UPDATE outbound SET status='sent' WHERE id=?").bind(row.id).run();
      } catch {
        // Unknown delivery is never retried automatically.
        await env.DB.prepare("UPDATE outbound SET status=? WHERE id=?").bind('uncertain:'+now,row.id).run();
      }
    }
    const beat = await env.DB.prepare("SELECT value FROM metadata WHERE key='heartbeat'").first();
    const progress=await env.DB.prepare("SELECT value FROM metadata WHERE key='progress'").first();
    const lease=await env.DB.prepare("SELECT value FROM metadata WHERE key='active_until'").first();
    const unhealthy= !beat || now-Number(beat.value)>300 || ((!progress || now-Number(progress.value)>300) && (!lease || now>Number(lease.value)));
    const last = await env.DB.prepare("SELECT value FROM metadata WHERE key='outage_alert'").first();
    if (beat && unhealthy && !last) {
      // Claim before sending; repeated cron runs stay quiet while unchanged.
      const claimed = await env.DB.prepare("INSERT OR IGNORE INTO metadata(key,value) VALUES('outage_alert',?)")
        .bind(String(Date.now())).run();
      if (claimed.meta.changes) {
        await env.DB.prepare("INSERT OR IGNORE INTO outbound(id,payload,status) VALUES(?,?,?)").bind(
          `outage-${beat?.value ?? now}`, JSON.stringify({to:OPERATOR, subject:"Website email assistant needs attention",
          text:"The website email assistant has stopped reporting processing progress or has missed its heartbeat. Pending requests are preserved. Please check the VPS service.",
          message_id:`<outage-${Math.floor(Number(beat?.value ?? now))}@globalinsightscollective.com>`}), "pending").run();
      }
    } else if (!unhealthy && last) {
      await env.DB.prepare("DELETE FROM metadata WHERE key='outage_alert'").run();
    }
  },
};
