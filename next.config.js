const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: ["cdn.discordapp.com", "cdn.infinitybots.xyz"],
  },
  i18n: {
    locales: Object.keys(require("./locales.config.js")),
    defaultLocale: "en",
    localeDetection: true,
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV == "development",
  },
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    APP_URI: process.env.APP_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    LOGOUT_PASS: process.env.LOGOUT_PASS,
    API_AUTH: process.env.API_AUTH,
    APPLY_HOOK_ID: process.env.APPLY_HOOK_ID,
    APPLY_HOOK_KEY: process.env.APPLY_HOOK_KEY,
    MONGO: process.env.MONGO,
    CRYPTR: process.env.CRYPTR,
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/MetroReviews/Website/issues/new",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/49DE35a5eJ",
        permanent: true,
      },
      {
        source: "/support",
        destination: "https://discord.gg/49DE35a5eJ",
        permanent: true,
      },
    ];
  },
});
