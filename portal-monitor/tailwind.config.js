/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Mobile First breakpoints conforme Issue #8
        // sm: Tablet (> 720px)
        'sm': '721px',
        // md: Breakpoint intermediário (mantido para compatibilidade)
        'md': '768px',
        // lg: Desktop (> 1280px)
        'lg': '1281px',
        // xl: mantido para telas maiores
        'xl': '1536px',
      },
    },
  },
  plugins: [],
}
