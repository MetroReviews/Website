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
    async redirects() {
        return [
          {
            source: '/github',
            destination: 'https://github.com/MetroReviews/Website/issues/new',
            permanent: true,
          },
        ]
      },
});