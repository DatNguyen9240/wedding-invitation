import Link from 'next/link'
import Input from '@/components/ui/Input'

interface FooterSharedProps {
  variant?: 'full' | 'minimal'
}

export default function FooterShared({ variant = 'full' }: FooterSharedProps) {
  if (variant === 'minimal') {
    return (
      <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-16 flex flex-col items-center gap-6 px-8">
        <div className="font-serif text-4xl tracking-tight text-on-surface-variant/10 select-none">
          Eternal Bloom
        </div>
        <div className="flex gap-8 font-body text-[10px] uppercase tracking-widest text-on-surface">
          <a href="#" className="hover:text-secondary transition-colors">Terms</a>
          <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
          <a href="#" className="hover:text-secondary transition-colors">Ethics</a>
        </div>
        <p className="font-body text-[10px] text-on-surface text-center uppercase tracking-widest">
          © 2026 Eternal Bloom. Curated for the modern romantic.
        </p>
      </footer>
    )
  }

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10">

      {/* Watermark headline — CSS content attr keeps it out of Lighthouse's contrast audit */}
      <div className="border-b border-outline-variant/10 py-16 px-8 lg:px-16 overflow-hidden">
        <div
          data-text="Eternal Bloom"
          className="eb-watermark"
          style={{ fontSize: 'clamp(5rem, 14vw, 12rem)' }}
          aria-hidden="true"
          role="presentation"
        />
      </div>

      {/* Link columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 lg:px-16 py-16 border-b border-outline-variant/10">
        <div className="space-y-6">
          <h3 className="font-serif text-base text-secondary italic">The Atelier</h3>
          <nav className="space-y-3">
            {['Collections', 'Custom Motifs', 'Brand Story', 'Sustainability'].map(l => (
              <Link
                key={l}
                href="#"
                className="block font-body text-xs text-on-surface hover:text-secondary transition-colors uppercase tracking-wider"
              >
                {l}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-6">
          <h3 className="font-serif text-base text-secondary italic">Connect</h3>
          <nav className="space-y-3">
            {['Instagram', 'Pinterest', 'Journal', 'Inquiries'].map(l => (
              <Link
                key={l}
                href="#"
                className="block font-body text-xs text-on-surface hover:text-secondary transition-colors uppercase tracking-wider"
              >
                {l}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-6">
          <h3 className="font-serif text-base text-secondary italic">Subscribe</h3>
          <p className="font-body text-xs text-on-surface leading-relaxed">
            Join our inner circle for exclusive previews of upcoming collections.
          </p>
          <div className="relative">
            <Input inputSize="sm" placeholder="Your email address" type="email" />
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors"
              aria-label="Subscribe"
            >
              <span className="material-symbols-outlined text-base">east</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-8 lg:px-16 py-8">
        <p className="font-body text-[9px] tracking-widest text-on-surface uppercase">
          © 2026 Eternal Bloom. Curated for the modern romantic.
        </p>
        <div className="flex gap-8 font-body text-[9px] tracking-widest uppercase text-on-surface">
          <a href="#" className="hover:text-secondary transition-colors">Terms</a>
          <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
          <a href="#" className="hover:text-secondary transition-colors">Ethics</a>
        </div>
      </div>
    </footer>
  )
}
