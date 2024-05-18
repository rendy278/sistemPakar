/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    backgroundImage: {
      "gray-white-gradient": "linear-gradient(to right, #808080, #ffffff)",
    },
  },
  plugins: [require("daisyui")],
};
