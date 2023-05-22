/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: "url('/bgimg.png')",
        bgLoginRegister: "url('/bgloginregister.png')",
      },
      colors: {
        primary: "#EFC81A",
        secondary: "#2E266F",
      },
      boxShadow: {
        right: "0px 0px 0px 0px rgba(0,0,0,0.63)",
      },
    },
  },
  plugins: [],
};
