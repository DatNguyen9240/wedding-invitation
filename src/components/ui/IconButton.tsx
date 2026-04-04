import { ButtonHTMLAttributes } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string
  active?: boolean
  size?: 'sm' | 'md'
  className?: string
}

/**
 * Square icon button using Material Symbols.
 * active=true  → border-secondary text-secondary
 * active=false → muted border, highlights on hover
 */
export default function IconButton({
  icon,
  active = false,
  size = 'md',
  className = '',
  ...props
}: IconButtonProps) {
  const sizeClass = size === 'md' ? 'w-12 h-12' : 'w-10 h-10'
  const activeClass = active
    ? 'border-secondary text-secondary'
    : 'border-outline-variant/30 text-outline hover:border-secondary/50 hover:text-secondary'

  return (
    <button
      className={`${sizeClass} border flex items-center justify-center transition-colors ${activeClass} ${className}`}
      {...props}
    >
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  )
}
