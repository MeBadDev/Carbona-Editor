/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blur: {
          "0%": { "backdrop-filter": "blur(0px)", "display":"block" },
          "100%": { "backdrop-filter": "blur(4px)", "display":"none" },
        }
      },
      animation: {
        "fade-in": 'blur 300ms ease-in-out forwards',
      }
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
      // default is `false`, which means no prefix
      prefix: "ctp",
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: "mocha",
    }),
  ],
}