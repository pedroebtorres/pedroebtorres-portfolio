/** @type {import('tailwindcss').Config} */ 

module.exports = { 

  content: [ 

    "./src/**/*.{js,jsx,ts,tsx}", 

  ], 

  theme: { 

    extend: {
      colors: {
        'custom-blue': '#2E5D9F',
        'custom-gray': '#d1d0d0',
      },
      backgroundImage: {
        'blue-wave': "url('/src/images/wave-haikei.svg')",
      }
    }, 

  }, 

  plugins: [], 

} 