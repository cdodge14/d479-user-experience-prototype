// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-emerald-600', 'hover:bg-emerald-700',
    'bg-teal-600', 'hover:bg-teal-700',
    'text-emerald-900', 'text-emerald-700'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
