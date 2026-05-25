/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a0a0b",
          900: "#101113",
          800: "#17191c",
          700: "#1f2227",
          600: "#2a2e35",
          500: "#3a3f48",
        },
        accent: {
          red: "#e11d2a",
          redDark: "#b8121d",
          steel: "#3b82f6",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "sans-serif"],
        display: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(225,29,42,.25), 0 10px 30px -10px rgba(225,29,42,.35)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(225,29,42,0.12), transparent 60%)",
      },
    },
  },
  plugins: [],
};
