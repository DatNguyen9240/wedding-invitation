export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-surface-container-lowest">

      {/* Full-bleed cinematic background with safe fallback */}
      <div className="absolute inset-0 z-0 bg-primary/5">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlqgtImn_YHkfQv0qg8Ff-kgaj1bZtvKhJH9-gnoVIbhOc2nBmg5MJD3U5JAMYdrh9QhYpILBMEI5dw9M1WkdY_WPgXMiHWAB8Pus-n6Mg-6cTVhTsezR01LjKZNtsrLFmFQlHuQVJGlaI9zpInhVRZPml-6O6Hm2rsoNhp41F01AEmKwn-pxTwUw5CM9YK0a37yFyzeCHOdpyWqF3_V3AXvq2z7X40NgURMxNSWm5bTZP-xSuaAqbuUG2rUF2kx7VfFjqlsVYJXfL=w1920-v-rw"
          className="w-full h-full object-cover object-center transition-opacity duration-700"
          alt="Luxury wedding editorial"
          fetchPriority="high"
          loading="eager"
        />
        {/* Simplified Vignette Overlay */}
        <div className="absolute inset-0 z-10 hero-vignette" />
      </div>

      {/* Floating editorial badge — top right */}
      <div className="absolute top-28 right-8 lg:right-16 z-20 hidden lg:block">
        <div className="border border-outline-variant/40 p-6 text-center bg-surface-container/80 backdrop-blur-sm">
          <div className="font-body text-[9px] uppercase tracking-[0.4em] text-on-surface-variant mb-3">
            The Collection
          </div>
          <div className="font-serif text-3xl text-on-surface leading-none mb-1">200+</div>
          <div className="font-body text-[9px] uppercase tracking-widest text-secondary">Templates</div>
        </div>
      </div>

      {/* Main content — editorial bottom-anchored */}
      <div className="container mx-auto px-8 lg:px-16 relative z-20 pb-20 lg:pb-32">
        {/* Section index line */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-body text-[9px] uppercase tracking-[0.5em] text-secondary">01</span>
          <span className="h-px w-12 bg-secondary/40" />
          <span className="font-body text-[9px] uppercase tracking-[0.4em] text-on-surface">Introduction</span>
        </div>

        {/* Headline with responsive clamp sizing */}
        <h1
          className="font-serif leading-[0.9] tracking-tight text-on-surface mb-12"
          style={{ fontSize: 'clamp(3rem, 9vw, 8.5rem)' }}
        >
          Beyond the{' '}
          <em className="text-primary not-italic">Paper</em>,
          <br />
          <span className="font-extralight">A Legacy</span>
          <br />
          <span className="font-extralight italic">of Love</span>
        </h1>

        {/* Action row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8 sm:gap-16">
          <a
            href="/templates"
            className="inline-flex items-center gap-4 border-[0.5px] border-secondary text-secondary font-body uppercase tracking-[0.2em] hover:bg-secondary hover:text-on-secondary transition-all duration-300 px-8 py-4 text-[11px]"
          >
            Explore the Collection
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>

          <div className="hidden md:flex gap-10">
            {[
              { num: '5,000+', label: 'Couples' },
              { num: '200+', label: 'Designs' },
              { num: '12+', label: 'Curators' },
            ].map(s => (
              <div key={s.label} className="border-l border-outline-variant/30 pl-6">
                <div className="font-serif text-2xl text-on-surface leading-none mb-1">{s.num}</div>
                <div className="font-body text-[9px] uppercase tracking-[0.3em] text-on-surface">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker strip — Pure CSS, zero JS runtime overhead */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-outline-variant/20 overflow-hidden bg-surface-container-lowest h-12">
        <div className="flex animate-ticker w-[200%] h-full items-center">
          <div className="flex-none whitespace-nowrap px-4 font-body text-[9px] uppercase tracking-[0.4em] text-on-surface-variant/70">
            Eternal Bloom ✦ Wedding Invitations ✦ The Digital Atelier ✦&nbsp;&nbsp;
            Eternal Bloom ✦ Wedding Invitations ✦ The Digital Atelier ✦&nbsp;&nbsp;
            Eternal Bloom ✦ Wedding Invitations ✦ The Digital Atelier ✦&nbsp;&nbsp;
          </div>
          <div className="flex-none whitespace-nowrap px-4 font-body text-[9px] uppercase tracking-[0.4em] text-on-surface-variant/70">
            Eternal Bloom ✦ Wedding Invitations ✦ The Digital Atelier ✦&nbsp;&nbsp;
            Eternal Bloom ✦ Wedding Invitations ✦ The Digital Atelier ✦&nbsp;&nbsp;
            Eternal Bloom ✦ Wedding Invitations ✦ The Digital Atelier ✦&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </section>
  )
}
