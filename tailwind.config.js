/** @type {import('tailwindcss').Config} */

import img1 from "./src/assets/logo.png"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-second': '#F4F4F4',
        'red-primary': '#CE1C29',
      },
      fontFamily: {
        'display': ['Poppins'],
        'body': ['Inter'],
      }
    },
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}