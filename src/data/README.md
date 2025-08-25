# Product Content Layer Documentation

This document describes the comprehensive content layer system for United Engineering Works products, built with local JSON files and TypeScript utilities.

## 📁 File Structure

```
src/
├── data/
│   ├── products/
│   │   ├── king-pin-bushes.json
│   │   ├── brass-bushes.json
│   │   ├── bronze-bushes.json
│   │   ├── bellcrank-bushes.json
│   │   ├── spring-pins.json
│   │   ├── washers.json
│   │   └── u-bolts.json
│   └── README.md
├── lib/
│   ├── products.ts          # Product data utilities
│   ├── seo.ts              # SEO utilities
│   └── products-examples.ts # Usage examples
└── types/
    └── products.ts          # TypeScript interfaces
```

## 🏗️ Data Structure

### Product JSON Schema

Each product JSON file contains the following structure:

```json
{
  "slug": "unique-product-identifier",
  "name": "Product Display Name",
  "category": "automotive|engineering|industrial",
  "materials": ["Material1", "Material2"],
  "sizes": {
    "dimension1": ["value1", "value2"],
    "dimension2": ["value1", "value2"]
  },
  "tolerance": {
    "dimension1": "±0.01mm",
    "dimension2": "±0.02mm"
  },
  "applications": ["Application1", "Application2"],
  "image": "/products/product-image.jpg",
  "brochure": "/brochures/product-specs.pdf",
  "seo": {
    "title": "SEO Title",
    "description": "SEO Description",
    "keywords": ["keyword1", "keyword2"],
    "schema": {
      "type": "Product",
      "brand": "United Engineering Works",
      "manufacturer": "United Engineering Works",
      "category": "Product Category"
    }
  },
  "specifications": {
    "working_temperature": "Temperature Range",
    "load_capacity": "Load Capacity",
    "standards": ["Standard1", "Standard2"]
  },
  "features": ["Feature1", "Feature2", "Feature3"]
}
```

## 🚀 Core Utilities

### Product Data Functions (`src/lib/products.ts`)

#### Basic Operations
- `getAllProducts()` - Get all products
- `getProductBySlug(slug)` - Get specific product by slug
- `getProductsByCategory(category)` - Filter by category
- `getAllCategories()` - Get all available categories
- `getAllMaterials()` - Get all available materials
- `getAllApplications()` - Get all available applications

#### Advanced Operations
- `filterProducts(filters)` - Multi-criteria filtering
- `searchProducts(query)` - Text-based search
- `advancedSearch(params)` - Combined search and filtering
- `sortProducts(products, sortBy, order)` - Sort products
- `getRelatedProducts(product, limit)` - Find related products
- `getProductStats()` - Get statistical information

#### Filter Options
```typescript
interface ProductFilter {
  category?: string
  materials?: string[]
  applications?: string[]
  minSize?: number
  maxSize?: number
}
```

### SEO Utilities (`src/lib/seo.ts`)

#### SEO Generation
- `generateSlug(text)` - Create URL-friendly slugs
- `generateProductMetaTitle(product)` - Generate meta titles
- `generateProductMetaDescription(product)` - Generate meta descriptions
- `generateProductOpenGraph(product)` - Generate Open Graph data
- `generateProductSchema(product)` - Generate Schema.org markup
- `generateProductCanonicalUrl(product)` - Generate canonical URLs

#### SEO Validation
- `validateProductSEO(product)` - Validate SEO data completeness

## 📊 Product Categories

### 1. Automotive (`automotive`)
- **KING PIN BUSHES** - Steering system components
- **SPRING PINS** - Fastening solutions
- **U-BOLTS** - Heavy-duty fastening

### 2. Engineering (`engineering`)
- **BRASS BUSHES** - General engineering components
- **BELLCRANK BUSHES** - Control system components
- **WASHERS** - Fastening components

### 3. Industrial (`industrial`)
- **BRONZE BUSHES** - Heavy-duty industrial applications

## 🔍 Search & Filtering Examples

### Basic Search
```typescript
import { searchProducts } from '@/lib/products'

// Search for products containing "steering"
const steeringProducts = searchProducts('steering')
```

### Category Filtering
```typescript
import { getProductsByCategory } from '@/lib/products'

// Get all automotive products
const automotiveProducts = getProductsByCategory('automotive')
```

