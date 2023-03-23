/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Poppins", "sans-serif", "system-ui"],
        },
        extend: {
            colors: {
                "royal-blue": "#4568DC",
                wisteria: "#B06AB3",
                "mine-shaft": "#373737",
                porcelain: "E8EAEC",
                shakespeare: "#56A8D3",
                'dull-lavender':'#9C8EE3'
            },
            spacing: {
                sides: "8%",
            },
        },
    },
    plugins: [],
}
