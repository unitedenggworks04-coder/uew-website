import { 
  getAllProducts, 
  getProductBySlug, 
  getProductsByCategory, 
  filterProducts, 
  searchProducts,
  advancedSearch,
  getProductStats,
  getRelatedProducts
} from './products'
import { generateProductMetaTags, generateProductSchema, generateSlug } from './seo'
import { ProductFilter, ProductSearchParams } from '@/types/products'

// Example 1: Get all products
export function exampleGetAllProducts() {
  const products = getAllProducts()
  console.log(`Total products: ${products.length}`)
  return products
}

// Example 2: Get product by slug
export function exampleGetProductBySlug() {
  const product = getProductBySlug('king-pin-bushes')
  if (product) {
    console.log(`Found product: ${product.name}`)
    console.log(`Category: ${product.category}`)
    console.log(`Materials: ${product.materials.join(', ')}`)
  }
  return product
}

// Example 3: Get products by category
export function exampleGetProductsByCategory() {
  const automotiveProducts = getProductsByCategory('automotive')
  console.log(`Automotive products: ${automotiveProducts.length}`)
  
  const engineeringProducts = getProductsByCategory('engineering')
  console.log(`Engineering products: ${engineeringProducts.length}`)
  
  const industrialProducts = getProductsByCategory('industrial')
  console.log(`Industrial products: ${industrialProducts.length}`)
  
  return {
    automotive: automotiveProducts,
    engineering: engineeringProducts,
    industrial: industrialProducts
  }
}

// Example 4: Filter products
export function exampleFilterProducts() {
  const filters: ProductFilter = {
    category: 'automotive',
    materials: ['Brass', 'Steel'],
    applications: ['Truck steering systems']
  }
  
  const filteredProducts = filterProducts(filters)
  console.log(`Filtered products: ${filteredProducts.length}`)
  
  return filteredProducts
}

// Example 5: Search products
export function exampleSearchProducts() {
  const searchResults = searchProducts('steering')
  console.log(`Search results for 'steering': ${searchResults.length}`)
  
  const brassResults = searchProducts('brass')
  console.log(`Search results for 'brass': ${brassResults.length}`)
  
  return {
    steering: searchResults,
    brass: brassResults
  }
}

// Example 6: Advanced search
export function exampleAdvancedSearch() {
  const searchParams: ProductSearchParams = {
    query: 'bush',
    filters: {
      category: 'automotive',
      materials: ['Brass']
    },
    sortBy: 'name',
    sortOrder: 'asc'
  }
  
  const results = advancedSearch(searchParams)
  console.log(`Advanced search results: ${results.length}`)
  
  return results
}

// Example 7: Get product statistics
export function exampleGetProductStats() {
  const stats = getProductStats()
  console.log('Product Statistics:', stats)
  
  return stats
}

// Example 8: Get related products
export function exampleGetRelatedProducts() {
  const product = getProductBySlug('king-pin-bushes')
  if (product) {
    const related = getRelatedProducts(product, 3)
    console.log(`Related products for ${product.name}: ${related.length}`)
    return related
  }
  return []
}

// Example 9: Generate SEO data
export function exampleGenerateSEO() {
  const product = getProductBySlug('brass-bushes')
  if (product) {
    const metaTags = generateProductMetaTags(product)
    const schema = generateProductSchema(product)
    
    console.log('Meta Tags:', metaTags)
    console.log('Schema:', schema)
    
    return { metaTags, schema }
  }
  return null
}

// Example 10: Generate slug
export function exampleGenerateSlug() {
  const productNames = [
    'KING PIN BUSHES',
    'BRASS BUSHES',
    'BRONZE BUSHES',
    'BELLCRANK BUSHES',
    'SPRING PINS',
    'WASHERS',
    'U-BOLTS'
  ]
  
  const slugs = productNames.map(name => generateSlug(name))
  console.log('Generated slugs:', slugs)
  
  return slugs
}

