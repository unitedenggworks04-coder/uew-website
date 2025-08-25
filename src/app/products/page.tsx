'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Grid, List } from 'lucide-react'

const productCategories = [
     {
     id: 'king-pin-bushes',
     title: 'KING PIN BUSHES',
     description: 'Precision-engineered for optimal steering performance in trucks and trailers. Essential components for safe and reliable vehicle operation.',
     features: ['High precision manufacturing', 'Optimal steering performance', 'Truck and trailer applications', 'Durable construction'],
     image: '/King.png',
     category: 'automotive'
   },
     {
     id: 'brass-bushes',
     title: 'BRASS BUSHES',
     description: 'High-quality brass components for durability and wear resistance. Ideal for applications requiring low friction and long service life.',
     features: ['High-quality brass material', 'Excellent wear resistance', 'Low friction operation', 'Long service life'],
     image: '/brass.webp',
     category: 'engineering'
   },
     {
     id: 'bronze-bushes',
     title: 'BRONZE BUSHES',
     description: 'Superior wear resistance for demanding industrial applications. Perfect for heavy-duty machinery and equipment.',
     features: ['Superior wear resistance', 'Heavy-duty applications', 'Industrial machinery', 'High load capacity'],
     image: '/bronze.webp',
     category: 'industrial'
   },
  {
    id: 'bellcrank-bushes',
    title: 'BELLCRANK BUSHES',
    description: 'Engineered for precise mechanical movement in control systems. Critical components for accurate operation.',
    features: ['Precise mechanical movement', 'Control system applications', 'Accurate operation', 'Reliable performance'],
    image: '/bell.jpeg',
    category: 'engineering'
  },
  {
    id: 'spring-pins',
    title: 'SPRING PINS',
    description: 'Reliable fastening solutions for automotive assemblies. Secure connections that withstand vibration and stress.',
    features: ['Reliable fastening', 'Automotive assemblies', 'Vibration resistant', 'Secure connections'],
    image: '/spring.jpeg',
    category: 'automotive'
  },
     {
     id: 'washers',
     title: 'WASHERS',
     description: 'Precision flat washers for secure connections. Essential components for proper bolt and nut assembly.',
     features: ['Precision flat design', 'Secure connections', 'Bolt and nut assembly', 'Quality construction'],
     image: '/washer.jpg',
     category: 'engineering'
   },
  {
    id: 'u-bolts',
    title: 'U-BOLTS',
    description: 'Heavy-duty fastening for trucks and trailers. Robust construction for demanding transportation applications.',
    features: ['Heavy-duty construction', 'Truck and trailer use', 'Robust fastening', 'Transportation applications'],
    image: '/Ubolt.jpeg',
    category: 'automotive'
  }
]

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div className="container section-padding">
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="heading-1 mb-4 sm:mb-6">Our Products</h1>
        <p className="text-body max-w-3xl mx-auto">
          Leading manufacturer of automotive bushes, pins, and engineering components since 1998. 
          Quality products for trucks, trailers, and industrial applications.
        </p>
      </div>

      {/* View Mode Toggle */}
      <div className="mb-8 flex items-center justify-end">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}
          >
            <Grid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Products Grid/List */}
      {viewMode === 'grid' ? (
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
           {productCategories.map((category, i) => (
             <motion.div
               key={category.id}
               id={category.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               className="bg-card border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow scroll-mt-20"
             >
                                          <div className="bg-muted rounded-lg w-full h-32 sm:h-48 mb-4 flex items-center justify-center overflow-hidden">
                 {category.image ? (
                   <img 
                     src={category.image} 
                     alt={category.title}
                     className="w-full h-full object-cover"
                   />
                 ) : (
                   <p className="text-sm text-muted-foreground">Product Image</p>
                 )}
               </div>
              <h3 className="heading-3 mb-3 text-navy">{category.title}</h3>
              <p className="text-body mb-4 text-sm sm:text-base">{category.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-brass text-sm">Key Features:</h4>
                <ul className="space-y-1">
                  {category.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-xs sm:text-sm text-muted-foreground">• {feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
                 <div className="space-y-4">
           {productCategories.map((category, i) => (
             <motion.div
               key={category.id}
               id={category.id}
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: i * 0.1 }}
               className="bg-card border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow scroll-mt-20"
             >
              <div className="flex flex-col sm:flex-row gap-4">
                                                <div className="bg-muted rounded-lg w-full sm:w-32 h-32 flex items-center justify-center flex-shrink-0 overflow-hidden">
                   {category.image ? (
                     <img 
                       src={category.image} 
                       alt={category.title}
                       className="w-full h-full object-cover"
                     />
                   ) : (
                     <p className="text-sm text-muted-foreground">Product Image</p>
                   )}
                 </div>
                <div className="flex-1">
                  <h3 className="heading-3 mb-2 text-navy">{category.title}</h3>
                  <p className="text-body mb-3 text-sm sm:text-base">{category.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-brass text-sm">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {category.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}



      <div className="mt-12 sm:mt-16 text-center">
        <h2 className="heading-2 mb-4 sm:mb-6">Need Custom Solutions?</h2>
        <p className="text-body mb-6 sm:mb-8 max-w-2xl mx-auto">
          Our engineering team specializes in developing custom components and solutions 
          tailored to your specific requirements. Contact us for custom manufacturing needs.
        </p>
      </div>
    </div>
  )
}
