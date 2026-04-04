'use client'

import { useTheme } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isPink = theme === 'pink'

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isPink ? 'Dark' : 'Bloom'} theme`}
      title={isPink ? 'Switch to Dark' : 'Switch to Bloom'}
      className={`
        relative flex items-center gap-2 px-3 py-1.5
        border text-[10px] font-body font-bold uppercase tracking-widest
        transition-all duration-500 overflow-hidden group
        ${isPink
          ? 'border-primary/60 text-primary hover:bg-primary/10'
          : 'border-secondary/60 text-secondary hover:bg-secondary/10'
        }
      `}
    >
      {/* Animated background sweep */}
      <span
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
          ${isPink ? 'bg-primary/5' : 'bg-secondary/5'}
        `}
      />

      {/* Icon */}
      <span className="material-symbols-outlined text-base relative z-10 transition-transform duration-500 group-hover:rotate-12">
        {isPink ? 'dark_mode' : 'local_florist'}
      </span>

      {/* Label */}
      <span className="relative z-10 hidden sm:inline">
        {isPink ? 'Dark' : 'Bloom'}
      </span>
    </button>
  )
}
