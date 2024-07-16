/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Primarys: "#0D0C22",
        primeGray: "#F4F4FB",
        premium: "#FFC100",
        titleGray: "#565D6D",
      },
      fontFamily: {
        "dm-sans": ['"DM Sans"', "sans-serif"],
        "anek-bangla": ['"Anek Bangla"', "sans-serif"],
        calibri: ["Calibri", "sans-serif"],
      },
      screens: {
        "900px": "900px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
