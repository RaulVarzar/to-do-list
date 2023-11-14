/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '500px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
   
  },
  plugins: [require("daisyui"), require('tailwindcss-animated')],
  daisyui: {
    themes: ["light", "dark", "aqua", "luxury", "sunset", "night"],
  },
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'cursive'],
      }
    }
  }
}
