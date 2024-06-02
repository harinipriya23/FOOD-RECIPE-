/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ["Alegreya"],
        noto: ["Noto Serif, serif"],
        prompt: ["Prompt, sans-serif"],
      },
    },
  },
  plugins: [],
};
