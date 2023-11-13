/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "aqua"],
  },
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'cursive'],
      }
    }
  }
}
