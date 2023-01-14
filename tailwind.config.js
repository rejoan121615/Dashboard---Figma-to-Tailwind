/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                FF008A: "#FF008A",
                E52929: "#E52929",
                "98A2B3": "#98A2B3",
                EAEDF3: "#EAEDF3",
                F9FAFD: "#F9FAFD",
                101828: "#101828",
                344054: "#344054",
                D0D5DD: "#D0D5DD",
                "7E869B": "#7E869B",
                "97A1B1": "#97A1B1",
                "687488": "#687488"
            },
            borderRadius: {
                "6px": "6px",
            },
            fontFamily: {
                inter: "'Inter', sans-serif",
            },
            fontSize: {
                "12px": "12px",
                "14px": "14px",
                "18px": "18px",
            },
            lineHeight: {
                "15px": "15px",
                "17px": "17px",
                "19px": "19px",
                "48px": "48px",
            },
            fontWeight: {
                500: 500,
            },
            boxShadow: {
                "card-drop": " 0px 1px 2px rgba(16, 24, 40, 0.05)",
            },
            height: {
                "84px": "84px"
            }
        },
    },
    plugins: [],
};
