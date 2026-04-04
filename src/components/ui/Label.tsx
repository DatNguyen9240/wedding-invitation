import { LabelHTMLAttributes, ReactNode } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  className?: string
}

/**
 * Micro label — 10px uppercase tracked.
 * Used in editor sidebar panels and RSVP form.
 */
export default function Label({ children, className = '', ...props }: LabelProps) {
  return (
    <label
      className={`block text-[10px] uppercase tracking-widest text-outline font-bold ${className}`}
      {...props}
    >
      {children}
    </label>
  )
}
