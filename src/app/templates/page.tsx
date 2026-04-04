'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import FooterShared from '@/components/FooterShared'

const FILTERS = ['All', 'Classic', 'Modern', 'Romantic', 'Avant-Garde']

type Height = 'tall' | 'med' | 'short'
const ASPECT: Record<Height, string> = {
  tall: 'aspect-[3/4]',
  med: 'aspect-[4/5]',
  short: 'aspect-[4/3]',
}

const TEMPLATES = [
  {
    id: '1', name: 'Aurelian Night', subtitle: 'Hand-pressed Gold Foil',
    height: 'tall' as Height,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYzgK2Xa_p1LTTohqE_55cJ7mRvvDhB7-sON_7reYqXSJQmXsGzvAChUZFz_-eLgFLjk3OkY4qrE6dL7Izu4LvhxGozsa1_ocBWz3fi_m9gKu0N2Q-IMv3ntP2WJaSQK_gyI3yuMNKqIglBTmpKVQsD9Ja4Nb5ksG5w2h_25fLFAgqyqv55BSdTZGh2vZYLy4fb3fTWXTph8cisdpqvgDU2jSGUvJn0fZJLHJcOcOHgX5k4TxewmJj-UsFKA-zxh6m_RrUkECxllwT',
    alt: 'Luxury gold foil wedding invitation',
  },
  {
    id: '2', name: 'Twilight Veil', subtitle: 'Translucent Vellum',
    height: 'short' as Height,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6rVTUG4s9nD-4zHAHJ0SKl7yhtiK0D22ZAvOU0e7Bd4Qr48a9ObKzVyPw35ok2InCr-FcDxvhse7e9-t1wQ0Bg6NwajC0YgmNDWZXtUxFFsRCtyuzhusZwPW-_k227bnPf6ZOaoUJq61amvHMafkannXW712t8idxD5PutAX3NUuRVM8BVW52fJamCEujoEJqgYWGwrBYl6YBeXBQl7kJeWhjaTwkpRrf8cGg3Ubg6wjt3PLt4gpnWimXRPpBko4YNE6o8PoujCBQ',
    alt: 'Minimalist vellum stationery design',
  },
  {
    id: '3', name: 'Ethereal Bloom', subtitle: 'Digital Watercolor',
    height: 'med' as Height,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzuebvfd3sihQt5L_eXJaTjkN0Uob4R2XX2OxdIobv0wtOzReSVQLH_zL0AuKyP4jP_Z5fLH_HlovIa40CbcH62rj8XtRWqYnbfK3PFPgj5NIJj7i39daX6SN3iD4HFP8vp_mgC3fi9UchT4QUCOx3oKSW_rJGzAjKry8vcJ6TiAEq_k5gI_shQpmT4ewAbesrYAD9WudRi2NK_LiejU1K6N0oSJgLPbQi6BoGTa0eMaDg4CLQgzR7eCDfxhvQ10OVoSkmpZjoqM24',
    alt: 'Botanical watercolor wedding invitation',
  },
  {
    id: '4', name: 'Modern Muse', subtitle: 'Architectural Noir',
    height: 'tall' as Height,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmlJKFBPK64tR07fydc6LLaPx6VHIUkDFZyqlpjsCK7Sfcg2r-uJgVZXfjED_8uhC2dwUqpgrCdcBMccHocehbRo6t_N8CgikxK0ExpBSyBZitreSk3l4ujWsWNLTU_jFVZJ0c2RleLfQLgfwsU1LEMY4rN2lA0M4Y_7UTHWBZdUBQuiZm38MgpRyqWIAJB_ViZbtnch1r6GzZyiXSbjlPIaZLPijFxqXcJaN9bfHAugybWLxSpvKKylMBNs2RmAfbxbmlCriVNBm8',
    alt: 'Editorial noir style invitation',
  },
  {
    id: '5', name: 'Nocturne Echo', subtitle: 'Deep Letterpress',
    height: 'short' as Height,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiXWn1vvXX8lOGUbmxqpT4frS5TtaSVeaA5l00rHtuo-mltHqTARSmGxV8bMJWNo2MkFIb-r0713L5N3lSXYzgS7mJ0O8f-1q00cRwCNvm2O8C28y_D2bd55Gc_LyG7vlZU4wIJrTahd3toAAMFubYBMC1fldRCMjC_GzqdNIdo3FYMYAcCHNN6nVSvM8OvtArwtJZFxObkGp4TwirW_Uj42ie1MKyG80Y0RVm8ODV_CGV4qMJ-D9zE9NxJ_FeHghVOgUpxniJlTcf',
    alt: 'Deep letterpress texture on dark paper',
  },
  {
    id: '6', name: 'Old World Grace', subtitle: 'Deckled Edge Cotton',
    height: 'med' as Height,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB74nDqtHEWYBDvhCkcDj3-azDG-8OzhkaytDppQSyjskM125SLOWC3Eir4zxsFBu8jcHbnLjkgOSZ8ez-hK94ivOG9cub0ZQ6dgi7xRQXa9hnLr-U6lnuKaDMxd0k3lSGwzJtqqDLz6GfiHM-2ke6u70h9jhT_CweeYvBUmsz-S9a_pkVrxcRrkHvH5vajnAkeXMMVdZrxI9ltrGVdUct2FmK-Fy5d9cHU4lE0guQENRYD45MgCRe8CyLOnmyrNGV3S6MfoEwocxa3',
    alt: 'Elegant place card with classic calligraphy',
  },
]

