/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        petroleum: "#0F2D3A",
        night: "#071A24",
        gold: "#C9A45C",
        mist: "#F4F6F8",
        ink: "#1F2933"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(7, 26, 36, 0.08)"
      }
    }
  },
  plugins: []
};
