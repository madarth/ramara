if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),d={module:{uri:t},exports:o,require:c};s[t]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"298b42e96ac3780e2b872a15f29787e1"},{url:"manifest.json",revision:"3f02595163c6b93c7a30e31d99fc5d41"},{url:"scripts/main.js",revision:"74638c47bca0d896ef125d580addbe7d"},{url:"scripts/vendor.js",revision:"d496a3a57a2c9a44ec5f978aa14fe38b"},{url:"styles/main.css",revision:"d0ae7c354277bbd70b4e90889d33f6fc"}],{})}));
//# sourceMappingURL=sw.js.map
