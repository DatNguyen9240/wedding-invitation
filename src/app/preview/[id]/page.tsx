import { use } from 'react'
import Image from 'next/image'
import { ThemeProvider } from '@/context/ThemeContext'
import Navbar from '@/components/Navbar'
import FooterShared from '@/components/FooterShared'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function PreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  return (
    <ThemeProvider>
      <>
      <Navbar />

      <main className="min-h-screen pt-14 lg:pl-16">

        {/* ── SECTION 1: SPLIT-SCREEN HERO ────────────── */}
        <section className="min-h-[100svh] grid grid-cols-1 lg:grid-cols-2">

          {/* Left: invitation text */}
          <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20 bg-surface order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-12">
              <span className="h-px w-10 bg-secondary/50" />
              <span className="font-body text-[9px] uppercase tracking-[0.5em] text-secondary">
                You are cordially invited
              </span>
            </div>

            <h1
              className="font-serif leading-[0.88] tracking-tight text-on-surface mb-10"
              style={{ fontSize: 'clamp(4rem, 6vw, 7rem)' }}
            >
              Evelyn<br />
              <span className="italic text-primary font-extralight">&amp;</span><br />
              Julian
            </h1>

            {/* Date & Venue row */}
            <div className="grid grid-cols-2 gap-6 border-t border-outline-variant/20 pt-8 mb-10">
              <div>
                <p className="font-body text-[9px] uppercase tracking-[0.4em] text-secondary mb-2">When</p>
                <p className="font-serif text-xl text-on-surface leading-tight">Saturday</p>
                <p className="font-body text-sm text-on-surface-variant mt-0.5">24th October, 2026</p>
                <p className="font-body text-xs text-outline mt-0.5">Six in the evening</p>
              </div>
              <div>
                <p className="font-body text-[9px] uppercase tracking-[0.4em] text-secondary mb-2">Where</p>
                <p className="font-serif text-xl text-on-surface leading-tight">Florence</p>
                <p className="font-body text-sm text-on-surface-variant mt-0.5">The Glass Atelier</p>
                <p className="font-body text-xs text-outline mt-0.5">1287 Sterling Way</p>
              </div>
            </div>

            <a
              href="#rsvp"
              className="inline-flex items-center gap-3 font-body text-[10px] uppercase tracking-widest text-secondary border-b border-secondary/50 hover:border-secondary pb-0.5 hover:text-primary transition-all duration-300 w-fit group"
            >
              RSVP Now
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right: hero image */}
          <div className="relative h-64 lg:h-auto order-1 lg:order-2 overflow-hidden">
            <Image
              fill
              priority
              className="object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPdguWQHwI2_ivwZiB-OJB_jOE2PLxACeD2my1y_O48Skp-U9uf_hzsXbdiILa77gYu5mVHg8ZGiZBD8EpNeB-MWX4FPuZlKE1hduG1Exfjwg36qToOCDILlTFwRlYs25R43CxzZZM2ddGhdAIPPdDWfXe_oAPC4r4PTTiuAiOWISFIIEcaCx5wlJFsUA09a4XwteVfKGUWWyx3UrJ6A4IFGMH-EQS_ZSQsieNzM18zKQnVuBi9-puI49bTFNIJGlS5qJHCJO-ZRvX"
              alt="Evelyn and Julian — twilight garden"
              sizes="(min-width:1024px) 50vw, 100vw"
            />
            {/* Gradient to blend with left panel */}
            <div className="absolute inset-0 bg-gradient-to-r from-surface/60 via-transparent to-transparent lg:from-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-transparent to-surface/40" />
          </div>
        </section>

        {/* ── SECTION 2: EDITORIAL INVITATION TEXT ──── */}
        <section className="py-32 px-10 md:px-16 lg:px-24 bg-surface-container-lowest">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center gap-4 justify-center mb-12">
              <span className="h-px w-16 bg-secondary/30" />
              <span className="font-body text-[9px] uppercase tracking-[0.5em] text-secondary">The Invitation</span>
              <span className="h-px w-16 bg-secondary/30" />
            </div>

            <p
              className="font-serif italic text-on-surface leading-relaxed mb-12"
              style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)' }}
            >
              Because you have played such a significant part in our lives, we invite you to witness
              the beginning of our forever. Join us for an evening curated with love, moonlight,
              and timeless memories.
            </p>

            {/* Decorative image */}
            <div className="relative overflow-hidden aspect-[16/6] mt-16">
              <Image
                fill
                className="object-cover opacity-60 grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3bco0WYtILrjkIyJQcjAyydAC01tMx1quXNsVsSkDApn5eJFpNUV5WC6KAFxZ4D2KfVe9HouIai5Slyut1ajOYk_xMcpv7CEy2IvmBln7ILhR7ekzAivNu1k-XHhAOE07H5em9StZsXysTSN1nU1omJfbzniDRmq6i6K0UKKZJTIdZyMxlaMXw9kkC5IR9RDmMoyvMfoTQ5Ny6g1vHPekwzYIBfLziOtI8fTkVe9Dg4cMsfScyNVqZD6Iqn3_T8xxmSKveGIG3IlA"
                alt="White flowers and silk textures"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-transparent to-surface-container-lowest" />
            </div>
          </div>
        </section>

        {/* ── SECTION 3: CELEBRATION DETAILS ─────────── */}
        <section className="py-20 border-t border-outline-variant/10">
          <div className="max-w-5xl mx-auto px-10 md:px-16">

            <div className="flex items-center gap-4 mb-16">
              <span className="font-body text-[9px] uppercase tracking-[0.5em] text-secondary">Details</span>
              <span className="h-px flex-1 bg-outline-variant/20" />
            </div>

            <div className="divide-y divide-outline-variant/15">
              {/* Venue */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 group">
                <div>
                  <p className="font-body text-[9px] uppercase tracking-[0.4em] text-secondary mb-1">Venue</p>
                  <h3 className="font-serif text-2xl text-on-surface">The Glass Atelier</h3>
                </div>
                <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    1287 Sterling Way, Heritage Estate<br />Florence, Italy
                  </p>
                  <button className="self-start font-body text-[9px] uppercase tracking-widest text-primary border-b border-primary/50 pb-0.5 hover:border-primary whitespace-nowrap transition-colors">
                    Open in Maps →
                  </button>
                </div>
              </div>

              {/* Schedule */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
                <div>
                  <p className="font-body text-[9px] uppercase tracking-[0.4em] text-secondary mb-1">Schedule</p>
                  <h3 className="font-serif text-2xl text-on-surface">Evening Programme</h3>
                </div>
                <div className="md:col-span-2 grid grid-cols-2 gap-6">
                  {[
                    { time: '17:30', event: 'Guest Arrival & Welcome Drinks' },
                    { time: '18:00', event: 'Ceremony Begins' },
                    { time: '19:00', event: 'Reception & Dinner' },
                    { time: '22:00', event: 'Dancing & Celebration' },
                  ].map(s => (
                    <div key={s.time}>
                      <p className="font-body text-[9px] text-secondary mb-1">{s.time}</p>
                      <p className="font-body text-sm text-on-surface-variant">{s.event}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accommodation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
                <div>
                  <p className="font-body text-[9px] uppercase tracking-[0.4em] text-secondary mb-1">Stay</p>
                  <h3 className="font-serif text-2xl text-on-surface">Nocturne Suites</h3>
                </div>
                <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                    Block reserved for guests. Use code{' '}
                    <span className="text-secondary font-bold tracking-wider">BLOOM26</span>
                    {' '}when booking.
                  </p>
                  <button className="self-start font-body text-[9px] uppercase tracking-widest text-primary border-b border-primary/50 pb-0.5 hover:border-primary whitespace-nowrap transition-colors">
                    Book Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: RSVP ─────────────────────────── */}
        <section id="rsvp" className="py-32 border-t border-outline-variant/10 bg-surface-container-lowest">
          <div className="max-w-2xl mx-auto px-10 md:px-16">

            <div className="flex items-center gap-4 mb-16">
              <span className="h-px flex-1 bg-outline-variant/20" />
              <span className="font-body text-[9px] uppercase tracking-[0.5em] text-secondary">RSVP</span>
              <span className="h-px flex-1 bg-outline-variant/20" />
            </div>

            <h2 className="font-serif italic text-center mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Awaiting your response
            </h2>
            <p className="font-body text-sm text-on-surface-variant text-center mb-16">
              Kindly respond by the first of September.
            </p>

            {/* Floating label form */}
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { id: 'name', label: 'Guest Name', type: 'text', placeholder: 'Your full name' },
                  { id: 'dietary', label: 'Dietary Needs', type: 'text', placeholder: 'Allergies or preferences' },
                ].map(field => (
                  <div key={field.id} className="relative">
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder=" "
                      className="peer w-full bg-transparent border-b-2 border-outline-variant/30 pt-6 pb-2 font-serif text-xl text-on-surface focus:border-primary focus:outline-none transition-colors duration-200"
                    />
                    <label
                      htmlFor={field.id}
                      className="absolute top-6 left-0 font-body text-sm text-on-surface-variant transition-all duration-200 pointer-events-none
                        peer-focus:top-0 peer-focus:text-[9px] peer-focus:text-primary peer-focus:tracking-widest peer-focus:uppercase
                        peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-[9px] peer-[&:not(:placeholder-shown)]:tracking-widest peer-[&:not(:placeholder-shown)]:uppercase"
                    >
                      {field.label}
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button variant="primary" className="flex-1 py-5 text-[10px]" type="submit">
                  Accept with Joy
                </Button>
                <Button variant="outline" className="flex-1 py-5 text-[10px]" type="button">
                  Regretfully Decline
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Floating edit button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href={`/editor/${id}`}
          className="flex items-center gap-2 bg-primary text-on-primary font-body text-[9px] uppercase tracking-widest px-5 py-3 hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-2xl"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>edit</span>
          Edit Design
        </Link>
      </div>

      <FooterShared variant="minimal" />
      </>
    </ThemeProvider>
  )
}
