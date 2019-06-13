(function() {
  const CACHE_NAME = 'V1'
  /**
   * The install event is fired when the registration succeeds.
   * After the install step, the browser tries to activate the service worker.
   * Generally, we cache static resources that allow the website to run offline
   */
  self.addEventListener('install', (e) => {
    console.log('INSTALLED ' + CACHE_NAME) // eslint-disable-line no-console

    e.waitUntil(
      caches.open('anssispwa').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/assets/img/icon-256x256.png',
          '/assets/img/icon-512x512.png',
          '/assets/img/unimpressed-ocelot.jpg',
          '/css/styles.css',
          '/js/index.js',
        ])
      })
    )
  })

  self.addEventListener('fetch', function(event) {
    console.log(event.request.url) // eslint-disable-line no-console

    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request)
      })
    )
  })

})()
