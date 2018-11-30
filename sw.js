var staticCacheName = 'mws-restaurant-v1';
/**
 * Verify for install service worker listener event and cache the elements
 */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        '/restaurant.html',
        'js/dbhelper.js',
        'js/indexController.js',
        'js/main.js',
        'js/restaurant_info.js',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
        'css/styles.css',
        'data/restaurants.json'
        
      ]);
    })
  );
});


/**
 * Verify for actived service worker listener event and delete old caches
 */
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName.startsWith('mws-') &&
                 cacheName != staticCacheName;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

/**
 * Verify for fetch listener event and respond with cache element or fetch a request to the server
 */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
