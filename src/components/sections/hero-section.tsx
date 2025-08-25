'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Phone, MessageCircle } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="heading-1 mb-4 sm:mb-6">
              Precision Engineering Components for{' '}
              <span className="text-primary">Automobile Industry</span>
            </h1>
            <p className="text-body mb-6 sm:mb-8 max-w-2xl lg:max-w-none">
              United Engineering Works, as the name suggests, is a united team of young, skilled professionals dedicated to delivering exceptional products to customers worldwide. Our unity is built on a shared vision and a common belief in providing top-notch engineering solutions. Founded in 1998 under the dynamic leadership of Mr. Jaspreet Singh Bindra, Chairman, UEW's success rests on three core principles: consistency, on-time delivery, and attractive, safe packaging.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              {[
                'ISO 9001:2015 Certified',
                '25+ Years Experience',
                'Made in India',
                'Global Exports'
              ].map((indicator, i) => (
                <motion.div
                  key={indicator}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-full"
                >
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                  <span className="whitespace-nowrap">{indicator}</span>
                </motion.div>
              ))}
            </div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center lg:justify-start"
            >
              <button 
                onClick={() => {
                  // This will be handled by the RFQ button in the header
                  // For now, scroll to contact section
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center gap-2 group"
              >
                Get Instant Quote
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Mobile Quick Actions */}
            <div className="lg:hidden mt-6 flex gap-3">
              <a
                href="tel:+918979820228"
                className="btn-secondary flex-1 flex items-center justify-center gap-2 py-3"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/918979820228?text=Hi! I'm interested in your products. Can you provide more information?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 flex items-center justify-center gap-2 py-3"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
                         <div className="bg-muted rounded-2xl p-6 sm:p-8 lg:p-12 text-center">
               <div className="bg-primary/10 rounded-full w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 flex items-center justify-center overflow-hidden">
                                   <img 
                    src="/Hero.jpg" 
                    alt="United Engineering Works Hero" 
                    className="w-full h-full object-cover rounded-full"
                  />
               </div>
               <h3 className="heading-3 mb-3 sm:mb-4">Technical Excellence</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Advanced manufacturing capabilities with precision engineering 
                and quality assurance.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-primary text-lg sm:text-xl">99.9%</div>
                  <div className="text-muted-foreground">Quality Rate</div>
                </div>
                <div>
                  <div className="font-bold text-primary text-lg sm:text-xl">24hrs</div>
                  <div className="text-muted-foreground">Response Time</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Action Buttons - Mobile Only */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="fixed bottom-4 right-4 z-40 lg:hidden flex flex-col gap-3"
      >
        <a
          href="https://wa.me/918979820228?text=Hi! I'm interested in your products. Can you provide more information?"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <span className="sr-only">WhatsApp Support</span>
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href="tel:+918979820228"
          className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        >
          <span className="sr-only">Phone Support</span>
          <Phone className="h-5 w-5" />
        </a>
      </motion.div>
    </section>
  )
}
