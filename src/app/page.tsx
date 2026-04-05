import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'

// Dynamic imports for EVERYTHING on the landing page to shatter 
// the shared chunk dependency and achieve 100/100 performance.
const NavbarStatic = dynamic(() => import('@/components/NavbarStatic'), { ssr: true })
const AtelierSection = dynamic(() => import('@/components/sections/AtelierSection'), { ssr: true })
const GallerySection = dynamic(() => import('@/components/sections/GallerySection'), { ssr: true })
const QuoteSection = dynamic(() => import('@/components/sections/QuoteSection'), { ssr: true })
const FooterShared = dynamic(() => import('@/components/FooterShared'), { ssr: true })

export default function LandingPage() {
  return (
    <>
      <NavbarStatic />
      <main className="lg:pl-16">
        <HeroSection />
        <AtelierSection />
        <GallerySection />
        <QuoteSection />
      </main>
      <FooterShared />
    </>
  )
}
