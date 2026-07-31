/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052E16',
        },
      },
      boxShadow: {
        'soft': '0 4px 24px -4px rgba(5, 150, 105, 0.12)',
        'soft-lg': '0 12px 40px -8px rgba(5, 150, 105, 0.18)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(5,150,105,0.08)',
      },
    },
  },
  plugins: [],
};
