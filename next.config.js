  const withPWA = require("next-pwa");

module.exports = withPWA({
    images: {
        domains: [ "cdn.discordapp.com" ]
    },
    i18n: {
        locales: Object.keys(require("./locales.config.js")),
        defaultLocale: 'en',
        localeDetection: true,
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV == "development"
    },
    env: {
      CLIENT_ID: process.env.CLIENT_ID,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
      APP_URI: process.env.APP_URI,
      JWT_SECRET: process.env.JWT_SECRET
    },
    async redirects() {
        return [
          {
            source: '/github',
            destination: 'https://github.com/MetroReviews/Website/issues/new',
            permanent: true,
          }
        ]
      },
});