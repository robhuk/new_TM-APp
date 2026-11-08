/* XC TM Toolkit — isolated service worker identity and cache namespace */
const APP_ID='uk.co.crosscountry.tmtoolkit';
const CACHE_NAME='xc-tm-toolkit-cache-v1.0.0-build-2026.11.08-001';
const CORE=['./','./index.html','./style.css','./app.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('xc-tm-toolkit-cache-')&&k!==CACHE_NAME).map(k=>caches.delete(k)));await self.clients.claim()})())});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;event.respondWith((async()=>{const cache=await caches.open(CACHE_NAME);const cached=await cache.match(req);if(cached)return cached;try{const response=await fetch(req);if(response.ok&&new URL(req.url).origin===self.location.origin)cache.put(req,response.clone());return response}catch(e){if(req.mode==='navigate')return cache.match('./index.html');throw e}})())});
