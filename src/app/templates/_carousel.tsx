'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TEMPLATES } from './_data'

/** Horizontal snap carousel — uses IntersectionObserver to avoid forced reflows. */
export default function TemplateCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  // IntersectionObserver fires asynchronously after layout — zero forced reflow.
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

  // scrollIntoView avoids reading offsetLeft — no forced reflow.
  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    const slide = track.querySelectorAll<HTMLElement>(':scope > [data-slide]')[index]
    if (!slide) return
    slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
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
                  // First two slides are visible above fold — eager + high priority
                  priority={i < 2}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={i < 2 ? 'high' : 'low'}
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
