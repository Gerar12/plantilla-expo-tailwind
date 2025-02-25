/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "work-black": ["WorkSans-Black", "sans-serif"],
        "work-light": ["WorkSans-Light", "sans-serif"],
        "work-medium": ["WorkSans-Medium", "sans-serif"],
      },

      colors: {
        // Aqui se pueden agregar colores personalizados
      },
    },
  },
  plugins: [],
};
