import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  isReducedMotion: boolean
  setReducedMotion: (isReducedMotion: boolean) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
      isReducedMotion: false,
      setReducedMotion: (isReducedMotion) => set({ isReducedMotion }),
    }),
    {
      name: 'app-storage',
    }
  )
) 