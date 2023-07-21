/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orkney: ['Orkney', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        semiBold: 600,
        bold: 700,
      },
      maxHeight: {
        '60vh': '60vh',
        '80vh': '80vh',
      },
      colors: {
        primary: {
          DEFAULT: '#FF0000',
          dark: '#CC0000',
          light: '#FF9999',
        },
        secondary: {
          DEFAULT: '#00FF00',
          dark: '#009900',
          light: '#99FF99',
        },
        'backblack': '#050515', //Color for Navbar, Footer, and Headerblackwhite
        'backwhite': '#eeeeef', // Color for Home div background
        'whitetext': '#fdfdfc', // Color for text Navbar, Footer, and Header
        'greylighttext': '#c1c1c0', // Color for unselected text at Navbar, Footer, and Header
        'greydarktext': '#555555', // Color for unselected text at Nbody
        'darktext': '#ff00ff', // Color for text outside Navbar, Footer, and Header
        'darkgreytext': '#92959d', // Color for unselected text outside Navbar, Footer, and Header
        'cardorange': '#ffe1cc', // fancy color for card
        'cardpink': '#fbe2f4', // fancy color for card
        'cardpurple': '#e3dbfa', // fancy color for card
        'cardgreen': '#d4f6ed', // fancy color for card
        'cardblue': '#dff2ff', // fancy color for card
        'cardgrey': '#eceef5', // fancy color for card
        'buttondark': '#151412', // global button color
        'buttondarktext': '#f2f2f2', // global button text color
        'buttondarhover': '#fffefe', // global button hover color
        'buttondarkhovertext': '##151514', // global button text colbuttonor
        'buttonclick': '#f2f2f2', // global button text hover color
        'buttonlight': '#eaeaea', // light button color
        'buttonlighttext': '#151412', // light button text color
        'buttonlighthover': '#f2f2f2', // light button hover color
        'buttonlighthovertext': '#151514', // light button text hover color
        'buttonlightclick': '#f2f2f2', // light button text click color
        'linkbutton': '#89d0ff', // global button border color
        'linkbuttonhover': '#1d9be4', // global button border hover color
        'linkbuttontext': '#2b3940', // global button border text color
        'linkbuttonclick': '#89d0ff', // global button border text hover color
        'checkbox': '#e4e5e4', // global check box color
        'checkboxtext': '#e4e5e4', // global check box text color
        'checkboxclick': '#101010', // global check box text hover color
        'offwhite':'#FAF9F6'
      },
    },
  },
  plugins: [],
}

