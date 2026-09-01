const C="lt-v1";
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./index.html","./manifest.json"])));self.skipWaiting();});
self.addEventListener("activate",e=>self.clients.claim());
self.addEventListener("fetch",e=>{
  if(e.request.url.includes("api.anthropic.com"))return;
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});