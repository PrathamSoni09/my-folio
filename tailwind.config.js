/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        'slide-right': 'slideRight 1.5s ease-out forwards',
      },
      keyframes: {
        slideRight: {
          'from': { transform: 'translateX(-100%)' },
          'to': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}