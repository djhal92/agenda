/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    container: {
      center: true,
      padding: 5,
    },
  },
  plugins: [require("daisyui")],
};
