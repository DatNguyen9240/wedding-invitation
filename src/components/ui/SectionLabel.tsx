import { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  /** Use 'light' on light-bg sections (Atelier), default 'dark' for dark sections */
  theme?: 'dark' | 'light'
  className?: string
}

/**
 * Eyebrow / section label — small uppercase tracking text above headings.
 * Examples: "The Digital Curator", "Volume I • The Collection", "The Experience"
 */
export default function SectionLabel({
  children,
  theme = 'dark',
  className = '',
}: SectionLabelProps) {
  const color =
    theme === 'light' ? 'text-on-tertiary-fixed-variant' : 'text-secondary'

  return (
    <span
      className={`font-body tracking-[0.4em] uppercase text-xs block ${color} ${className}`}
    >
      {children}
    </span>
  )
}
