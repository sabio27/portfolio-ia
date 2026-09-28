/** @type {import('tailwindcss').Config} */
// Toutes les couleurs de marque passent par les variables CSS définies dans app/globals.css.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces (du plus profond au plus élevé)
        dark: { 950: v('bg'), 900: v('surface'), 800: v('surface-2'), 700: v('surface-3') },
        // Émeraude : accent principal
        brand: {
          950: v('brand-950'), 900: v('brand-900'), 800: v('brand-800'), 700: v('brand-700'),
          600: v('brand-600'), 500: v('brand-500'), 400: v('brand-400'), 300: v('brand-300'),
        },
        // Or : accent secondaire (touches ponctuelles)
        'on-brand': v('on-brand'),
        gold: { 900: v('gold-900'), 600: v('gold'), 500: v('gold'), 400: v('gold'), 300: v('gold') },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
