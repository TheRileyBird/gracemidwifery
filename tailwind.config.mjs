/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: '#f8fafc',
        'surface-2': '#ffffff',
        contrast: '#121111',
        'contrast-2': '#494f5e',
        'contrast-3': '#c4bdbd',
        accent: '#dcb393',
        'accent-dark': '#a75c4a',
        'brand-primary': '#a75c4a',
        'brand-light': '#fef4f3',
        'accent-green': '#aab79b',
        'accent-light': '#fff4f3',
        'accent-teal': '#e5f2ef',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
