/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
      screens: {
          sm: "540px",
          // => @media (min-width: 576px) { ... }
      
          md: "720px",
          // => @media (min-width: 768px) { ... }
      
          lg: "960px",
          // => @media (min-width: 992px) { ... }
      
          xl: "1140px",
          // => @media (min-width: 1200px) { ... }
      
          "2xl": "1320px",
          // => @media (min-width: 1400px) { ... }
      },
      container: {
          center: true,
          padding: "16px",
      },
      extend: {
          colors: {
            primary: {
              50: '#F4F7FC',
              100: '#E9EEFA',
              200: '#C8D5F2',
              300: '#A7BBEB',
              400: '#6688DB',
              500: '#2455CC',
              600: '#204DB8',
              700: '#16337A',
              800: '#10265C',
              900: '#0B1A3D',
            },
            secondary: {
              50: '#FFFFFF',
              100: '#FEFEFF',
              200: '#FEFEFE',
              300: '#FDFDFD',
              400: '#FBFBFC',
              500: '#F9F9FA',
              600: '#E0E0E1',
              700: '#959596',
              800: '#707071',
              900: '#4B4B4B',
              },
          },
          boxShadow: {
              input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
              pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
              "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
              testimonial: "0px 60px 120px -20px #EBEFFD",
          },
      },
  },
  variants: {
      extend: {},
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}
