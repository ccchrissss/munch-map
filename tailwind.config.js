/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/js/main.js",
    "./public/index.html",
    "./views/*.ejs",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// attempted to put custom colors in here, but it doesn't work since we're using the cdn. So I added them inside a script tag in each needed file in views.