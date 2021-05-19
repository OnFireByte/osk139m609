module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            body: ["HelvethaicaMon"],
            sans: ["HelvethaicaMon"],
        },
    },
    variants: {
        extend: {},
        transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    },
    plugins: [],
};
