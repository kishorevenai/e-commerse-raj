/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        CardGrid: "repeat(auto-fill,minmax(350px, 1fr))",
        OneCardGrid: "repeat(auto-fill,minmax(400px, 1fr))",
        CircleCardGrid: "repeat(auto-fill,minmax(230px, 1fr))",
      },
      colors: {
        primary_color: "#ebebea",
        sclr: "#ff9e00",
      },
      aspectRatio: {
        "3/4": "3 / 5",
        "C3/4": "3 / 4",
      },
    },
  },
  plugins: [],
};
