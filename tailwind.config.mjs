/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F2752",
        "primary-soft": "#51718F",
        "muted-blue": "#A3B5C2",
        "text-dark": "#25262B",
        accent: "#D77534",
        "accent-dark": "#A25226",
        background: "#FFFFFF",
        "background-soft": "#F6F8FA",
        petroleum: "#0F2752",
        night: "#0F2752",
        gold: "#D77534",
        mist: "#F6F8FA",
        ink: "#25262B"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 39, 82, 0.08)"
      }
    }
  },
  plugins: []
};
