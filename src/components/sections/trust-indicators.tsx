'use client'

import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle, Globe } from 'lucide-react'

const trustItems = [
  {
    icon: Shield,
    title: 'ISO 9001:2015',
    description: 'Quality Management Systems Certified',
    color: 'text-blue-600'
  },
  {
    icon: CheckCircle,
    title: '25+ Years',
    description: 'Manufacturing Excellence',
    color: 'text-brass'
  },
  {
    icon: Globe,
    title: 'Global Export',
    description: 'International Standards',
    color: 'text-navy'
  }
]

export function TrustIndicators() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="heading-2 mb-3 sm:mb-4">Trust & Certifications</h2>
          <p className="text-body max-w-2xl mx-auto">
            Our commitment to quality and excellence is backed by international certifications 
            and decades of manufacturing expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-background border rounded-lg p-4 sm:p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <item.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${item.color}`} />
              </div>
              <h3 className="heading-3 mb-2 text-sm sm:text-base">{item.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              Made in India
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              Export Quality
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              On-Time Delivery
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              Technical Support
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
