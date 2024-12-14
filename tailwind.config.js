/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_color: "#ebebea",
        sclr: "#336798",
      },
      aspectRatio: {
        "3/4": "3 / 4",
      },
    },
  },
  plugins: [],
};
