export const theme = {
  dark: {
    background: {
      primary: "#0f0f11",
      secondary: "#18181b",
      tertiary: "#27272a",
    },
    text: {
      primary: "#f4f4f5",
      secondary: "#a1a1aa",
      accent: "#6366f1",
    },
    border: {
      primary: "#3f3f46",
      secondary: "#52525b",
    },
  },
  light: {
    background: {
      primary: "#ffffff",
      secondary: "#f4f4f5",
      tertiary: "#e4e4e7",
    },
    text: {
      primary: "#18181b",
      secondary: "#3f3f46",
      accent: "#4f46e5",
    },
    border: {
      primary: "#e4e4e7",
      secondary: "#d4d4d8",
    },
  },
} as const;

export type Theme = "light" | "dark";
