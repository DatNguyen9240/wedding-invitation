import Link from 'next/link'
import ThemeToggle from '@/components/ui/ThemeToggle'
import NavLink from '@/components/ui/NavLink'
import MobileNav from '@/components/navigation/MobileNav'
import AccountButton from '@/components/navigation/AccountButton'

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
  return (
    <>
      {/* Top Navigation — Server Component by default */}
      <nav className="fixed top-0 w-full z-50 glass-header border-b border-outline-variant/15">
        <div className="flex justify-between items-center px-8 lg:px-12 py-5">

          {/* Brand */}
          <Link
            href="/"
            className="font-serif italic text-xl text-on-surface hover:text-primary transition-colors duration-300"
          >
            Eternal Bloom
          </Link>

          {/* Nav links — desktop (using NavLink client islands) */}
          <div className="hidden md:flex gap-10">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                className="font-body text-[10px] uppercase tracking-[0.25em] transition-all duration-300 pb-0.5"
                activeClassName="text-primary border-b border-primary"
                inactiveClassName="text-on-surface hover:text-primary border-b border-transparent"
              />
            ))}
          </div>

          {/* Actions (using dedicated client islands) */}
          <div className="flex items-center gap-5">
            <ThemeToggle />
            <AccountButton />
          </div>
        </div>
      </nav>

      {/* Side Navigation — Desktop only (Purely static, no hydration!) */}
      <aside className="fixed left-0 top-0 hidden lg:flex flex-col items-center py-8 z-40 h-screen w-16 bg-surface-container-lowest/80 backdrop-blur-md border-r border-outline-variant/10" style={{ willChange: 'transform' }}>
        <div className="mt-20 flex flex-col gap-8">
          {SIDE_TOOLS.map(item => (
            <div
              key={item.icon}
              className="group flex flex-col items-center gap-1 cursor-pointer w-full px-2"
            >
              <span
                className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors duration-300"
                style={{ fontSize: '18px' }}
              >
                {item.icon}
              </span>
              <span className="text-[7px] uppercase tracking-[0.15em] text-on-surface-variant group-hover:text-secondary transition-colors duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </aside>

      {/* Bottom Nav — Mobile (Island) */}
      <MobileNav items={MOBILE_NAV} />
    </>
  )
}
