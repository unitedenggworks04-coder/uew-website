// Product data structure
export interface Product {
  slug: string
  name: string
  category: string
  materials: string[]
  sizes: Record<string, string[]>
  tolerance: Record<string, string>
  applications: string[]
  image: string
  brochure: string
  seo: ProductSEO
  specifications: ProductSpecifications
  features: string[]
}

// SEO metadata for products
export interface ProductSEO {
  title: string
  description: string
  keywords: string[]
  schema: ProductSchema
}

// Schema.org structured data
export interface ProductSchema {
  type: string
  brand: string
  manufacturer: string
  category: string
}

// Product specifications
export interface ProductSpecifications {
  working_temperature: string
  load_capacity?: string
  lubrication?: string
  standards: string[]
  shear_strength?: string
  tensile_strength?: string
  yield_strength?: string
  corrosion_resistance?: string
}

// Filter options for products
export interface ProductFilter {
  category?: string
  materials?: string[]
  applications?: string[]
  minSize?: number
  maxSize?: number
}

// Search parameters
export interface ProductSearchParams {
  query?: string
  filters?: ProductFilter
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  page?: number
  limit?: number
}

// Product search results
export interface ProductSearchResults {
  products: Product[]
  total: number
  page: number
  limit: number
  totalPages: number
  filters: ProductFilter
}

// Product category information
export interface ProductCategory {
  id: string
  name: string
  description: string
  count: number
  image?: string
}

// Product material information
export interface ProductMaterial {
  name: string
  count: number
  description?: string
}

// Product application information
export interface ProductApplication {
  name: string
  count: number
  description?: string
}

// Product statistics
export interface ProductStats {
  total: number
  byCategory: Record<string, number>
  byMaterial: Record<string, number>
  byApplication: Record<string, number>
}

// Product comparison
export interface ProductComparison {
  products: Product[]
  differences: ProductDifference[]
}

export interface ProductDifference {
  field: string
  values: Record<string, any>
}

// Product recommendation
export interface ProductRecommendation {
  product: Product
  reason: string
  score: number
}

// Export common product categories
export const PRODUCT_CATEGORIES = {
  AUTOMOTIVE: 'automotive',
  ENGINEERING: 'engineering',
  INDUSTRIAL: 'industrial'
} as const

export type ProductCategoryType = typeof PRODUCT_CATEGORIES[keyof typeof PRODUCT_CATEGORIES]

// Export common material types
export const MATERIAL_TYPES = {
  BRASS: 'Brass',
  BRONZE: 'Bronze',
  STEEL: 'Steel',
  STAINLESS_STEEL: 'Stainless Steel',
  COMPOSITE: 'Composite',
  ALUMINUM: 'Aluminum',
  COPPER: 'Copper',
  PLASTIC: 'Plastic'
} as const

export type MaterialType = typeof MATERIAL_TYPES[keyof typeof MATERIAL_TYPES]

// Export common application types
export const APPLICATION_TYPES = {
  AUTOMOTIVE: 'Automotive',
  INDUSTRIAL: 'Industrial',
  CONSTRUCTION: 'Construction',
  AGRICULTURE: 'Agriculture',
  MARINE: 'Marine',
  AEROSPACE: 'Aerospace',
  MINING: 'Mining',
  POWER_GENERATION: 'Power Generation'
} as const

export type ApplicationType = typeof APPLICATION_TYPES[keyof typeof APPLICATION_TYPES]
