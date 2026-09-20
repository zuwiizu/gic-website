import {CdpBrowser} from "./cdp.mjs";
import {mkdir} from "node:fs/promises";
const [origin,out,...paths]=process.argv.slice(2);
const url=new URL(origin);
if(url.protocol!=="https:" || url.origin!==origin || !(url.hostname==="globalinsightscollective.com" || url.hostname.endsWith(".gic-website.pages.dev") || url.hostname==="gic-website.pages.dev"))throw new Error("Unexpected preview origin");
await mkdir(out,{recursive:true});
const browser=await CdpBrowser.launch();
try {
  for(const width of [390,1440]) {
    await browser.setViewport(width,900,width<500);
    for(const path of paths) {
      if(!/^\/(?:[a-z0-9-]+\/)*$/.test(path))throw new Error("Unexpected route");
      await browser.navigate(origin+path);
      const result=await browser.evaluate(`({overflow:document.documentElement.scrollWidth>innerWidth+2,
        h1:document.querySelectorAll('h1').length,
        brokenImages:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).length,
        words:document.body.innerText.trim().split(/\\s+/).length})`);
      if(result.overflow||result.h1!==1||result.brokenImages||result.words<30)throw new Error(JSON.stringify({path,width,...result}));
      await browser.screenshot(`${out}/${path.slice(1).replaceAll("/","-")||"home"}-${width}.png`);
    }
  }
  console.log("Desktop/mobile render checks passed");
} finally {await browser.close();}
