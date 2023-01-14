/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                FF008A: "#FF008A",
                "98A2B3": "#98A2B3",
                EAEDF3: "#EAEDF3",
                F9FAFD: "#F9FAFD",
            },
            borderRadius: {
                "6px": "6px",
            },
            fontFamily: {
                inter: "'Inter', sans-serif",
            },
            fontSize: {
                "14px": "14px",
            },
            lineHeight: {
                "19px": "19px",
                "48px": "48px",
            },
            fontWeight: {
                500: 500,
            },
        },
    },
    plugins: [],
};
