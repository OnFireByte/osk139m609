module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            body: ["HelvethaicaMon"],
            sans: ["HelvethaicaMon"],
        },
        extend: {
            spacing: {
                54: "13.5rem",
            },
            colors: {
                "gad-dark": "#243c5a",
                "gad-mid": "#203A43",
                "gad-light": "#2C5364",
            },
        },
    },
    variants: {
        extend: {},
        transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    },
    plugins: [],
    darkMode: "class",
};
