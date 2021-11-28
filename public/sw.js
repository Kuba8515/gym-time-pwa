if (!self.define) {
  let e,
    s = {};
  const n = (n, i) => (
    (n = new URL(n + '.js', i).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, t) => {
    const a =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[a]) return;
    let c = {};
    const r = (e) => n(e, a),
      u = { module: { uri: a }, exports: c, require: r };
    s[a] = Promise.all(i.map((e) => u[e] || r(e))).then((e) => (t(...e), c));
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
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/2xDF24BAACpt61LE1uXKe/_buildManifest.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/2xDF24BAACpt61LE1uXKe/_middlewareManifest.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/2xDF24BAACpt61LE1uXKe/_ssgManifest.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/61-21b85e321ba75b2b.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/8-d6077cb3b974fad6.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/98-ed24eb842fe91efd.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/framework-91d7f78b5b4003c8.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/main-2915869b229d55c9.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/_app-8f6bf314ea46751f.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/_error-2280fa386d040b66.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/admin/users-fa184db045571578.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/custom-3d8b6b55bcd7c41f.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/exercises-b1009ced680cce91.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/exercises/%5BexerciseId%5D-e35bb05f50078fb5.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/home-857042738ab1d6f0.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/index-09ec4116e48acd2a.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/login-83a38d601a26b13f.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/logout-a2c954d79bb7d82d.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/register-b2d4e0ddec15c122.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/users-6f8c99657444d281.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/users/%5BuserId%5D-d44c01961e729d0b.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/workouts-4bcaf12e612cff66.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/pages/workouts/%5BworkoutId%5D-6ac3c3d485798c03.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/chunks/webpack-514908bffb652963.js',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/_next/static/css/da79318fb9ca6d30.css',
          revision: '2xDF24BAACpt61LE1uXKe',
        },
        {
          url: '/favicon-16x16.png',
          revision: '02a4c13562d82e6af2a0c1c6131325cd',
        },
        {
          url: '/favicon-32x32.png',
          revision: '9cf13b5d3430312d178bd4e34934a675',
        },
        { url: '/favicon.ico', revision: '123f5d76f1a5c9e6e4b215e896a22058' },
        { url: '/favicon.svg', revision: '579d0342355ea27303d7a025e323d49d' },
        {
          url: '/icon-192-maskable.png',
          revision: '3a91b93e0127fd4f9286706818e20556',
        },
        { url: '/icon-192.png', revision: '3a91b93e0127fd4f9286706818e20556' },
        { url: '/icon-512.png', revision: 'f343f4ca8260fc6fdbdc17c733519ec8' },
        {
          url: '/icon-apple-touch.png',
          revision: '155f5f1dd11fcfdc5307a697459d3f18',
        },
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
        { url: '/manifest.json', revision: '1534cfd4ef988da009d4d21afe2542c7' },
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
              event: n,
              state: i,
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
