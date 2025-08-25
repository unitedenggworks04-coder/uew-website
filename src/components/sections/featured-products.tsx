'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

// Use the same product data as the products page
const featuredProducts = [
     {
     id: 'king-pin-bushes',
     title: 'KING PIN BUSHES',
     description: 'Precision-engineered for optimal steering performance in trucks and trailers. Essential components for safe and reliable vehicle operation.',
     image: '/King.png',
     category: 'automotive'
   },
  {
    id: 'bellcrank-bushes',
    title: 'BELLCRANK BUSHES',
    description: 'Engineered for precise mechanical movement in control systems. Critical components for accurate operation.',
    image: '/bell.jpeg',
    category: 'engineering'
  },
  {
    id: 'spring-pins',
    title: 'SPRING PINS',
    description: 'Reliable fastening solutions for automotive assemblies. Secure connections that withstand vibration and stress.',
    image: '/spring.jpeg',
    category: 'automotive'
  },
  {
    id: 'u-bolts',
    title: 'U-BOLTS',
    description: 'Heavy-duty fastening for trucks and trailers. Robust construction for demanding transportation applications.',
    image: '/Ubolt.jpeg',
    category: 'automotive'
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="heading-2 mb-3 sm:mb-4">Featured Products</h2>
          <p className="text-body max-w-2xl mx-auto">
            Leading manufacturer of automotive bushes, pins, and engineering components since 1998
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
                             className="bg-card border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow group scroll-mt-20"
            >
              <div className="bg-muted rounded-lg w-full h-24 sm:h-32 mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <p className="text-xs sm:text-sm text-muted-foreground">Product Image</p>
                )}
              </div>
              <h3 className="heading-3 mb-2 text-sm sm:text-base">{product.title}</h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{product.description}</p>
              <Link 
                href={`/products#${product.id}`}
                className="btn-outline w-full flex items-center justify-center gap-2 text-xs sm:text-sm py-2 sm:py-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                View Product
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 sm:hidden text-center">
          <Link href="/products" className="btn-primary w-full max-w-sm">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
