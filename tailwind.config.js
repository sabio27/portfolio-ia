/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette bleu sombre avec dégradés
        dark: {
          950: '#0a0e1a',  // Presque noir
          900: '#0f1419',  // Très sombre
          800: '#1a1f2e',  // Sombre
          700: '#252d3f',  // Moyen sombre
        },
        blue: {
          950: '#0c1e3d',
          900: '#1a2744',
          800: '#1e3a5f',
          700: '#2563eb',
          600: '#3b82f6',
          500: '#60a5fa',
          400: '#93c5fd',
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          glow: '#60a5fa',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
