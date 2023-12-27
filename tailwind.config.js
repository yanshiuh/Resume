/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        um: "url('/src/media/images/um.jpg')",
      },
      colors: {
        myYellow: "#ffcc00",
        myBlue: "#1d2a42",
      },
    },
  },
  plugins: [],
};
