/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        'blur-3': 'blur(3px)',
        'blur-5': 'blur(5px)',
        'blur-8': 'blur(8px)',
      },
    },
    fontFamily:{
      Sarpanch : ['Sarpanch','sans-serif'],
      Poppins : ['Poppins', 'sans-serif'],
    }, 
  },
  plugins: [
    
    
    // eslint-disable-next-line no-undef
    require('tailwindcss-animated')
  ],
}

