if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const r = (e) => a(e, c),
      o = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-6316bd60"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/HYkUnLscB5OvhJ1zU7rMC/_buildManifest.js",
          revision: "41538732edbe38d7722af6cd01f10f83",
        },
        {
          url: "/_next/static/HYkUnLscB5OvhJ1zU7rMC/_middlewareManifest.js",
          revision: "fb2823d66b3e778e04a3f681d0d2fb19",
        },
        {
          url: "/_next/static/HYkUnLscB5OvhJ1zU7rMC/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/636-bf29c97b7808a514.js",
          revision: "bf29c97b7808a514",
        },
        {
          url: "/_next/static/chunks/669-82b145ab72419c86.js",
          revision: "82b145ab72419c86",
        },
        {
          url: "/_next/static/chunks/framework-5f4595e5518b5600.js",
          revision: "5f4595e5518b5600",
        },
        {
          url: "/_next/static/chunks/main-472e1fa7e2f7a02d.js",
          revision: "472e1fa7e2f7a02d",
        },
        {
          url: "/_next/static/chunks/pages/404-77b049260d3972a0.js",
          revision: "77b049260d3972a0",
        },
        {
          url: "/_next/static/chunks/pages/500-c8500aaa1106c6d5.js",
          revision: "c8500aaa1106c6d5",
        },
        {
          url: "/_next/static/chunks/pages/_app-0c76e41013ea6f4c.js",
          revision: "0c76e41013ea6f4c",
        },
        {
          url: "/_next/static/chunks/pages/_error-0a004b8b8498208d.js",
          revision: "0a004b8b8498208d",
        },
        {
          url: "/_next/static/chunks/pages/bots/%5BbotId%5D-281368666ac15bb6.js",
          revision: "281368666ac15bb6",
        },
        {
          url: "/_next/static/chunks/pages/index-b1130bb8ead36ed7.js",
          revision: "b1130bb8ead36ed7",
        },
        {
          url: "/_next/static/chunks/pages/legal/terms-10338bc22f972360.js",
          revision: "10338bc22f972360",
        },
        {
          url: "/_next/static/chunks/pages/lists-445b0f022790a132.js",
          revision: "445b0f022790a132",
        },
        {
          url: "/_next/static/chunks/pages/lists/%5BlistId%5D-ef54bbe0c2241da6.js",
          revision: "ef54bbe0c2241da6",
        },
        {
          url: "/_next/static/chunks/pages/lists/reqs-c2e52df2b6e4ca62.js",
          revision: "c2e52df2b6e4ca62",
        },
        {
          url: "/_next/static/chunks/pages/team-ca96de04a3f20a11.js",
          revision: "ca96de04a3f20a11",
        },
        {
          url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
          revision: "99442aec5788bccac9b2f0ead2afdd6b",
        },
        {
          url: "/_next/static/chunks/webpack-9b312e20a4e32339.js",
          revision: "9b312e20a4e32339",
        },
        {
          url: "/_next/static/css/dee066ef10d8e91e.css",
          revision: "dee066ef10d8e91e",
        },
        {
          url: "/css/customColors.css",
          revision: "630745f9b6cde2a80c3a488c8230948f",
        },
        {
          url: "/css/global.css",
          revision: "d49af9e53dedbc3967e3c4acb61f0283",
        },
        {
          url: "/css/nprogress.css",
          revision: "c6adaeb29c55a8cb19899f8f4a4d959d",
        },
        { url: "/css/tippy.css", revision: "f14e4e01f7aaa1ad5f549d2d45d5dfe4" },
        {
          url: "/img/defaultUser.webp",
          revision: "206361de9971cac001d071e131869888",
        },
        {
          url: "/img/favicon.png",
          revision: "3a7057aac200b53fdd66a5dc31a8d079",
        },
        { url: "/img/globe.svg", revision: "516bf0fae97628e22a3a3ec810a8c4ba" },
        {
          url: "/img/information.webp",
          revision: "95eb9aaff2c277094780cbc3727d92e0",
        },
        { url: "/img/logo.png", revision: "3a7057aac200b53fdd66a5dc31a8d079" },
        { url: "/img/logo.webp", revision: "3a7057aac200b53fdd66a5dc31a8d079" },
        { url: "/img/tada.svg", revision: "b052a4bef57c1aa73cd7cff5bc4fb61d" },
        { url: "/manifest.json", revision: "b0f7d0f53b3c0797e27a8e7febfe6ae3" },
        { url: "/pwa_logo.png", revision: "3a7057aac200b53fdd66a5dc31a8d079" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
