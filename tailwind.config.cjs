/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple": "#7D6AFE",
        "white": "#FFFFFF",
        "pale-purple": "#BFB3FF",
        "gold": "#FFC107",
        "dark-gray": "#333",
        "bright-green": "#5CB85C",
        "dark-purple": "#5C2D91",
        "deep-purple": "#6200EE",
        "metallic-gold": "#D4AF37",
        "bright-purple": "#AA00FF",
        "light-gray": "#E5E5E5",
        "bright-yellow": "#FFFF00",
        "fresh-green": "#00FF00",
        "light-purple": "#ABA0F6",
        "darker-purple": "#7B53C3"
        }
    },
  },
  plugins: [],
}


// Main Color: Purple (#7D6AFE) - to be used as the primary color throughout the website
// Background Color: White (#FFFFFF) - to be used as the background color for a clean and calming look
// Accent Color 1: Pale Purple (#BFB3FF) - to be used as an accent color to complement the main color
// Accent Color 2: Gold (#FFC107) - to be used as an accent color for a touch of elegance and luxury
// Text Color: Dark Gray (#333) - to be used for all text, to ensure maximum readability
// Kids Page Color: Bright Green (#5CB85C) - to be used as the primary color for the kids page to represent youth and playfulness
// Button Color: Dark Purple (#5C2D91) - to be used for all buttons, to provide a clear call to action