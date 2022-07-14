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
            'desert-storm': {
              50: '#FFFFFF',
              100: '#FEFEFE',
              200: '#FDFDFD',
              300: '#FCFCFC',
              400: '#FAFAFA',
              500: '#F8F8F8',
              600: '#DFDFDF',
              700: '#959595',
              800: '#707070',
              900: '#4A4A4A',
              },
              
            'primary': {
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
              
            'tuna': {
              50: '#F5F5F6',
              100: '#EAEBEC',
              200: '#CBCDD0',
              300: '#ABAEB4',
              400: '#6D727C',
              500: '#2E3544',
              600: '#29303D',
              700: '#1C2029',
              800: '#15181F',
              900: '#0E1014',
              },
              
              'danube': {
              50: '#F8FAFD',
              100: '#F2F4FA',
              200: '#DDE4F3',
              300: '#C9D3EB',
              400: '#A1B2DD',
              500: '#7891CE',
              600: '#6C83B9',
              700: '#48577C',
              800: '#36415D',
              900: '#242C3E',
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
