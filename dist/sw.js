if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),f={module:{uri:t},exports:o,require:c};s[t]=Promise.all(r.map((e=>f[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"3c57e335e7e6f28d564ee2120d4585d2"},{url:"manifest.json",revision:"3f02595163c6b93c7a30e31d99fc5d41"},{url:"scripts/main.js",revision:"8720b3fc8f2bf9232de77bdf24886256"},{url:"scripts/vendor.js",revision:"d496a3a57a2c9a44ec5f978aa14fe38b"},{url:"styles/main.css",revision:"0e48eafeeacea06066ec60494368204c"}],{})}));
//# sourceMappingURL=sw.js.map