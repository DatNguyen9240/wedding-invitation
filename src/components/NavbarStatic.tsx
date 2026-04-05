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

          {/* Nav links — desktop */}
          <div className="hidden md:flex gap-10">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className={commonLinkClasses}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions — Purely static & Vanilla JS to avoid any Hydration overhead */}
          <div className="flex items-center gap-5">
            {/* Vanilla JS Theme Toggle — Zero React Hydration overhead */}
            <button
              id="theme-toggle-btn"
              aria-label="Toggle theme"
              className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-secondary/10 transition-colors duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                <path d="M12 22q-4.15 0-7.075-2.925T2 12q0-4.15 2.925-7.075T12 2q4.15 0 7.075 2.925T22 12q0 4.15-2.925 7.075T12 22Zm0-2q3.325 0 5.663-2.337T20 12q0-3.325-2.337-5.663T12 4v16Z" />
              </svg>
            </button>

            <script
              dangerouslySetInnerHTML={{
                __html: `(function(){
                  var b=document.getElementById('theme-toggle-btn');
                  if(b) b.onclick=function(){
                    var d=document.documentElement;
                    var t=d.getAttribute('data-theme')==='pink'?'default':'pink';
                    d.setAttribute('data-theme',t);
                    localStorage.setItem('eb-theme',t);
                  };
                })();`,
              }}
            />

            {/* Static Account link */}
            <a
              href="/account"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-outline-variant/30 hover:border-secondary transition-colors group"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-on-surface-variant group-hover:fill-secondary transition-colors">
                <path d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z" />
              </svg>
              <span className="text-[10px] font-body uppercase tracking-wider text-on-surface-variant group-hover:text-secondary hidden sm:inline">Account</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Side Navigation (Purely static) */}
      <aside className="fixed left-0 top-0 hidden lg:flex flex-col items-center py-8 z-40 h-screen w-16 bg-surface-container-lowest border-r border-outline-variant/10" style={{ willChange: 'transform' }}>
        <div className="mt-20 flex flex-col gap-8">
          {SIDE_TOOLS.map(item => (
            <div key={item.icon} className="group flex flex-col items-center gap-1 cursor-pointer w-full px-2">
              <div className="w-5 h-5 flex items-center justify-center text-on-surface-variant group-hover:text-secondary transition-colors duration-300">
                {/* Fallback box for side tools while I audit icons */}
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
              </div>
              <span className="text-[7px] uppercase tracking-[0.15em] text-on-surface-variant group-hover:text-secondary transition-colors duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </aside>

      {/* Bottom Nav — Mobile (Static version) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-highest flex justify-around py-4 z-50 border-t border-outline-variant/10">
        {MOBILE_NAV.map(item => (
          <a key={item.icon} href={item.href} className="flex flex-col items-center gap-1 text-on-surface">
             <div className="w-6 h-6 flex items-center justify-center bg-outline-variant/20 rounded-sm" />
            <span className="text-[8px] uppercase tracking-[0.12em]">{item.label}</span>
          </a>
        ))}
      </nav>
    </>
  )
}
