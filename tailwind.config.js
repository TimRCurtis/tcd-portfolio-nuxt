/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'tcd-java': {
          '50': '#effcfc',
          '100': '#d7f6f6',
          '200': '#b4eded',
          '300': '#80dfe0',
          '400': '#38c4c8',
          '500': '#29abb1',
          '600': '#258b95',
          '700': '#24707a',
          '800': '#255d65',
          '900': '#234d56',
          '950': '#12333a',
        },
        'tcd-mariner': {
          '50': '#f0f7fe',
          '100': '#deecfb',
          '200': '#c4e0f9',
          '300': '#9bcbf5',
          '400': '#6bafef',
          '500': '#4990e8',
          '600': '#3273dc',
          '700': '#2b60ca',
          '800': '#294fa4',
          '900': '#264482',
          '950': '#1c2b4f',
        },
      },
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      roboto: ["Roboto Mono", "sans-serif"],
    },
  },
  plugins: [],
}