// Example 11: Complex filtering scenario
export function exampleComplexFiltering() {
  // Find all products suitable for high-temperature applications
  const highTempProducts = getAllProducts().filter(product => {
    const temp = product.specifications.working_temperature
    if (temp.includes('+')) {
      const maxTemp = parseInt(temp.match(/\+(\d+)/)?.[1] || '0')
      return maxTemp >= 150
    }
    return false
  })
  
  console.log(`High-temperature products: ${highTempProducts.length}`)
  
  // Find products with specific size ranges
  const largeProducts = getAllProducts().filter(product => {
    const sizes = Object.values(product.sizes).flat()
    const numericSizes = sizes
      .map(size => parseFloat(size.replace(/[^\d.]/g, '')))
      .filter(size => !isNaN(size))
    
    if (numericSizes.length === 0) return false
    
    const maxSize = Math.max(...numericSizes)
    return maxSize >= 50
  })
  
  console.log(`Large products (≥50mm): ${largeProducts.length}`)
  
  return {
    highTemp: highTempProducts,
    large: largeProducts
  }
}

// Example 12: Product comparison
export function exampleProductComparison() {
  const product1 = getProductBySlug('brass-bushes')
  const product2 = getProductBySlug('bronze-bushes')
  
  if (product1 && product2) {
    const comparison = {
      materials: {
        [product1.name]: product1.materials,
        [product2.name]: product2.materials
      },
      applications: {
        [product1.name]: product1.applications,
        [product2.name]: product2.applications
      },
      workingTemperature: {
        [product1.name]: product1.specifications.working_temperature,
        [product2.name]: product2.specifications.working_temperature
      }
    }
    
    console.log('Product Comparison:', comparison)
    return comparison
  }
  
  return null
}

// Example 13: Export all examples
export function runAllExamples() {
  console.log('=== Running All Product Content Layer Examples ===\n')
  
  const results = {
    allProducts: exampleGetAllProducts(),
    productBySlug: exampleGetProductBySlug(),
    productsByCategory: exampleGetProductsByCategory(),
    filteredProducts: exampleFilterProducts(),
    searchResults: exampleSearchProducts(),
    advancedSearchResults: exampleAdvancedSearch(),
    productStats: exampleGetProductStats(),
    relatedProducts: exampleGetRelatedProducts(),
    seoData: exampleGenerateSEO(),
    generatedSlugs: exampleGenerateSlug(),
    complexFiltering: exampleComplexFiltering(),
    productComparison: exampleProductComparison()
  }
  
  console.log('\n=== All Examples Completed ===')
  return results
}

// Example 14: API endpoint simulation
export function simulateAPIEndpoint(path: string, params?: any) {
  switch (path) {
    case '/api/products':
      return getAllProducts()
    
    case '/api/products/search':
      return searchProducts(params?.query || '')
    
    case '/api/products/filter':
      return filterProducts(params?.filters || {})
    
    case '/api/products/stats':
      return getProductStats()
    
    case '/api/products/categories':
      return getProductsByCategory(params?.category || 'all')
    
    default:
      if (path.startsWith('/api/products/')) {
        const slug = path.split('/').pop()
        return getProductBySlug(slug || '')
      }
      return null
  }
}

// Example 15: Generate product catalog data
export function generateProductCatalog() {
  const products = getAllProducts()
  
  const catalog = products.map(product => ({
    id: product.slug,
    name: product.name,
    category: product.category,
    shortDescription: product.seo.description.substring(0, 100) + '...',
    image: product.image,
    brochure: product.brochure,
    materials: product.materials,
    keyFeatures: product.features.slice(0, 3),
    specifications: {
      temperature: product.specifications.working_temperature,
      loadCapacity: product.specifications.load_capacity || 'N/A',
      standards: product.specifications.standards
    }
  }))
  
  return catalog
}
