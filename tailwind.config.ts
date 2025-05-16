import { darkTheme, lightTheme } from "./src/styles/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          background: {
            primary: darkTheme.background.primary,
            secondary: darkTheme.background.secondary,
            tertiary: darkTheme.background.tertiary,
          },
          text: {
            primary: darkTheme.text.primary,
            secondary: darkTheme.text.secondary,
            muted: darkTheme.text.muted,
          },
          accent: {
            DEFAULT: darkTheme.accent.primary,
            hover: darkTheme.accent.hover,
          },
          border: {
            primary: darkTheme.border.primary,
            secondary: darkTheme.border.secondary,
          },
        },
        light: {
          background: {
            primary: lightTheme.background.primary,
            secondary: lightTheme.background.secondary,
            tertiary: lightTheme.background.tertiary,
          },
          text: {
            primary: lightTheme.text.primary,
            secondary: lightTheme.text.secondary,
            muted: lightTheme.text.muted,
          },
          accent: {
            DEFAULT: lightTheme.accent.primary,
            hover: lightTheme.accent.hover,
          },
          border: {
            primary: lightTheme.border.primary,
            secondary: lightTheme.border.secondary,
          },
        },
      },
    },
  },
  plugins: [],
};
