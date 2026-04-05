import ThemeToggle from '@/components/ui/ThemeToggle'
import AccountButton from '@/components/navigation/AccountButton'
import { NAV_LINKS, SIDE_TOOLS, MOBILE_NAV } from '@/constants/navigation'

export default function NavbarStatic() {
  const commonLinkClasses = "text-on-surface hover:text-primary border-b border-transparent font-body text-[10px] uppercase tracking-[0.25em] transition-all duration-300 pb-0.5"

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-header border-b border-outline-variant/15">
        <div className="flex justify-between items-center px-8 lg:px-12 py-5">
          {/* Brand */}
          <a href="/" className="font-serif italic text-xl text-on-surface hover:text-primary transition-colors duration-300">
            Eternal Bloom
          </a>

          {/* Nav links — desktop (Static version using <a> to avoid router bundle) */}
          <div className="hidden md:flex gap-10">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className={commonLinkClasses}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <ThemeToggle />
            <AccountButton />
          </div>
        </div>
      </nav>

      {/* Side Navigation (Purely static) */}
      <aside className="fixed left-0 top-0 hidden lg:flex flex-col items-center py-8 z-40 h-screen w-16 bg-surface-container-lowest border-r border-outline-variant/10" style={{ willChange: 'transform' }}>
        <div className="mt-20 flex flex-col gap-8">
          {SIDE_TOOLS.map(item => (
            <div key={item.icon} className="group flex flex-col items-center gap-1 cursor-pointer w-full px-2">
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors duration-300" style={{ fontSize: '18px' }}>
                {item.icon}
              </span>
              <span className="text-[7px] uppercase tracking-[0.15em] text-on-surface-variant group-hover:text-secondary transition-colors duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </aside>

      {/* Bottom Nav — Mobile (Static version using <a>) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-highest flex justify-around py-4 z-50 border-t border-outline-variant/10">
        {MOBILE_NAV.map(item => (
          <a key={item.icon} href={item.href} className="flex flex-col items-center gap-1 text-on-surface">
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{item.icon}</span>
            <span className="text-[8px] uppercase tracking-[0.12em]">{item.label}</span>
          </a>
        ))}
      </nav>
    </>
  )
}
