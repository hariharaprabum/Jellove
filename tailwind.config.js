/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D42719',
          'red-dark': '#A81E11',
          'red-light': '#FF3B2D',
          cream: '#FFF5E8',
          'cream-dark': '#F5E8D0',
          'cream-deeper': '#EDD9B8',
          dark: '#1A0D04',
          'dark-mid': '#3D2010',
          // Nature collection — earthy forest green
          nature: '#3A6030',
          'nature-light': '#4E8040',
          'nature-warm': '#D4900A',
          // World collection — warm deep amber/gold (replaces blue)
          world: '#8A5A10',
          'world-light': '#AA7520',
          'world-pale': '#F5E6C8',
          gold: '#E8A61A',
          'gold-light': '#F5C842',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Syne"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee:     'marquee 35s linear infinite',
        'marquee-rev': 'marquee-rev 35s linear infinite',
        float:       'float 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
