/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cabin: { DEFAULT: '#17181C', 2: '#1E1F24', 3: '#26272D' },
        gold: { DEFAULT: '#C8A84B', 2: '#E2C97E', 3: '#F5E6B8', dim: 'rgba(200,168,75,0.12)' },
        cream: { DEFAULT: '#F0EDE4', 2: '#D8D3C7' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