function TemplateCard({
  id, name, subtitle, height, src, alt, index,
}: { id: string; name: string; subtitle: string; height: Height; src: string; alt: string; index: number }) {
  return (
    <div className="break-inside-avoid mb-5 group cursor-pointer">
      <Link href={`/editor/${id}`} className="block">
        <div className={`relative overflow-hidden ${ASPECT[height]}`}>
          <Image
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            src={src}
            alt={alt}
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <div className="font-body text-[9px] uppercase tracking-[0.4em] text-secondary mb-2">
              {String(index).padStart(2, '0')}
            </div>
            <h3 className="font-serif text-xl leading-tight text-on-surface mb-1">{name}</h3>
            <p className="font-body text-[9px] uppercase tracking-widest text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              {subtitle}
            </p>
          </div>

          {/* Top-right Select CTA */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
            <span className="font-body text-[9px] uppercase tracking-widest bg-primary text-on-primary px-4 py-2">
              Select
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}

/* ── Carousel ─────────────────────────────────────── */
function TemplateCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  // Use IntersectionObserver to track active slide — zero forced reflow.
  // Unlike onScroll (which reads scrollWidth/scrollLeft synchronously),
  // IntersectionObserver fires asynchronously after layout is committed.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const slides = Array.from(track.querySelectorAll<HTMLElement>(':scope > [data-slide]'))
    if (!slides.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = slides.indexOf(entry.target as HTMLElement)
            if (idx !== -1) setCurrent(idx)
          }
        }
      },
      { root: track, threshold: 0.5 },
    )
    slides.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // scrollIntoView avoids reading offsetLeft (no forced reflow)
  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    const slides = track.querySelectorAll<HTMLElement>(':scope > [data-slide]')
    const slide = slides[index]
    if (!slide) return
    slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    // setCurrent will be updated by IntersectionObserver
  }, [])

  const prev = () => scrollTo(Math.max(0, current - 1))
  const next = () => scrollTo(Math.min(TEMPLATES.length - 1, current + 1))

  return (
    <div className="overflow-hidden border-b border-outline-variant/10 pb-10 pt-6">
      {/* Scroll track */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pl-8 lg:pl-16 pr-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {TEMPLATES.map((t, i) => (
          <div
            key={t.id}
            data-slide
            className="snap-start flex-shrink-0 w-[78vw] sm:w-[46vw] lg:w-[32vw] xl:w-[27vw]"
          >
            <Link href={`/editor/${t.id}`} className="block group">
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  src={t.src}
                  alt={t.alt}
                  sizes="(min-width:1280px) 27vw, (min-width:1024px) 32vw, (min-width:640px) 46vw, 78vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-body text-[9px] uppercase tracking-[0.4em] text-secondary mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-serif text-2xl text-on-surface mb-1">{t.name}</h3>
                  <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant">
                    {t.subtitle}
                  </p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-surface/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                  <span className="font-body text-[10px] uppercase tracking-widest text-on-surface border border-on-surface/40 px-6 py-2.5">
                    Select Design
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {/* Trailing spacer */}
        <div className="flex-shrink-0 w-4" />
      </div>

      {/* Controls row */}
      <div className="flex items-center gap-4 px-8 lg:px-16 mt-8">
        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {TEMPLATES.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${i === current
                ? 'w-6 h-1.5 bg-primary rounded-none'
                : 'w-1.5 h-1.5 bg-outline hover:bg-secondary'
                }`}
            />
          ))}
        </div>

        <div className="flex-1" />

        {/* Counter */}
        <span className="font-body text-[9px] uppercase tracking-widest text-on-surface-variant">
          {String(current + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(TEMPLATES.length).padStart(2, '0')}
        </span>

        {/* Arrows */}
        <div className="flex gap-1.5">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-10 h-10 flex items-center justify-center border border-outline-variant/20 text-on-surface-variant hover:text-secondary hover:border-secondary/40 disabled:opacity-20 disabled:cursor-default transition-all duration-200"
            aria-label="Previous template"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span>
          </button>
          <button
            onClick={next}
            disabled={current === TEMPLATES.length - 1}
            className="w-10 h-10 flex items-center justify-center border border-outline-variant/20 text-on-surface-variant hover:text-secondary hover:border-secondary/40 disabled:opacity-20 disabled:cursor-default transition-all duration-200"
            aria-label="Next template"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  )
}


export default function TemplatesPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-14 lg:pl-16">

        {/* Editorial Header */}
        <header className="border-b border-outline-variant/20 px-8 lg:px-16 pt-16 pb-12 overflow-hidden">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-body text-[9px] uppercase tracking-[0.5em] text-secondary">Volume I</span>
            <span className="h-px w-10 bg-secondary/30" />
            <span className="font-body text-[9px] uppercase tracking-[0.4em] text-on-surface-variant/40">
              {TEMPLATES.length} Designs
            </span>
          </div>
          <h1
            className="font-serif leading-[0.88] tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)' }}
          >
            The<br />
            <span className="italic font-extralight text-on-surface-variant">Curated</span><br />
            Gallery
          </h1>
        </header>

        {/* Featured Carousel */}
        <TemplateCarousel />

        {/* Filters */}
        <div className="flex gap-8 md:gap-12 px-8 lg:px-16 py-6 border-b border-outline-variant/10 overflow-x-auto">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`font-body text-[10px] uppercase tracking-[0.25em] whitespace-nowrap transition-all duration-200 pb-0.5 flex-shrink-0 ${activeFilter === f
                ? 'text-primary border-b border-primary'
                : 'text-on-surface-variant border-b border-transparent hover:text-on-surface'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry Grid (CSS columns) */}
        <div className="px-8 lg:px-16 py-10">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {TEMPLATES.map((t, i) => (
              <TemplateCard key={t.id} {...t} index={i + 1} />
            ))}
          </div>
        </div>
      </main>

      <FooterShared variant="full" />
    </>
  )
}
