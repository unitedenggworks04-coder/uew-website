'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export function ContactSection() {
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
          <h2 className="heading-2 mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-body max-w-2xl mx-auto">
            Ready to discuss your project requirements? Contact us for instant quotes, 
            technical support, or to learn more about our capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {[
            {
              icon: Phone,
              title: 'Call Us',
              value: '+91-8979820228',
              action: 'Call Now',
              color: 'text-green-600'
            },
            {
              icon: Mail,
              title: 'Email Us',
              value: 'unitedenggworks04@gmail.com',
              action: 'Send Email',
              color: 'text-blue-600'
            },
            {
              icon: MapPin,
              title: 'Visit Us',
              value: 'Meerut, Uttar Pradesh, India',
              action: 'Get Directions',
              color: 'text-brass'
            },
            {
              icon: MessageCircle,
              title: 'WhatsApp',
              value: 'Quick Chat Support',
              action: 'Chat Now',
              color: 'text-green-500'
            }
          ].map((item, i) => (
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
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{item.value}</p>
              {item.title === 'Call Us' ? (
                <a
                  href="tel:+918979820228"
                  className="btn-outline text-xs sm:text-sm py-2 sm:py-3 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors inline-flex items-center justify-center"
                >
                  {item.action}
                </a>
              ) : item.title === 'Email Us' ? (
                <a
                  href="mailto:unitedenggworks04@gmail.com?subject=Inquiry about UEW Products&body=Hi, I would like to know more about your products. Please provide additional information."
                  className="btn-outline text-xs sm:text-sm py-2 sm:py-3 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors inline-flex items-center justify-center"
                >
                  {item.action}
                </a>
              ) : item.title === 'WhatsApp' ? (
                <a
                  href="https://wa.me/918979820228?text=Hi! I'm interested in your products. Can you provide more information?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs sm:text-sm py-2 sm:py-3 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors inline-flex items-center justify-center"
                >
                  {item.action}
                </a>
              ) : (
                <button className="btn-outline text-xs sm:text-sm py-2 sm:py-3 w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {item.action}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-background border rounded-2xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="heading-3 mb-3 sm:mb-4">Ready to Get Started?</h3>
            <p className="text-body mb-6 sm:mb-8 max-w-2xl mx-auto">
              Get an instant quote for your project requirements.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  // This will be handled by the RFQ button in the header
                  // For now, scroll to contact section
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                Get Instant Quote
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
