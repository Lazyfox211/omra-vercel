/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: { DEFAULT: '#FAFAF7', 2: '#F2F1EC', 3: '#E8E6DF' },
        emerald: { DEFAULT: '#1B6B4A', 2: '#238C5E', 3: '#2DA671', dim: 'rgba(27,107,74,0.08)', light: '#E8F5EE' },
        gold: { DEFAULT: '#C8A84B', 2: '#E2C97E', 3: '#F5E6B8', dim: 'rgba(200,168,75,0.12)' },
        dark: { DEFAULT: '#1A1D1F', 2: '#2C2F33', 3: '#3A3D42' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Outfit"', 'system-ui', 'sans-serif'],
        arabic: ['"Amiri"', 'serif'],
      },
    },
  },
  plugins: [],
}
