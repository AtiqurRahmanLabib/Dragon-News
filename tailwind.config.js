/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins:"'Poppins', sans-serif"
      },
    
      backgroundImage: {
        'custom-image': "url('./src/assets/Images/bg.png')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

}