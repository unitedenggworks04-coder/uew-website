import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'
import { FeaturedProducts } from '@/components/sections/featured-products'
import { TrustIndicators } from '@/components/sections/trust-indicators'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'

export const metadata: Metadata = {
  title: 'United Engineering Works - Leading Manufacturer of Engineering Components',
  description: 'Get instant quotes for precision engineering components, automotive parts, and custom manufacturing solutions. Trusted by industries worldwide.',
  openGraph: {
    title: 'United Engineering Works - Leading Manufacturer of Engineering Components',
    description: 'Get instant quotes for precision engineering components, automotive parts, and custom manufacturing solutions.',
  },
}

export default function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <TrustIndicators />
      <FeaturedProducts />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
