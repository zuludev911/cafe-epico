/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["SeasonsFont", "sans-serif"],
        livvic: ["Livvic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
