const colors = require("tailwindcss/colors");

const tones = Array.from({ length: 10 }).reduce((obj, val, index) => {
  const tone = index == 0 ? "50" : String(index * 100);
  const tones = Array.from({ length: 10 }).reduce((_obj, _val, _index) => {
    const _tone = String(_index) + (_index != 0 ? "0" : "");
    _obj[tone + "/" + _tone] = `var(--${tone}-${_tone})`;
    return _obj;
  }, {});
  obj = {
    ...tones,
    ...obj,
  };
  return obj;
}, {});

module.exports = {
  important: true,
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          850: "#172033",
          900: "#0f172a",
        },
        transparent: "transparent",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        amber: {
          ...tones,
          900: "var(--900)",
          800: "var(--800)",
          700: "var(--700)",
          600: "var(--600)",
          500: "var(--500)",
          400: "var(--400)",
          300: "var(--300)",
          200: "var(--200)",
          100: "var(--100)",
          50: "var(--50)",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.indigo.500"),
              "&:hover": {
                color: theme("colors.purple.600"),
              },
            },
            "a:link": {
              textDecorationStyle: "none",
            },
            "a:active": {
              textDecorationStyle: "none",
            },
            "a:visited": {
              textDecorationStyle: "none",
            },

            h1: {
              color: theme("colors.slate.300"),
            },
            h2: {
              color: theme("colors.slate.300"),
            },
            h3: {
              color: theme("colors.slate.300"),
            },
            h4: {
              color: theme("colors.slaet.300"),
            },
            h5: {
              color: theme("colors.slate.300"),
            },
            h6: {
              color: theme("colors.slate.300"),
            },

            strong: {
              color: theme("colors.slate.300"),
            },

            code: {
              color: theme("colors.slate.300"),
            },

            figcaption: {
              color: theme("colors.slate.400"),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
    extend: {},
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
