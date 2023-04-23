/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sen': ['Sen', 'sans-serif'],
      'sans': ['ui-sans-serif', 'system-ui']
    },
    extend: {
      colors: {
        "purple-p": "#555A88",
        "red-p": "#D85D5D"
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

