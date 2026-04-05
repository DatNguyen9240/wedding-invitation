'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MobileNavItem {
  icon: string
  label: string
  href: string
}

export default function MobileNav({ items }: { items: MobileNavItem[] }) {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-highest flex justify-around py-4 z-50 border-t border-outline-variant/10" style={{ willChange: 'transform' }}>
      {items.map(item => (
        <Link
          key={item.icon}
          href={item.href}
          prefetch={false}
          className={`flex flex-col items-center gap-1 transition-colors ${
            pathname === item.href ? 'text-secondary' : 'text-on-surface'
          }`}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
            {item.icon}
          </span>
          <span className="text-[8px] uppercase tracking-[0.12em]">{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}
