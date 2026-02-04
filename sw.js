// sw.js
const CACHE_NAME = 'rally-tracker-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// O Service Worker ajuda a manter o processo ativo em alguns navegadores Android
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
