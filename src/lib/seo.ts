import { Product, ProductSEO } from '@/types/products'

// Generate SEO-friendly slug from text
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

// Generate slug from product name
export function generateProductSlug(productName: string): string {
  return generateSlug(productName)
}

// Generate meta title for products
export function generateProductMetaTitle(product: Product): string {
  const baseTitle = product.seo.title
  const brand = 'UEW'
  
  if (baseTitle.includes(brand)) {
    return baseTitle
  }
  
  return `${baseTitle} | ${brand}`
}

// Generate meta description for products
export function generateProductMetaDescription(product: Product): string {
  return product.seo.description
}

// Generate meta keywords for products
export function generateProductMetaKeywords(product: Product): string {
  return product.seo.keywords.join(', ')
}

// Generate Open Graph data for products
export function generateProductOpenGraph(product: Product) {
  return {
    title: generateProductMetaTitle(product),
    description: generateProductMetaDescription(product),
    type: 'product',
    url: `/products/${product.slug}`,
    image: product.image,
    siteName: 'United Engineering Works',
    locale: 'en_US'
  }
}

// Generate Twitter Card data for products
export function generateProductTwitterCard(product: Product) {
  return {
    card: 'summary_large_image',
    title: generateProductMetaTitle(product),
    description: generateProductMetaDescription(product),
    image: product.image,
    site: '@UEW_Engineering'
  }
}

// Generate Schema.org structured data for products
export function generateProductSchema(product: Product) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.seo.description,
    brand: {
      '@type': 'Brand',
      name: product.seo.schema.brand
    },
    manufacturer: {
      '@type': 'Organization',
      name: product.seo.schema.manufacturer
    },
    category: product.seo.schema.category,
    image: product.image,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: {
        '@type': 'Organization',
        name: 'United Engineering Works'
      }
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Material',
        value: product.materials.join(', ')
      },
      {
        '@type': 'PropertyValue',
        name: 'Category',
        value: product.category
      },
      {
        '@type': 'PropertyValue',
        name: 'Applications',
        value: product.applications.join(', ')
      }
    ]
  }

  // Add specifications if available
  if (product.specifications.working_temperature) {
    schema.additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'Working Temperature',
      value: product.specifications.working_temperature
    })
  }

  if (product.specifications.load_capacity) {
    schema.additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'Load Capacity',
      value: product.specifications.load_capacity
    })
  }

  return schema
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://uew.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://uew.com/products'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.category.charAt(0).toUpperCase() + product.category.slice(1),
        item: `https://uew.com/products?category=${product.category}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: product.name,
        item: `https://uew.com/products/${product.slug}`
      }
    ]
  }
}

// Generate sitemap entry for product
export function generateProductSitemapEntry(product: Product) {
  return {
    url: `/products/${product.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8
  }
}

// Generate canonical URL for product
export function generateProductCanonicalUrl(product: Product): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://uew.com'
  return `${baseUrl}/products/${product.slug}`
}

// Generate robots.txt content
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://uew.com/sitemap.xml

# Product pages
Allow: /products/
Allow: /products/*

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
`
}

// Generate sitemap.xml content
export function generateSitemapXml(products: Product[]): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://uew.com'
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/products</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`

  // Add product URLs
  products.forEach(product => {
    sitemap += `
  <url>
    <loc>${baseUrl}/products/${product.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  })

  sitemap += `
</urlset>`

  return sitemap
}

// Generate meta tags for product pages
export function generateProductMetaTags(product: Product) {
  return {
    title: generateProductMetaTitle(product),
    description: generateProductMetaDescription(product),
    keywords: generateProductMetaKeywords(product),
    openGraph: generateProductOpenGraph(product),
    twitter: generateProductTwitterCard(product),
    alternates: {
      canonical: generateProductCanonicalUrl(product)
    }
  }
}

// Validate SEO data
export function validateProductSEO(product: Product): string[] {
  const errors: string[] = []
  
  if (!product.seo.title || product.seo.title.length < 30) {
    errors.push('SEO title should be at least 30 characters long')
  }
  
  if (!product.seo.description || product.seo.description.length < 120) {
    errors.push('SEO description should be at least 120 characters long')
  }
  
  if (!product.seo.keywords || product.seo.keywords.length === 0) {
    errors.push('SEO keywords are required')
  }
  
  if (!product.seo.schema.type) {
    errors.push('Schema type is required')
  }
  
  return errors
}
