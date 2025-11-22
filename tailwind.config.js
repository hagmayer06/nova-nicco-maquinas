/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nicco-orange': '#ffaa00',
        'nicco-orange-dark': '#fa9806',
        'nicco-gray': '#2b2a2a',
        'nicco-gray-light': '#3b3e41',
      },
      fontFamily: {
        'bebas': ['"Bebas Neue"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}
