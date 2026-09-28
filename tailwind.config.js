/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060608', // Deepest pitch black
          900: '#09090b', // Surface background
          850: '#0e0e12',
          800: '#141419', // Card background
          750: '#1a1a22',
          700: '#23232c', // Borders
          600: '#343442',
        },
        brand: {
          red: '#ff1424', // Aggressive bright neon red
          crimson: '#dc2626',
          ruby: '#b91c1c',
          wine: '#450a0a',
          glow: 'rgba(255, 20, 36, 0.4)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        syncopate: ['"Syncopate"', 'sans-serif'],
      },
      boxShadow: {
        'glow-red-sm': '0 0 15px -3px rgba(255, 20, 36, 0.45)',
        'glow-red': '0 0 30px -5px rgba(255, 20, 36, 0.55)',
        'glow-red-lg': '0 0 60px -10px rgba(255, 20, 36, 0.65)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'cyber-grid': "radial-gradient(circle, rgba(220, 38, 38, 0.12) 1px, transparent 1px)",
        'radial-vignette': "radial-gradient(circle at center, transparent 30%, #060608 100%)",
      }
    },
  },
  plugins: [],
}
