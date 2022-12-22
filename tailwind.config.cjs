/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'work-overley': '#ff8c66',
        'play-overley': '#56c2e6',
        'study-overley': '#ff5c7c',
        'exercise-overley': '#4acf81',
        'social-overley': '#7536d3',
        'self-care-overley': '#f1c65b',
      },
      backgroundColor: {
        'Very-dark-blue': '#0f1424',
        'Dark-blue': '#1c1f4a',
        'Desaturated-blue': '#6f76c8',
        'Pale-Blue': '#bdc1ff'
      },
      backgroundImage: {
        'work': "url('/images/icon-work.svg')",
        'exercise': "url('/images/icon-exercise.svg')",
        'play': "url('/images/icon-play.svg')",
        'social': "url('/images/icon-social.svg')",
        'study': "url('/images/icon-study.svg')",
        'self-care': "url('/images/icon-self-care.svg')",
      }
    },

  },
  plugins: [],
}
