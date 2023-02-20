const cacheName='parkmate'; //PWA id here
const appFiles=[
    'index.html',
    'app.js',
    'favicon.png',
    'manifest.json',
    'pwaicon.png',
    'style.css',
    'sw.js',
    'jquery-3.6.3.js'
    //add all PWA files here
];

// Caches all the PWA shell files (appFiles array) when the app is launched
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  const filesUpdate = cache => {
      const stack = [];
      appFiles.forEach(file => stack.push(
          cache.add(file).catch(_=>console.error(`can't load ${file} to cache`))
      ));
      return Promise.all(stack);
  };
  e.waitUntil(caches.open(cacheName).then(filesUpdate));
});

// Called when the app fetches a resource like an image, caches it automatically
self.addEventListener('fetch', (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })()
  );
});

// Called when the service worker is started
self.addEventListener('activate', (e) => {
    console.log("[Service Worker] Activated");
});
