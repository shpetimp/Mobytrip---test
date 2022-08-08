/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sms': '600px'
      },
      colors: {
        black: '#1E1C2A',
        blue: '#0064D3',
        'blue-500': '#C3D7F3',
        'blue-200': '#E8E9F3',
        yellow: '#FEDE00',
        orange: '#FF9F2F',
        red: '#E25151',
        gray: '#6F7096',
        grey: '#3E3C49',
        green: '#139A1C',
        'green-500': "#C3F4A5"
      },
      fontSize:{
        xxs: ['10px', '15px'],
        x26: ['26px', '39px'],
        x32: ['32px', '48px'],
        x38: ['38px', '57px'],
      }
    },
  },
  plugins: [],
}
