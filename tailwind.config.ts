import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#0f0f11',
          800: '#18181b',
          700: '#27272a',
          600: '#3f3f46',
          500: '#52525b',
        },
        accent: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
          light: '#818cf8',
        }
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-subtle": "bounce 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
  plugins: [tailwindcssAnimate],
  },
  plugins: [tailwindcssAnimate],
}
}
