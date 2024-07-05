/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
        'inter': ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'img-first': "url('./assets/stars-1869692_1280.jpg')",
        'img-second': "url('./assets/love-4347350_1280.jpg')",
      }
    },
  },
  plugins: [],
}

