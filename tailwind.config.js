/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0E1A2B',      // Midnight Blue
        secondary: '#C7C9C7',    // Platinum Silver
        accent: '#D4AF37',       // Soft Gold
        background: '#F7F7F7',   // Light Background
      },
    },
  },
  plugins: [],
} 