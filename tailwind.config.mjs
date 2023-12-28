/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(-100%)" },
          "70%": { transform: "translateX(2%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(100%)" },
          "70%": { transform: "translateX(-2%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "sliding-left": "slideLeft 1.5s",
        "sliding-right": "slideRight 1.5s",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