### Advanced Filtering
```typescript
import { filterProducts } from '@/lib/products'

const filters = {
  category: 'automotive',
  materials: ['Brass', 'Steel'],
  applications: ['Truck steering systems']
}

const filteredProducts = filterProducts(filters)
```

### Complex Search
```typescript
import { advancedSearch } from '@/lib/products'

const searchParams = {
  query: 'bush',
  filters: {
    category: 'automotive',
    materials: ['Brass']
  },
  sortBy: 'name',
  sortOrder: 'asc'
}

const results = advancedSearch(searchParams)
```

## 🎯 SEO Implementation

### Meta Tags Generation
```typescript
import { generateProductMetaTags } from '@/lib/seo'

const metaTags = generateProductMetaTags(product)
// Returns: title, description, keywords, openGraph, twitter, canonical
```

### Schema.org Markup
```typescript
import { generateProductSchema } from '@/lib/seo'

const schema = generateProductSchema(product)
// Returns: Complete Schema.org Product markup
```

### Breadcrumb Schema
```typescript
import { generateBreadcrumbSchema } from '@/lib/seo'

const breadcrumbs = generateBreadcrumbSchema(product)
// Returns: Schema.org BreadcrumbList markup
```

## 📱 Usage in Components

### Product List Component
```typescript
'use client'

import { useState, useEffect } from 'react'
import { getAllProducts, filterProducts } from '@/lib/products'
import { ProductFilter } from '@/types/products'

export function ProductList() {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState<ProductFilter>({})

  useEffect(() => {
    const filtered = filterProducts(filters)
    setProducts(filtered)
  }, [filters])

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}
```

### Product Detail Component
```typescript
import { getProductBySlug, getRelatedProducts } from '@/lib/products'
import { generateProductMetaTags, generateProductSchema } from '@/lib/seo'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) return {}

  const metaTags = generateProductMetaTags(product)
  
  return {
    title: metaTags.title,
    description: metaTags.description,
    keywords: metaTags.keywords,
    openGraph: metaTags.openGraph,
    twitter: metaTags.twitter,
    alternates: metaTags.alternates
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  const relatedProducts = getRelatedProducts(product, 3)

  return (
    <div>
      <ProductDetail product={product} />
      <RelatedProducts products={relatedProducts} />
    </div>
  )
}
```

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_BASE_URL=https://uew.com
```

### TypeScript Configuration
Ensure your `tsconfig.json` includes:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## 📈 Performance Considerations

### Data Loading
- All product data is loaded at build time
- No runtime API calls for product data
- Efficient filtering and search operations

### SEO Optimization
- Static generation of meta tags
- Pre-built Schema.org markup
- Optimized sitemap generation

### Caching
- Product data cached in memory
- Filter results cached for repeated queries
- Search index built at build time

## 🧪 Testing & Validation

### Data Validation
```typescript
import { validateProductSEO } from '@/lib/seo'

const errors = validateProductSEO(product)
if (errors.length > 0) {
  console.warn('SEO validation errors:', errors)
}
```

### Example Usage
```typescript
import { runAllExamples } from '@/lib/products-examples'

// Run all examples in development
if (process.env.NODE_ENV === 'development') {
  runAllExamples()
}
```

## 🚀 Future Enhancements

### Planned Features
- YAML support for easier content editing
- CMS integration for non-technical users
- Product variant support
- Multi-language support
- Advanced analytics and tracking
- Product recommendation engine

### Extensibility
The system is designed to be easily extensible:
- Add new product fields by updating interfaces
- Create new filter types
- Implement custom search algorithms
- Add new SEO features

## 📚 Additional Resources

- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Schema.org Products](https://schema.org/Product)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview)

## 🤝 Contributing

When adding new products or modifying existing ones:

1. Follow the established JSON schema
2. Ensure all required fields are populated
3. Validate SEO data using `validateProductSEO()`
4. Test filtering and search functionality
5. Update this documentation if needed

## 📞 Support

For questions or issues with the content layer system, please refer to:
- Product data structure: Check JSON files in `src/data/products/`
- Utility functions: Review `src/lib/products.ts` and `src/lib/seo.ts`
- TypeScript types: Check `src/types/products.ts`
- Examples: Review `src/lib/products-examples.ts`
