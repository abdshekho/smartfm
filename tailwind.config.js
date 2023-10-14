module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./domain/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false,
    theme: {
        screens: {
            sm: "475px",

            md: "768px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1536px",
        },

        extend: {
            colors: {
                primary: "#EC6725",
                secondary: "#24408E",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
