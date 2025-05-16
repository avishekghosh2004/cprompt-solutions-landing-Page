// Theme colors
export const darkTheme = {
  background: {
    primary: '#0a0a0a',
    secondary: '#1a1a1a',
    tertiary: '#2a2a2a',
  },
  text: {
    primary: '#ffffff',
    secondary: '#e5e5e5',
    muted: '#a3a3a3',
  },
  accent: {
    primary: '#3b82f6',
    hover: '#2563eb',
  },
  border: {
    primary: '#3a3a3a',
    secondary: '#2a2a2a',
  },
}

export const lightTheme = {
  background: {
    primary: '#ffffff',
    secondary: '#f5f5f5',
    tertiary: '#e5e5e5',
  },
  text: {
    primary: '#0a0a0a',
    secondary: '#404040',
    muted: '#737373',
  },
  accent: {
    primary: '#3b82f6',
    hover: '#2563eb',
  },
  border: {
    primary: '#e5e5e5',
    secondary: '#f5f5f5',
  },
}

// Theme types
export type Theme = typeof darkTheme
export type ThemeMode = 'dark' | 'light'

// Theme context
import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

const ThemeContext = createContext<{
  theme: Theme
  themeMode: ThemeMode
  toggleTheme: () => void
}>({
  theme: darkTheme,
  themeMode: 'dark',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark')
  const theme = themeMode === 'dark' ? darkTheme : lightTheme

  const toggleTheme = () => {
    setThemeMode(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return React.createElement(
    ThemeContext.Provider,
    { value: { theme, themeMode, toggleTheme } },
    children
  )
}

export const useTheme = () => useContext(ThemeContext)