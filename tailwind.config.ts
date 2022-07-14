/*tailwind.config.js*/
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
};