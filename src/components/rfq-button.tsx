'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone, MessageSquare } from 'lucide-react'
import { RFQDrawer } from './rfq-drawer'

export function RFQButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating RFQ Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Request Quote</span>
      </motion.button>

      {/* Quick Action Buttons - Mobile Only */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 md:hidden">
        {/* Call Button */}
        <motion.a
          href="tel:+918979820228"
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Phone className="h-5 w-5" />
          <span className="sr-only">Call Now</span>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/918979820228?text=Hi! I'm interested in your products. Can you provide more information?"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="sr-only">WhatsApp Chat</span>
        </motion.a>
      </div>

      {/* RFQ Drawer */}
      <RFQDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
