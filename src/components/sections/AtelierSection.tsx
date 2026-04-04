import Image from 'next/image'

const FEATURES = [
  {
    num: '01',
    title: 'Curated Customization',
    desc: 'Personalize every curve and hue within our meticulously designed aesthetic frameworks. Your vision, amplified by precision.',
  },
  {
    num: '02',
    title: 'Digital Calligraphy',
    desc: 'Experience the tactile weight of hand-inked letters, translated into a seamless and endlessly editable digital medium.',
  },
  {
    num: '03',
    title: 'The Muse Protocol',
    desc: 'Our AI-assisted layout engine ensures visual balance and editorial perfection — a creative partner for the discerning couple.',
  },
]

export default function AtelierSection() {
  return (
    <section className="py-32 bg-surface-container-lowest">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* Left: section header + features */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-body text-[9px] uppercase tracking-[0.5em] text-secondary/80">03</span>
              <span className="h-px w-10 bg-secondary/30" />
              <span className="font-body text-[9px] uppercase tracking-[0.4em] text-on-surface-variant">The Experience</span>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl leading-[1.1] mb-16">
              The Atelier:<br />
              <span className="italic font-extralight text-on-surface-variant">
                Where Artistry Meets
                <br />Innovation.
              </span>
            </h2>

            {/* Numbered feature list */}
            <div className="divide-y divide-outline-variant/20">
              {FEATURES.map(f => (
                <div
                  key={f.num}
                  className="grid grid-cols-[3rem_1fr] gap-6 py-9 group hover:bg-surface-container/30 transition-colors -mx-4 px-4 cursor-default"
                >
                  <span className="font-serif text-2xl text-secondary/55 group-hover:text-secondary/80 transition-colors leading-none pt-1">
                    {f.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl mb-3 text-on-surface group-hover:text-primary transition-colors duration-300">
                      {f.title}
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: moodboard image */}
          <div className="relative lg:sticky lg:top-32">
            <div className="relative overflow-hidden aspect-[3/4]">
              <Image
                fill
                className="object-cover grayscale contrast-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9IJ92MUaFf50YGENjZeVGSRMAr6NAqjmHhUsv3lq8w56h1fV5HxSyeX9N7Uk8CuLT_xcsrEshxIhHG0tyLoqmYtwFjPhad48j9avktBgPlyVZ_kI-LbB8Pr9XyOU2TGdo7O320IRiC5jRpvwfN_VVZ5UyL221ROCIeu73-nudrB56BwX5YiCY1079iACbP2mpuM4y_lukK3biUMXW3_4ChSGYQKalOnngx_HBxtQS1O3dRt51FYvAuxi8T_aaP4ZUstffIaWw4BOn"
                alt="Artist workspace with ink pots and paper samples"
                sizes="(min-width:1024px) 40vw, 100vw"
              />
              {/* Overlay gradient bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent" />
            </div>

            {/* Floating label card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 border border-outline-variant/30 p-6 bg-surface-container backdrop-blur-sm">
              <div className="font-body text-[9px] uppercase tracking-[0.4em] text-secondary mb-2">Est. 2026</div>
              <div className="font-serif text-lg text-on-surface">Editorial · Digital · Timeless</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
