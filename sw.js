self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('bo-match-cache-v1').then(cache => {
      return cache.addAll(['.', 'index.html', 'app.js', 'manifest.webmanifest']);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});