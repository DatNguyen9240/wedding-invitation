export default function QuoteSection() {
  return (
    <section className="relative py-40 bg-surface overflow-hidden" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 0 700px' }}>

      {/* Giant decorative quotation mark — background element */}
      <div
        className="absolute -top-16 -left-8 font-serif text-on-surface-variant/5 select-none pointer-events-none leading-none z-0"
        style={{ fontSize: 'clamp(12rem, 30vw, 22rem)' }}
        aria-hidden
      >
        &#8220;
      </div>

      {/* Subtle cross pattern — top right */}
      <div className="absolute top-12 right-16 hidden lg:flex flex-col gap-1 opacity-20" aria-hidden>
        {[0, 1, 2].map(i => (
          <div key={i} className="flex gap-1">
            {[0, 1, 2].map(j => (
              <div key={j} className="w-px h-4 bg-outline rotate-90" style={{ marginLeft: '3px' }} />
            ))}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-8 lg:px-24 relative z-10 max-w-5xl">

        {/* Section index */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-body text-[9px] uppercase tracking-[0.5em] text-secondary">04</span>
          <span className="h-px w-10 bg-secondary/30" />
          <h2 className="font-body text-[9px] uppercase tracking-[0.4em] text-on-surface">Testimonial</h2>
        </div>

        {/* Quote */}
        <blockquote className="font-serif italic text-on-surface leading-[1.3] mb-16"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)' }}
        >
          &ldquo;Eternal Bloom isn&apos;t just an invitation platform — it&apos;s the digital prologue
          to a couple&apos;s story. It captures the elusive feel of high-end stationery in a world
          that has gone entirely digital.&rdquo;
        </blockquote>

        {/* Attribution line */}
        <div className="flex items-center gap-5">
          <div className="h-px w-10 bg-secondary" />
          <div>
            <cite className="not-italic font-body text-xs uppercase tracking-[0.35em] text-secondary">
              Alexandra Sterling
            </cite>
            <p className="font-body text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
              Founder · Sterling Events &amp; Concierge
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
