import { InputHTMLAttributes } from 'react'

export type InputSize = 'lg' | 'sm'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  inputSize?: InputSize
  className?: string
}

/**
 * Underline-style input used across:
 *   inputSize="lg" — RSVP form (large serif text)
 *   inputSize="sm" — newsletter subscribe (small tracking text)
 */
export default function Input({
  label,
  inputSize = 'lg',
  className = '',
  ...props
}: InputProps) {
  const inputCls =
    inputSize === 'lg'
      ? 'w-full bg-transparent border-b border-outline/50 focus:border-secondary text-2xl font-serif py-4 outline-none transition-all placeholder:text-on-surface-variant/30'
      : 'w-full bg-transparent border-b border-outline-variant/30 py-3 text-xs tracking-widest focus:outline-none focus:border-secondary transition-colors text-on-surface'

  return (
    <div className="group">
      {label && (
        <label className="block font-body text-xs uppercase tracking-widest text-secondary mb-2">
          {label}
        </label>
      )}
      <input className={`${inputCls} ${className}`} {...props} />
    </div>
  )
}
