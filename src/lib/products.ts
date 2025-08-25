import { Product, ProductFilter, ProductSearchParams } from '@/types/products'

// Import all product data
import kingPinBushes from '@/data/products/king-pin-bushes.json'
import brassBushes from '@/data/products/brass-bushes.json'
import bronzeBushes from '@/data/products/bronze-bushes.json'
import bellcrankBushes from '@/data/products/bellcrank-bushes.json'
import springPins from '@/data/products/spring-pins.json'
import washers from '@/data/products/washers.json'
import uBolts from '@/data/products/u-bolts.json'

// All products array
export const allProducts: Product[] = [
  kingPinBushes,
  brassBushes,
  bronzeBushes,
  bellcrankBushes,
  springPins,
  washers,
  uBolts
]

// Get all products
export function getAllProducts(): Product[] {
  return allProducts
}

// Get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(product => product.slug === slug)
}

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return allProducts
  return allProducts.filter(product => product.category === category)
}

// Get all categories
export function getAllCategories(): string[] {
  const categories = Array.from(new Set(allProducts.map(product => product.category)))
  return ['all', ...categories]
}

// Get all materials
export function getAllMaterials(): string[] {
  const materials = new Set<string>()
  allProducts.forEach(product => {
    product.materials.forEach(material => materials.add(material))
  })
  return Array.from(materials).sort()
}

// Get all applications
export function getAllApplications(): string[] {
  const applications = new Set<string>()
  allProducts.forEach(product => {
    product.applications.forEach(application => applications.add(application))
  })
  return Array.from(applications).sort()
}

// Filter products based on multiple criteria
export function filterProducts(filters: ProductFilter): Product[] {
  let filtered = allProducts

  // Filter by category
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(product => product.category === filters.category)
  }

  // Filter by materials
  if (filters.materials && filters.materials.length > 0) {
    filtered = filtered.filter(product => 
      filters.materials!.some(material => product.materials.includes(material))
    )
  }

  // Filter by applications
  if (filters.applications && filters.applications.length > 0) {
    filtered = filtered.filter(product => 
      filters.applications!.some(application => product.applications.includes(application))
    )
  }

  // Filter by size range
  if (filters.minSize || filters.maxSize) {
    filtered = filtered.filter(product => {
      const sizes = Object.values(product.sizes).flat()
      const numericSizes = sizes
        .map(size => parseFloat(size.replace(/[^\d.]/g, '')))
        .filter(size => !isNaN(size))
      
      if (numericSizes.length === 0) return true
      
      const minProductSize = Math.min(...numericSizes)
      const maxProductSize = Math.max(...numericSizes)
      
      if (filters.minSize && minProductSize < filters.minSize) return false
      if (filters.maxSize && maxProductSize > filters.maxSize) return false
      
      return true
    })
  }

  return filtered
}

// Search products by text
export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase().trim()
  
  if (!searchTerm) return allProducts
  
  return allProducts.filter(product => {
    // Search in name
    if (product.name.toLowerCase().includes(searchTerm)) return true
    
    // Search in description (if available)
    if (product.seo.description.toLowerCase().includes(searchTerm)) return true
    
    // Search in materials
    if (product.materials.some(material => material.toLowerCase().includes(searchTerm))) return true
    
    // Search in applications
    if (product.applications.some(application => application.toLowerCase().includes(searchTerm))) return true
    
    // Search in features
    if (product.features.some(feature => feature.toLowerCase().includes(searchTerm))) return true
    
    // Search in keywords
    if (product.seo.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))) return true
    
    return false
  })
}

// Advanced search with filters
export function advancedSearch(params: ProductSearchParams): Product[] {
  let results = allProducts

  // Text search
  if (params.query) {
    results = searchProducts(params.query)
  }

  // Apply filters
  if (params.filters) {
    results = filterProducts(params.filters)
  }

  // Sort results
  if (params.sortBy) {
    results = sortProducts(results, params.sortBy, params.sortOrder || 'asc')
  }

  return results
}

// Sort products
export function sortProducts(products: Product[], sortBy: string, order: 'asc' | 'desc' = 'asc'): Product[] {
  const sorted = [...products]
  
  sorted.sort((a, b) => {
    let aValue: any
    let bValue: any
    
    switch (sortBy) {
      case 'name':
        aValue = a.name
        bValue = b.name
        break
      case 'category':
        aValue = a.category
        bValue = b.category
        break
      case 'materials':
        aValue = a.materials.length
        bValue = b.materials.length
        break
      case 'applications':
        aValue = a.applications.length
        bValue = b.applications.length
        break
      default:
        aValue = a.name
        bValue = b.name
    }
    
    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase()
      bValue = bValue.toLowerCase()
    }
    
    if (aValue < bValue) return order === 'asc' ? -1 : 1
    if (aValue > bValue) return order === 'asc' ? 1 : -1
    return 0
  })
  
  return sorted
}

// Get related products
export function getRelatedProducts(currentProduct: Product, limit: number = 3): Product[] {
  return allProducts
    .filter(product => 
      product.slug !== currentProduct.slug && 
      (product.category === currentProduct.category || 
       product.materials.some(material => currentProduct.materials.includes(material)))
    )
    .slice(0, limit)
}

// Get product statistics
export function getProductStats() {
  const stats = {
    total: allProducts.length,
    byCategory: {} as Record<string, number>,
    byMaterial: {} as Record<string, number>,
    byApplication: {} as Record<string, number>
  }
  
  allProducts.forEach(product => {
    // Count by category
    stats.byCategory[product.category] = (stats.byCategory[product.category] || 0) + 1
    
    // Count by material
    product.materials.forEach(material => {
      stats.byMaterial[material] = (stats.byMaterial[material] || 0) + 1
    })
    
    // Count by application
    product.applications.forEach(application => {
      stats.byApplication[application] = (stats.byApplication[application] || 0) + 1
    })
  })
  
  return stats
}

// Export individual products for direct import
export {
  kingPinBushes,
  brassBushes,
  bronzeBushes,
  bellcrankBushes,
  springPins,
  washers,
  uBolts
}
