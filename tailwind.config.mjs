/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,svelte,vue,ts,jsx,tsx}", // Tilpas stien hvis nødvendigt
  ],
  theme: {
    extend: {
      colors: {
        'hav-100': 'var(--hav-100)',
        'hav-90': 'var(--hav-90)',
        'hvid': 'var(--hvid)',
        'sort': 'var(--sort)',
        'grey-90': 'var(--grey-90)',
        'grey-70': 'var(--grey-70)',
        'grey-10': 'var(--grey-10)',
      },
      fontFamily: {
        'primary': ['var(--primary-font)', 'sans-serif'],
        'h1': ['var(--h1-font)', 'sans-serif'],
      },
      fontSize: {
        'small': 'var(--font-size-small)',
        'medium': 'var(--font-size-medium)',
        'large': 'var(--font-size-large)',
      },
      fontWeight: {
        'regular': 'var(--font-weight-regular)',
        'bold': 'var(--font-weight-bold)',
        'light': 'var(--font-weight-light)',
        'extralight': 'var(--font-weight-extralight)'
      },
    },
  },
  plugins: [],
};
