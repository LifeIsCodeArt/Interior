/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        cardo: ['Cardo', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'interiorImage': 'url(@/assets/images/main-picture.png)',
      },
    }
  },
  plugins: [],
}

