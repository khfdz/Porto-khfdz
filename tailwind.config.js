/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sourceSans: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        color1: "#314933",
        color2: "#EEAA15",
        color3: "#EDE5D8",
        color4: "#1E180A",
        color5: "#201A0C",
        color6: "#F25B32",
        color7: "#AF6536",

        'text-dark': '#314933',
        'text-stroke': '#AF6536',
        'text-light': '#D2CABA',
      },
      zIndex: {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1px #AF6536',
        },
        '.text-stroke-only': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#AF6536',
          'color': 'transparent',
        },
      }, ['responsive', 'hover']);
    },
  ],
}
