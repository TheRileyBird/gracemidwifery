/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: '#f8fafc',
        'base-2': '#ffffff',
        contrast: '#121111',
        'contrast-2': '#494f5e',
        'contrast-3': '#c4bdbd',
        accent: '#dcb393',
        'accent-dark': '#a75c4a',
        'accent-green': '#aab79b',
        'accent-light': '#fff4f3',
        'accent-teal': '#e5f2ef',
        navy: '#13182f',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
