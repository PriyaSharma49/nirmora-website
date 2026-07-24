/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF7EF",
          soft: "#FFFDF9",
          deep: "#F1E7D3",
        },
        ink: {
          DEFAULT: "#1C1A17",
          soft: "#4A453D",
          dim: "#78716A",
        },
        gold: {
          light: "#E8CE9C",
          DEFAULT: "#C9A24B",
          soft: "#D9B577",
          deep: "#8C6435",
        },
        sage: "#6B8F5A",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Manrope'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(28,26,23,0.15)",
        gold: "0 12px 30px -10px rgba(201,162,75,0.45)",
      },
      borderRadius: {
        xl2: "22px",
      },
    },
  },
  plugins: [],
}
