/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                FF008A: "#FF008A",
                "98A2B3": "#98A2B3",
                EAEDF3: "#EAEDF3",
            },
            borderRadius: {
                "6px": "6px",
            },
            fontFamily: {
                "inter" : "'Inter', sans-serif"
            }
        },
    },
    plugins: [],
};
