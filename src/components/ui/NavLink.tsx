'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  label: string
  className?: string
  activeClassName: string
  inactiveClassName: string
}

/**
 * Small client island for an active link.
 * Keeping this small reduces the 'Hydration reconciliation' cost of the main Navbar.
 */
export default function NavLink({
  href,
  label,
  className = '',
  activeClassName,
  inactiveClassName
}: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : inactiveClassName}`}
    >
      {label}
    </Link>
  )
}
