if (!self.define) {
  let e,
    s = {};
  const a = (a, c) => (
    (a = new URL(a + ".js", c).href),
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
  self.define = (c, i) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[n]) return;
    let t = {};
    const r = (e) => a(e, n),
      o = { module: { uri: n }, exports: t, require: r };
    s[n] = Promise.all(c.map((e) => o[e] || r(e))).then((e) => (i(...e), t));
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
          url: "/_next/static/chunks/316-ccca8ad5385ba4ea.js",
          revision: "ccca8ad5385ba4ea",
        },
        {
          url: "/_next/static/chunks/535-dbdc50392c2f36e6.js",
          revision: "dbdc50392c2f36e6",
        },
        {
          url: "/_next/static/chunks/875-b5f487b8b6f8f9a3.js",
          revision: "b5f487b8b6f8f9a3",
        },
        {
          url: "/_next/static/chunks/929-06b21954f3790de8.js",
          revision: "06b21954f3790de8",
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
          url: "/_next/static/chunks/pages/401-3e8c7fffd0acc443.js",
          revision: "3e8c7fffd0acc443",
        },
        {
          url: "/_next/static/chunks/pages/404-926e6fa8d6bc7a45.js",
          revision: "926e6fa8d6bc7a45",
        },
        {
          url: "/_next/static/chunks/pages/500-ba201342baf81bbb.js",
          revision: "ba201342baf81bbb",
        },
        {
          url: "/_next/static/chunks/pages/_app-f0f58655e4786493.js",
          revision: "f0f58655e4786493",
        },
        {
          url: "/_next/static/chunks/pages/_error-0a004b8b8498208d.js",
          revision: "0a004b8b8498208d",
        },
        {
          url: "/_next/static/chunks/pages/apps/%5BlistID%5D-a512b241e497d679.js",
          revision: "a512b241e497d679",
        },
        {
          url: "/_next/static/chunks/pages/blog-067a33a64a116f01.js",
          revision: "067a33a64a116f01",
        },
        {
          url: "/_next/static/chunks/pages/blog/%5Bslug%5D-cf90e650fce447ba.js",
          revision: "cf90e650fce447ba",
        },
        {
          url: "/_next/static/chunks/pages/bots-f36cde84044653e0.js",
          revision: "f36cde84044653e0",
        },
        {
          url: "/_next/static/chunks/pages/bots/%5BbotId%5D-14cf5ee02744e088.js",
          revision: "14cf5ee02744e088",
        },
        {
          url: "/_next/static/chunks/pages/bots/rules-8ca290b1feb4aab0.js",
          revision: "8ca290b1feb4aab0",
        },
        {
          url: "/_next/static/chunks/pages/index-fbb3489877de5bb2.js",
          revision: "fbb3489877de5bb2",
        },
        {
          url: "/_next/static/chunks/pages/legal/cookies-95122df0dde321e8.js",
          revision: "95122df0dde321e8",
        },
        {
          url: "/_next/static/chunks/pages/legal/privacy-bd3de3a1c04de24e.js",
          revision: "bd3de3a1c04de24e",
        },
        {
          url: "/_next/static/chunks/pages/legal/terms-7f56dbbd669657aa.js",
          revision: "7f56dbbd669657aa",
        },
        {
          url: "/_next/static/chunks/pages/lists-f8c153bfcb64b144.js",
          revision: "f8c153bfcb64b144",
        },
        {
          url: "/_next/static/chunks/pages/lists/%5BlistId%5D-41f10a0cf6c6287e.js",
          revision: "41f10a0cf6c6287e",
        },
        {
          url: "/_next/static/chunks/pages/lists/apply-5822f898045f39ff.js",
          revision: "5822f898045f39ff",
        },
        {
          url: "/_next/static/chunks/pages/lists/rules/eq-16101ac0e5415757.js",
          revision: "16101ac0e5415757",
        },
        {
          url: "/_next/static/chunks/pages/lists/rules/reqs-390ab3e8eb45d470.js",
          revision: "390ab3e8eb45d470",
        },
        {
          url: "/_next/static/chunks/pages/soon-d6713bc00d71211b.js",
          revision: "d6713bc00d71211b",
        },
        {
          url: "/_next/static/chunks/pages/team-061c7ce3252aa49c.js",
          revision: "061c7ce3252aa49c",
        },
        {
          url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
          revision: "99442aec5788bccac9b2f0ead2afdd6b",
        },
        {
          url: "/_next/static/chunks/webpack-5752944655d749a0.js",
          revision: "5752944655d749a0",
        },
        {
          url: "/_next/static/css/186370639a33067d.css",
          revision: "186370639a33067d",
        },
        {
          url: "/_next/static/tgZIjhUaFb4GopqEVpLWP/_buildManifest.js",
          revision: "4dcb309046d6ce44ca89b6edc0234692",
        },
        {
          url: "/_next/static/tgZIjhUaFb4GopqEVpLWP/_middlewareManifest.js",
          revision: "fb2823d66b3e778e04a3f681d0d2fb19",
        },
        {
          url: "/_next/static/tgZIjhUaFb4GopqEVpLWP/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/css/customColors.css",
          revision: "630745f9b6cde2a80c3a488c8230948f",
        },
        {
          url: "/css/global.css",
          revision: "efebf49def54ae5809b91f2c6f875521",
        },
        {
          url: "/css/nprogress.css",
          revision: "efb97f10ed991c2d38b31bd67afa1afa",
        },
        { url: "/css/tippy.css", revision: "af6d0b2b051a400d17a23dfa766f2a32" },
        {
          url: "/img/authors/RootLogo.webp",
          revision: "46b8068f3289ac75ae89c50ef2739ce3",
        },
        {
          url: "/img/authors/ToxicDevLogo.png",
          revision: "d4ae2be7617b2090bce4475ebdd4c49f",
        },
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
        { url: "/manifest.json", revision: "0fccf3c3553eb0cf870c4415d97b161c" },
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
              state: c,
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
