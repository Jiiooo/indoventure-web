/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: "#0C111f",
        brightColor: "#1e40af"
      },
    },
  },
  plugins: [],
};
