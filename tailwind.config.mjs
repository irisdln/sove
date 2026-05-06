/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sable:      '#F5F1ED',
        argile:     '#5E4B43',
        sauge:      '#A3AC9A',
        soie:       '#EBE2D9',
        terracotta: '#A68A7D',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        titre: '0.05em',
        cta:   '0.12em',
      },
      lineHeight: {
        lecture: '1.6',
      },
      borderRadius: {
        galet: '9999px',
      },
    },
  },
  plugins: [],
};
