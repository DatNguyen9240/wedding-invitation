import dynamic from 'next/dynamic'
import Link from 'next/link'
import ThemeToggle from '@/components/ui/ThemeToggle'
import AccountButton from '@/components/navigation/AccountButton'
import NavLinksContainer from '@/components/navigation/NavLinksContainer'
import { NAV_LINKS, SIDE_TOOLS, MOBILE_NAV } from '@/constants/navigation'

const MobileNav = dynamic(() => import('@/components/navigation/MobileNav'), {
  ssr: true,
})

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-header border-b border-outline-variant/15">
        <div className="flex justify-between items-center px-8 lg:px-12 py-5">

          {/* Brand */}
          <Link
            href="/"
            className="font-serif italic text-xl text-on-surface hover:text-primary transition-colors duration-300"
          >
            Eternal Bloom
          </Link>

          {/* Nav links — desktop (using single client island) */}
          <NavLinksContainer
            links={NAV_LINKS}
            className="hidden md:flex gap-10"
            activeClassName="text-primary border-b border-primary font-body text-[10px] uppercase tracking-[0.25em] transition-all duration-300 pb-0.5"
            inactiveClassName="text-on-surface hover:text-primary border-b border-transparent font-body text-[10px] uppercase tracking-[0.25em] transition-all duration-300 pb-0.5"
          />

          {/* Actions (using dedicated client islands) */}
          <div className="flex items-center gap-5">
            <ThemeToggle />
            <AccountButton />
          </div>
        </div>
      </nav>

      {/* Side Navigation — Desktop only (Purely static, no hydration!) */}
      <aside className="fixed left-0 top-0 hidden lg:flex flex-col items-center py-8 z-40 h-screen w-16 bg-surface-container-lowest border-r border-outline-variant/10" style={{ willChange: 'transform' }}>
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
