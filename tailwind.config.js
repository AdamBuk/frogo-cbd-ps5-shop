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
          950: '#09090b', // Deep matte charcoal black
          900: '#111114', // Subtle surface card
          850: '#16161a',
          800: '#1c1c22', // Borders & chips
          750: '#23232a',
          700: '#2e2e38',
        },
        brand: {
          red: '#dc2626', // Refined architectural red
          crimson: '#b91c1c',
          ruby: '#991b1b',
          subtle: 'rgba(220, 38, 38, 0.12)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'subtle-red': '0 4px 20px -2px rgba(220, 38, 38, 0.15)',
        'matte-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}
