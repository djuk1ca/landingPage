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
        'map': "url('/dark-map.png')",

      },
      keyframes: {
        dropDown: {
          '0%': { maxHeight: '0', opacity: '0' },
          '100%': { maxHeight: '500px', opacity: '1' }
        },
        dropUp: {
          '0%': { maxHeight: '500px', opacity: '1' },
          '100%': { maxHeight: '0px', opacity: '0' }
        },
      },
      animation: {
        dropDown: 'dropDown 0.3s ease-in',
        dropUp: 'dropUp 0.3s ease-out',
      }
    },
  },
  plugins: [],
}