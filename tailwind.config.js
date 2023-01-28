/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        intro: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        intro: 'intro 2s ease-in-out',
        introAfter:  'intro 2s ease-in-out 1s forwards',
      },
    },
  },
  plugins: [],
};
