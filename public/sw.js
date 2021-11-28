if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + '.js', n).href),
    s[i] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, t) => {
    const a =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[a]) return;
    let c = {};
    const u = (e) => i(e, a),
      r = { module: { uri: a }, exports: c, require: u };
    s[a] = Promise.all(n.map((e) => r[e] || u(e))).then((e) => (t(...e), c));
  };
}
define(['./workbox-22294e6b'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/server/middleware-manifest.json',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/61-21b85e321ba75b2b.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/8-604ebe75516b8cb4.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/98-2a7cc00effda7557.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/framework-91d7f78b5b4003c8.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/main-2915869b229d55c9.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/_app-55f31fa6b0c95d6c.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/_error-2280fa386d040b66.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/admin/users-11922ecef6e95067.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/custom-3d8b6b55bcd7c41f.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/exercises-87602ab9793069a4.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/exercises/%5BexerciseId%5D-1cef777a96b0185d.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/home-b6bd0160e9a87c27.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/index-09ec4116e48acd2a.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/login-433d927aae4f3b7f.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/logout-a2c954d79bb7d82d.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/register-a0455bc12805e58f.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/users-18bd767cc4fb794c.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/users/%5BuserId%5D-d44c01961e729d0b.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/workouts-b34c4f536804bfe7.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/pages/workouts/%5BworkoutId%5D-33b84589dd064810.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/chunks/webpack-514908bffb652963.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/css/8870cfc1104752d3.css',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/uhxWuPI7J7BpXjo8WXTHi/_buildManifest.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/uhxWuPI7J7BpXjo8WXTHi/_middlewareManifest.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        {
          url: '/_next/static/uhxWuPI7J7BpXjo8WXTHi/_ssgManifest.js',
          revision: 'uhxWuPI7J7BpXjo8WXTHi',
        },
        { url: '/icon-192.png', revision: '3a91b93e0127fd4f9286706818e20556' },
        { url: '/icon-512.png', revision: 'f343f4ca8260fc6fdbdc17c733519ec8' },
        { url: '/icon.png', revision: '155f5f1dd11fcfdc5307a697459d3f18' },
        {
          url: '/images/beach.jpg',
          revision: '6bcd88331c8d34dfa8a680bfe49ad05d',
        },
        {
          url: '/images/beginner.jpg',
          revision: '37b581639b79260b078b71a1b60a2176',
        },
        {
          url: '/images/bigarms.jpg',
          revision: 'd022c37cda5172eee2490e710fb529fe',
        },
        {
          url: '/images/bodyweight.jpg',
          revision: 'cec653713e9e480c1ac23b29d6d18960',
        },
        {
          url: '/images/bulkup.jpg',
          revision: '744ef1b52497d1dee7d1e8e1606305a0',
        },
        {
          url: '/images/dark.jpg',
          revision: '7b039eeb4bee091e418da66b207d606c',
        },
        {
          url: '/images/homePic.jpg',
          revision: 'edf57a20cf7218ddd0e28ced7a0a19fc',
        },
        {
          url: '/images/lean_and_mean.jpg',
          revision: '5f04866e0f78cdf5e80ba92213aec58f',
        },
        {
          url: '/images/starting.jpg',
          revision: '469b320e9b7c48722632043163d8f57b',
        },
        {
          url: '/images/strong.jpg',
          revision: 'fed5018bc51232f6180e64060928d446',
        },
        { url: '/manifest.json', revision: '2a09fa093617261f745a576a0c46db6a' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: i,
              state: n,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    );
});
