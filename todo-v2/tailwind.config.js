module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },

    daisyui: {
        themes: ["light", "dark", "corporate"],
    },

    plugins: [require("daisyui")],
};
