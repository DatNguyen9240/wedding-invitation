'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Theme = 'dark' | 'pink'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  // On mount: the inline script in layout.tsx already set data-theme before first paint.
  // We only need to sync React state — NOT mutate the DOM again (that causes a forced reflow).
  useEffect(() => {
    const saved = localStorage.getItem('eb-theme') as Theme | null
    if (saved === 'pink' || saved === 'dark') {
      setTheme(saved)
    }
  }, [])

  function apply(t: Theme) {
    // Defer DOM mutation to next animation frame.
    // This prevents forced reflows: if anything reads layout properties
    // (offsetWidth, getBoundingClientRect, etc.) in the same sync task,
    // the browser would have had to recalculate layout immediately.
    requestAnimationFrame(() => {
      if (t === 'pink') {
        document.documentElement.setAttribute('data-theme', 'pink')
      } else {
        document.documentElement.removeAttribute('data-theme')
      }
    })
  }

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'pink' : 'dark'
    setTheme(next)
    apply(next)
    localStorage.setItem('eb-theme', next)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
