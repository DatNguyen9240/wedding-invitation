'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLink {
  href: string
  label: string
}

interface NavLinksContainerProps {
  links: NavLink[]
  className?: string
  activeClassName: string
  inactiveClassName: string
}

/**
 * A single client island for all nav links. 
 * This consolidates 'next/navigation' usage into one place, 
 * reducing hydration roots and improving 'Main-thread work' in Lighthouse.
 */
export default function NavLinksContainer({
  links,
  className = '',
  activeClassName,
  inactiveClassName
}: NavLinksContainerProps) {
  const pathname = usePathname()

  return (
    <div className={className}>
      {links.map(link => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            prefetch={false}
            className={isActive ? activeClassName : inactiveClassName}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}
