import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

export type ButtonVariant = 'primary' | 'outline' | 'hero' | 'ghost' | 'small'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  href?: string
  children: ReactNode
  className?: string
}

/**
 * Base styling per variant — does NOT include padding/size, pass via className.
 * primary : gradient bg, white text
 * outline : border-secondary text-secondary, fills faintly on hover
 * hero    : border-secondary, fills solid on hover (landing CTA)
 * ghost   : text-only link-style button
 * small   : tiny publish-style pill
 */
const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    'inline-flex items-center justify-center bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-body font-bold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity',
  outline:
    'inline-flex items-center justify-center border border-secondary text-secondary font-body font-bold tracking-[0.2em] uppercase hover:bg-secondary/5 transition-colors',
  hero:
    'inline-flex items-center gap-4 border-[0.5px] border-secondary text-secondary font-body uppercase tracking-[0.2em] hover:bg-secondary hover:text-on-secondary-fixed transition-all duration-500 group',
  ghost:
    'inline-flex items-center gap-4 text-primary font-body uppercase tracking-widest hover:opacity-70 transition-opacity',
  small:
    'inline-flex items-center justify-center bg-primary text-on-primary font-body text-[10px] font-bold tracking-widest uppercase',
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const cls = `${VARIANTS[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
