import Navbar from '@/components/Navbar'
import FooterShared from '@/components/FooterShared'
import HeroSection from '@/components/sections/HeroSection'
import GallerySection from '@/components/sections/GallerySection'
import AtelierSection from '@/components/sections/AtelierSection'
import QuoteSection from '@/components/sections/QuoteSection'

export default function LandingPage() {
  return (
    <>
      <Navbar isStatic={true} />
      <main className="lg:pl-20">
        <HeroSection />
        <GallerySection />
        <AtelierSection />
        <QuoteSection />
        <FooterShared variant="full" />
      </main>
    </>
  )
}
