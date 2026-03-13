/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: 'var(--brand-bg)',
          primary: 'var(--brand-primary)',
          accent: 'var(--brand-accent)',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}