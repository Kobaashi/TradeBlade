/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'ds': "1440px",
      'sm': "375px",
    },
    extend: {
      fontFamily: {
        IBM: ["IBM Plex Sans", " sans-serif"],
      },
    },
  },
  plugins: [],
}
