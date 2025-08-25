'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle, ChevronRight } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { motion, AnimatePresence } from 'framer-motion'
import { RFQDrawer } from './rfq-drawer'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Quality', href: '/quality' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [rfqOpen, setRfqOpen] = useState(false)

  return (
    <header className="bg-background border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/UNITED LOGO.svg" 
                alt="United Engineering Works" 
                className="h-10 w-auto sm:h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => setRfqOpen(true)}
              className="btn-primary"
            >
              Get Instant Quote
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button 
              onClick={() => setRfqOpen(true)}
              className="btn-primary text-sm px-3 py-2"
            >
              Quote
            </button>
            <button
              type="button"
              className="text-foreground hover:text-primary p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-background border-l shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center">
                    <img 
                      src="/UNITED LOGO.svg" 
                      alt="UEW" 
                      className="h-8 w-auto mr-3"
                    />
                    <span className="font-bold text-lg text-navy">UEW</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-muted rounded-lg"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Actions */}
                <div className="p-4 border-t space-y-3">
                  <button 
                    onClick={() => setRfqOpen(true)}
                    className="btn-primary w-full"
                  >
                    Get Instant Quote
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:+918979820228"
                      className="btn-outline flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/918979820228?text=Hi! I'm interested in your products. Can you provide more information?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="p-4 border-t bg-muted/50">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>+91-8979820228</span>
                    </div>
                    <div className="text-muted-foreground">
                      Meerut, Uttar Pradesh, India
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* RFQ Drawer */}
      <RFQDrawer isOpen={rfqOpen} onClose={() => setRfqOpen(false)} />
    </header>
  )
}
