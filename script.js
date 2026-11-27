const CACHE_NAME = 'wbs-studio-v2';
const PROGRESS_NOTIF_TAG = 'wbs-pipeline-progress';

const APP_SHELL_ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL_ASSETS).catch(() => Promise.resolve());
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Never intercept or cache Gemini API requests
  if (url.hostname === 'generativelanguage.googleapis.com') {
    return;
  }

  // Same-origin app shell: network-first with cache fallback for offline mobile launch
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(request)
        .then((networkResp) => {
          if (networkResp && networkResp.ok) {
            const copy = networkResp.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {});
          }
          return networkResp;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // External CDN assets (Tailwind, Lucide, Fonts): stale-while-revalidate
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((networkResp) => {
          if (networkResp && networkResp.ok) {
            const copy = networkResp.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {});
          }
          return networkResp;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});

self.addEventListener('message', (event) => {
  const data = event.data || {};

  if (data.type === 'UPDATE_PROGRESS_NOTIFICATION') {
    const p = data.payload || {};
    const title = p.title || '50-Point Web App Studio';
    const options = {
      body: p.body || 'Pipeline active...',
      tag: p.tag || PROGRESS_NOTIF_TAG,
      renotify: Boolean(p.renotify),
      silent: p.silent !== undefined ? Boolean(p.silent) : true,
      requireInteraction: p.requireInteraction !== undefined ? Boolean(p.requireInteraction) : true,
      icon: './icon-192.png',
      badge: './icon-192.png',
      data: {
        url: './index.html',
        step: p.step || 0,
        status: p.status || 'running'
      },
      actions: Array.isArray(p.actions) ? p.actions : []
    };

    event.waitUntil(
      self.registration.showNotification(title, options).catch(() => {})
    );
    return;
  }

  if (data.type === 'CLEAR_PROGRESS_NOTIFICATION') {
    event.waitUntil(
      self.registration.getNotifications({ tag: PROGRESS_NOTIF_TAG })
        .then((list) => list.forEach((n) => n.close()))
        .catch(() => {})
    );
    return;
  }

  if (data.type === 'KEEPALIVE_PING') {
    if (event.source && typeof event.source.postMessage === 'function') {
      event.source.postMessage({ type: 'KEEPALIVE_PONG', ts: Date.now() });
    }
  }
});

self.addEventListener('notificationclick', (event) => {
  const action = event.action;
  event.notification.close();

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      if (action === 'pause' || action === 'resume') {
        clientList.forEach((client) => {
          client.postMessage({ type: 'SW_ACTION', action });
        });
      }

      for (const client of clientList) {
        if ('focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow('./index.html');
      }
      return undefined;
    })
  );
});