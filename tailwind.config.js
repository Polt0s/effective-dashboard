module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'mobile': '640px',
      // => @media (min-width: 640px) { ... }
      'tablet': '1024px',
      'desktop': '1280px',
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {
      fontSize: {
        sm: ['14px', '20px'], // font-size/line-height
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '33px'],
      },
      spacing: {},
      borderRadius: {}
    },
  },
  plugins: [],
}