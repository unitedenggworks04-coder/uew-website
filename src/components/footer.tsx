import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const footerNavigation = {
  company: [
    { name: 'Mission & Goals', href: '/about' },
    { name: 'Leadership Team', href: '/about' },
    { name: 'Global Presence', href: '/about' },
  ],
  products: [
    { name: 'Product Categories', href: '/products' },
    { name: 'Custom Solutions', href: '/capabilities' },
    { name: 'Spare Parts', href: '/products' },
  ],
  support: [
    { name: 'Certifications', href: '/quality' },
    { name: 'Quality Standards', href: '/quality' },
  ],
  contact: [
    { name: 'Get Quote', href: '/contact' },
    { name: 'Office Locations', href: '/contact' },
    { name: 'WhatsApp Support', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info & Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/UNITED LOGO.svg" 
                alt="United Engineering Works" 
                className="h-10 w-auto sm:h-12"
              />
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed max-w-md">
              Leading manufacturer of precision engineering components and custom 
              manufacturing solutions for industries worldwide.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="tel:+918979820228"
                  className="hover:text-primary transition-colors"
                >
                  +91-8979820228
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a 
                  href="mailto:unitedenggworks04@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  unitedenggworks04@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Meerut, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Support */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Products & Support</h3>
            <ul className="space-y-3">
              {footerNavigation.products.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t pt-8 sm:pt-10 mb-8 sm:mb-10">
          <div className="text-center">
            <h3 className="font-semibold mb-4 text-lg">Ready to Get Started?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact"
                className="btn-primary text-sm px-6 py-3"
              >
                Get Instant Quote
              </Link>
              <a
                href="https://wa.me/918979820228?text=Hi! I'm interested in your products. Can you provide more information?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2 text-sm px-6 py-3"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2025 United Engineering Works. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/sitemap.xml" className="hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
