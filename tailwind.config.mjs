/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        playFair: ['var(--font-play-fair-display)', ...fontFamily.serif],
        roboto:['var(--font-roboto)', ...fontFamily.sans]
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme:{
          "primary":"#da0000",
          "secondary":"#ffffff",
          "accent":"#2b2e4a",
        },
      }, "dark", "cupcake"],
  },
};
