/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      zenKaku: ['Zen Kaku Gothic Antique', 'sans-serif'],
      Inter: ['Inter', 'sans-serif']
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {
      backgroundImage: {
        'pozadina': "url('/pozadina.png')",
        'gradient': "url('/gradient.png')",
      },
    },
  },
  plugins: [],
}