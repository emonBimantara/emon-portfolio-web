/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./dist/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8EE',
        'cream-light': '#F8F3E6',
        navy: '#1B203E',
        'navy-dark': '#1E2238',
        'navy-muted': '#5F6368',
        'cream-muted': '#9EA5C1',
        'avatar-pink': '#FCE4EC',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
