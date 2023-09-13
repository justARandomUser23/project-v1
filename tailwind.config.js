/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        firebrick: {
          100: "#C22825",
          200: "#c52625",
          300: "#CF2826",
        },
        white: "#fff",
        gray: {
          100: "#111",
          200: "rgba(0, 0, 0, 0.11)",
          300: "rgba(0, 0, 0, 0.22)",
          400: "rgba(255, 255, 255, 0)",
          500: "rgba(0, 0, 0, 0.25)",
        },
        darkslategray: {
          100: "#2f2f2f",
          200: "#2d2d2d",
        },
        silver: "#c2c2c2",
        black: "#000",
        gainsboro: "#e1e1e1",
        darkgray: "#b1b1b1",
        whitesmoke: "#ededed",
        limegreen: "#00a80d",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        inherit: "inherit",
        "fugaz-one": "'Fugaz One'",
        alatsi: "Alatsi",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
      },
      borderRadius: {
        "41xl": "60px",
        "3xs": "10px",
      },
    },
    fontSize: {
      lg: "18px",
      "5xl": "24px",
      "13xl": "32px",
      "6xl": "25px",
      "3xl": "22px",
      "2xl": "21px",
      "9xl": "28px",
      "22xl": "41px",
      lgi: "19px",
      "23xl": "42px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
