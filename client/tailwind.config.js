/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          '50': '#ecfdf7',
          '100': '#d1faec',
          '200': '#a7f3da',
          '300': '#6ee7bf',
          '400': '#34d39e',
          DEFAULT: '#10b981',
          '600': '#059666',
          '700': '#047852',
          '800': '#065f42',
          '900': '#064e36',
          '950': '#022c1e',
        }
      },
      screens:{
        "xs":"480px",
        "sm":"640px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1280px",
        "2xl":"1536px"
      },
    },
  },
  plugins: [],
}