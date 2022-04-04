module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        custom: {
          '0%, 100%': { transform: 'scale(1.2)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        bounce: 'bounce 4s infinite',
        custom: 'custom 4.5s infinite',
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1900px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
