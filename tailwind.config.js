/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '4xl': '56rem',
      },
      colors: {
        primary: '#4361ee',
        secondary: '#4cc9f0',
        accent: '#f72585',
      },
    },
  },
  plugins: [],
} 