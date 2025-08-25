'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="heading-2 mb-4 sm:mb-6">About United Engineering Works</h2>
            <p className="text-body mb-6 sm:mb-8">
              Founded in 1998 under the dynamic leadership of Mr. Jaspreet Singh Bindra, 
              UEW has grown from a local manufacturer to a trusted partner for industries 
              across India and overseas.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                'Complete in-house production from raw materials to finished products',
                'Advanced casting and finishing processes',
                'Comprehensive testing protocols',
                'International quality standards compliance'
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="btn-primary flex items-center gap-2 group">
                Learn More About Us
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="bg-muted rounded-2xl p-6 sm:p-8 lg:p-12 text-center">
              <div className="bg-primary/10 rounded-full w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-primary text-3xl sm:text-4xl font-bold">🏭</span>
              </div>
              <h3 className="heading-3 mb-3 sm:mb-4">Manufacturing Excellence</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                State-of-the-art facilities with precision engineering capabilities 
                and quality assurance systems.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div>
                  <div className="font-bold text-primary text-lg sm:text-xl">1998</div>
                  <div className="text-muted-foreground">Founded</div>
                </div>
                <div>
                  <div className="font-bold text-primary text-lg sm:text-xl">25+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
