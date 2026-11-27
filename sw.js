const CACHE_NAME = 'wbs-studio-v3';
const PROGRESS_NOTIF_TAG = 'wbs-pipeline-progress';

const APP_SHELL_ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './notif-badge.png',
  './notif-badge.svg'
];

let cachedBadgeDataUrl = null;

async function getMonochromeBadgeUrl() {
  if (cachedBadgeDataUrl) return cachedBadgeDataUrl;
  try {
    const resp = await fetch('./notif-badge.png', { method: 'HEAD' });
    if (resp && resp.ok) {
      cachedBadgeDataUrl = './notif-badge.png';
      return cachedBadgeDataUrl;
    }
  } catch (_) {}

  try {
    if (typeof OffscreenCanvas !== 'undefined') {
      const canvas = new OffscreenCanvas(96, 96);
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, 96, 96);

      ctx.fillStyle = 'rgba(255,255,255,1)';
      ctx.beginPath();
      ctx.moveTo(48, 12);
      ctx.lineTo(82, 31);
      ctx.lineTo(48, 50);
      ctx.lineTo(14, 31);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = 'rgba(255,255,255,0.86)';
      ctx.beginPath();
      ctx.moveTo(14, 36);
      ctx.lineTo(45, 53.5);
      ctx.lineTo(45, 84);
      ctx.lineTo(14, 66.5);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = 'rgba(255,255,255,0.68)';
      ctx.beginPath();
      ctx.moveTo(82, 36);
      ctx.lineTo(51, 53.5);
      ctx.lineTo(51, 84);
      ctx.lineTo(82, 66.5);
      ctx.closePath();
      ctx.fill();

      const blob = await canvas.convertToBlob({ type: 'image/png' });
      const buf = await blob.arrayBuffer();
      const bytes = new Uint8Array(buf);
      let bin = '';
      for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
      cachedBadgeDataUrl = `data:image/png;base64,${btoa(bin)}`;
      return cachedBadgeDataUrl;
    }
  } catch (_) {}

  return './icon-192.png';
}

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
  if (url.hostname === 'generativelanguage.googleapis.com') {
    return;
  }

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
    event.waitUntil(
      (async () => {
        const badgeUrl = await getMonochromeBadgeUrl();
        const title = p.title || '50-Point Web App Studio';
        const options = {
          body: p.body || 'Pipeline active...',
          tag: p.tag || PROGRESS_NOTIF_TAG,
          renotify: Boolean(p.renotify),
          silent: p.silent !== undefined ? Boolean(p.silent) : true,
          requireInteraction: p.requireInteraction !== undefined ? Boolean(p.requireInteraction) : true,
          icon: './icon-192.png',
          badge: badgeUrl,
          data: {
            url: './index.html',
            step: p.step || 0,
            status: p.status || 'running'
          },
          actions: Array.isArray(p.actions) ? p.actions : []
        };
        await self.registration.showNotification(title, options).catch(() => {});
      })()
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
