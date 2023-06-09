/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow:{
        "landing": "0px 4px 32px 21px rgba(133, 137, 146, 0.39)"
      }
    },
  },
  plugins: [],
}

