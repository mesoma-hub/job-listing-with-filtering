/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['League Spartan', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      'DesaturatedDarkCyan': 'hsl(180, 29%, 50%)',
      'LightGrayishCyan': 'hsl(180, 52%, 96%)',
      'LightGrayishCyanFilterTablets': 'hsl(180, 31%, 95%)',
      'DarkGrayishCyan': 'hsl(180, 8%, 52%)',
      'VeryDarkGrayishCyan': 'hsl(180, 14%, 20%)',
      'white': 'rgb(255 255 255)'
    }
  },
  plugins: [],
}

