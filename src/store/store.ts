import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Theme } from "../theme/theme";

interface AppState {
  theme: Theme;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  toggleTheme: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: "light",
      searchQuery: "",
      setSearchQuery: (query) => set({ searchQuery: query }),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "app-storage",
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);
