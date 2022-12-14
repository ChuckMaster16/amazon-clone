/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  theme: {
    screens: {
      'xxs': '540px',
      // min-width (min-width: 540px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:false, //or "media" or "class"
  theme: {
    extend: {
      colors:{
        amazon_blue:{
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
}
