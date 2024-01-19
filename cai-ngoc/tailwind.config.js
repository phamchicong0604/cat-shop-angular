/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const utilities = {};

      const customUtilities  = {
        ".menu-responsive-font": {
          fontSize: `calc(var(--menu-font-size) * 100vw / 1920)`,
        },
        ".bg-dashboad-shop": {
          backgroundColor: 'hsl(208, 50%, 42%)',
        },
      };
      addUtilities(customUtilities );
    },
  ],
};
