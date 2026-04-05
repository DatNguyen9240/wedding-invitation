import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  src: string
  alt: string
  name: string
  subtitle: string
  index: number
  aspect: string
  badge?: string
  sizes?: string
}

function TemplateCard({ src, alt, name, subtitle, index, aspect, badge, sizes = '(min-width:768px) 50vw, 100vw' }: CardProps) {
  return (
    <div className="group cursor-pointer">
      <div className={`relative overflow-hidden ${aspect}`}>
        <Image
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          src={src}
          alt={alt}
          sizes={sizes}
          loading={index <= 2 ? "eager" : "lazy"} 
          decoding="async"
        />

        {/* Layer: gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent transition-opacity duration-500" />

        {/* New badge */}
        {badge && (
          <div className="absolute top-5 left-5">
            <span className="font-body text-[9px] uppercase tracking-[0.3em] bg-secondary text-on-secondary px-3 py-1">
              {badge}
            </span>
          </div>
        )}

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
          <div className="font-body text-[9px] uppercase tracking-[0.35em] text-secondary mb-2">
            {String(index).padStart(2, '0')}
          </div>
          <h3 className="font-serif text-xl text-on-surface leading-tight mb-2">{name}</h3>
          <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            {subtitle}
          </p>
        </div>

        {/* Hover: discover CTA line */}
        <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <Link
            href="/templates"
            className="font-body text-[9px] uppercase tracking-widest text-primary border border-primary/50 px-3 py-1.5 hover:bg-primary hover:text-on-primary transition-colors duration-300"
          >
            Select
          </Link>
        </div>
      </div>
    </div>
  )
}

const TEMPLATES = [
  {
    id: '1',
    name: 'Velvet Midnight',
    subtitle: 'Atmospheric · Intimate',
    badge: undefined,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn1yECMk0CROnionuIR9ZpfE5P2V8Z8TUZCEdEZFHsU0t7ytYotLn8TyQWmKJ4Vf4VNscWinRcVjfOJ8KM7SF4CzpN5f1Tf9il8MfWdX_BMbN80dbTYwz0bdKqRnfDoFcmHfqAusSVoMpoM3Z_VPsD1DBIZYoscgFiLoMcyXYjvgHmJW5Ge04lYLPbpBku1LrBD7sMmw-OiwtQLDpw60-yu7bv440WM_PMkTAhwZAn7F0XF_f4bcACd-y0x2YXxOVFphP2iYaMfCim',
    alt: 'Dark velvet wedding invitation',
  },
  {
    id: '2',
    name: 'Sun-Kissed Whisper',
    subtitle: 'Ethereal · Organic',
    badge: undefined,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9ZWHC0Z6EJqZnqDK0TUcyQa_ebq_4f1GDhdQoQIMpjGfDaE68N6NatwDGGm4jhbz7mJyjwdIZtdyzOtmxN4iJCC6pReXAzf3DBxQL5-lMxW83AdqO7VN628kpPaNK-A20WUPwkw2GYM6EFbnAJd_iKX6dxtdeM9bueSu58O6hLnObMpq-KVsAOJcOLmNzM2u6yvC_KXCx2NLHYyXXix1omEF-PGaPy3ZTHc7w5Q1qWUo4kra8MRCULrtrEtH15Z1tXVOdckLOG9aO',
    alt: 'Soft ethereal wedding invitation',
  },
  {
    id: '3',
    name: 'Antique Vellum',
    subtitle: 'Timeless · Classical',
    badge: 'New',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQzEotg_Q0ZXJEW-6j4oEEcl-Dz_GSO7-yP2gMtnEyk1O-OqjqhHrPiWy23ry4h_rRs4A4vz11yviWT7Kg1s_W7Ze9pqwADaXm8mAXK9grFPHGWr-dv1DS10X4ILnr5B0v-_bfAE3_JHfBGHmyp6UT1wETVUq6c_gnGgUyiKHXYk4ZbVvNh0YC2i6B_GHY8tpuTARxC7lSHTxd9u1HzHwF03F5C4KjYg3VvTUJHYdgCxU2DlDBrm5blApBduvcOj53DWL2s9Pwh0Fz',
    alt: 'Antique vellum wedding invitation',
  },
]

export default function GallerySection() {
  return (
    <section className="py-32 bg-surface" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 0 1200px' }}>
      <div className="container mx-auto px-8 lg:px-16">

        {/* Editorial header */}
        <div className="flex items-end justify-between mb-20 border-b border-outline-variant/20 pb-10">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="font-body text-[9px] uppercase tracking-[0.5em] text-secondary">02</span>
              <span className="h-px w-10 bg-secondary/30" />
              <span className="font-body text-[9px] uppercase tracking-[0.4em] text-on-surface">The Gallery</span>
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl leading-tight">
              The Curated
              <br />
              <span className="italic font-extralight">Collection</span>
            </h2>
          </div>
          <Link
            href="/templates"
            className="hidden md:flex items-center gap-3 font-body text-[10px] uppercase tracking-widest text-on-surface hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary"
          >
            View All <span>→</span>
          </Link>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Large card — left */}
          <div className="md:col-span-7">
            <TemplateCard {...TEMPLATES[0]} index={1} aspect="aspect-[4/5]" sizes="(min-width:768px) 58vw, 100vw" />
          </div>

          {/* Two stacked cards — right */}
          <div className="md:col-span-5 flex flex-col gap-6 lg:gap-8 md:pt-12">
            <TemplateCard {...TEMPLATES[1]} index={2} aspect="aspect-[3/2]" sizes="(min-width:768px) 42vw, 100vw" />
            <TemplateCard {...TEMPLATES[2]} index={3} aspect="aspect-[4/3]" sizes="(min-width:768px) 42vw, 100vw" />
          </div>
        </div>

        {/* Bottom CTA on mobile */}
        <div className="md:hidden mt-10 text-center">
          <Link
            href="/templates"
            className="font-body text-[10px] uppercase tracking-widest text-secondary border-b border-secondary pb-1"
          >
            View All Designs →
          </Link>
        </div>
      </div>
    </section>
  )
}
