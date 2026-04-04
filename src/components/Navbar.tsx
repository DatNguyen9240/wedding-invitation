'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/ui/ThemeToggle'

const NAV_LINKS = [
  { label: 'Gallery', href: '/templates' },
  { label: 'Editor', href: '/editor/1' },
  { label: 'Preview', href: '/preview/1' },
  { label: 'RSVP', href: '#rsvp' },
]

const SIDE_TOOLS = [
  { icon: 'grid_view', label: 'Layout' },
  { icon: 'auto_awesome', label: 'Motifs' },
  { icon: 'palette', label: 'Palettes' },
  { icon: 'texture', label: 'Vellum' },
  { icon: 'photo_library', label: 'Media' },
]

const MOBILE_NAV = [
  { icon: 'gallery_thumbnail', label: 'Gallery', href: '/templates' },
  { icon: 'edit', label: 'Editor', href: '/editor/1' },
  { icon: 'celebration', label: 'RSVP', href: '#rsvp' },
  { icon: 'account_circle', label: 'Profile', href: '#profile' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-header border-b border-outline-variant/15">
        <div className="flex justify-between items-center px-8 lg:px-12 py-5">

          {/* Brand */}
          <Link
            href="/"
            className="font-serif italic text-xl text-on-surface hover:text-primary transition-colors duration-300"
          >
            Eternal Bloom
          </Link>

          {/* Nav links — desktop */}
          <div className="hidden md:flex gap-10">
            {NAV_LINKS.map(link => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-[10px] uppercase tracking-[0.25em] transition-all duration-300 pb-0.5 ${
                    isActive
                      ? 'text-primary border-b border-primary'
                      : 'text-on-surface-variant hover:text-on-surface border-b border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              className="text-on-surface-variant hover:text-secondary transition-colors"
              aria-label="Account"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                account_circle
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Side Navigation — Desktop only */}
      <aside className="fixed left-0 top-0 hidden lg:flex flex-col items-center py-8 z-40 h-screen w-16 bg-surface-container-lowest/80 backdrop-blur-md border-r border-outline-variant/10" style={{ willChange: 'transform' }}>
        <div className="mt-20 flex flex-col gap-8">
          {SIDE_TOOLS.map(item => (
            <div
              key={item.icon}
              className="group flex flex-col items-center gap-1 cursor-pointer w-full px-2"
            >
              <span
                className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors duration-300"
                style={{ fontSize: '18px' }}
              >
                {item.icon}
              </span>
              <span className="text-[7px] uppercase tracking-[0.15em] text-outline group-hover:text-secondary transition-colors duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </aside>

      {/* Bottom Nav — Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-highest/90 backdrop-blur-lg flex justify-around py-4 z-50 border-t border-outline-variant/10" style={{ willChange: 'transform' }}>
        {MOBILE_NAV.map(item => (
          <Link
            key={item.icon}
            href={item.href}
            className={`flex flex-col items-center gap-1 transition-colors ${
              pathname === item.href ? 'text-secondary' : 'text-on-surface-variant'
            }`}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
              {item.icon}
            </span>
            <span className="text-[8px] uppercase tracking-[0.12em]">{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  )
}
