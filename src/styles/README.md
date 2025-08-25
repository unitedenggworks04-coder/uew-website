# UEW Brand Kit

This directory contains the complete brand kit for United Engineering Works (UEW), providing a consistent design system across all digital touchpoints.

## Files

- **`theme.md`** - Comprehensive brand kit documentation with guidelines and examples
- **`tokens.json`** - Design tokens in JSON format for design tools and development
- **`README.md`** - This file, explaining how to use the brand kit

## Quick Start

### Colors

```css
/* Primary Colors */
.bg-navy { background-color: #0B1B2B; }
.bg-brass { background-color: #B08D57; }
.bg-graphite { background-color: #2B2B2B; }

/* Neutral Colors */
.bg-zinc-500 { background-color: #6B7280; }
.text-zinc-600 { color: #6B7280; }
```

### Typography

```css
/* Headings - Use Archivo font */
.heading-1 { @apply text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-archivo; }
.heading-2 { @apply text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-archivo; }

/* Body - Use Inter font */
.text-body { @apply text-base sm:text-lg text-zinc-600 leading-relaxed font-inter; }
.text-body-large { @apply text-lg sm:text-xl text-zinc-600 leading-relaxed font-inter; }
```

### Components

```css
/* Buttons */
.btn-primary { @apply bg-navy text-white hover:bg-navy-800 px-6 py-3 rounded-md font-semibold transition-all duration-200 shadow-sm hover:shadow-md; }
.btn-secondary { @apply bg-brass text-white hover:bg-brass-700 px-6 py-3 rounded-md font-semibold transition-all duration-200 shadow-sm hover:shadow-md; }

/* Cards */
.card { @apply bg-white rounded-lg shadow-base p-6 border border-zinc-100 hover:shadow-lg transition-all duration-200; }

/* Forms */
.input { @apply border border-zinc-300 rounded-md px-4 py-3 focus:border-brass focus:ring-2 focus:ring-brass/20 transition-all duration-200; }
```

## Design Principles

### 1. Industrial Aesthetic
- Clean, geometric shapes
- Professional, trustworthy appearance
- Precision and engineering focus

### 2. Accessibility First
- High contrast ratios (AAA compliance where possible)
- Clear focus states
- Readable typography

### 3. Consistency
- Standardized spacing (4px base unit)
- Unified motion timing (200ms default)
- Consistent border radius (2xl for hero sections)

### 4. Mobile-First
- Responsive design from 475px up
- Touch-friendly component sizes
- Optimized for all screen sizes

## Usage Guidelines

### Color Usage
- **Navy**: Primary actions, headers, navigation
- **Brass**: CTAs, highlights, accents
- **Graphite**: Secondary text, subtle backgrounds
- **Zinc**: Body text, borders, muted content
- **White**: Backgrounds, text on dark surfaces

### Typography Hierarchy
- **H1**: Page titles, hero text (56px)
- **H2**: Section headers (40px)
- **H3**: Subsection headers (32px)
- **H4**: Card titles, form labels (24px)
- **Body**: Main content (16-18px)

### Spacing System
- **4px**: Micro spacing, borders
- **8px**: Small spacing, padding
- **16px**: Standard spacing, margins
- **24px**: Component padding
- **64px+**: Section spacing

### Motion Guidelines
- **Hover**: 200ms ease-out
- **Page transitions**: 300ms ease-in-out
- **Loading states**: 500ms ease-in-out
- **Micro-interactions**: 150ms ease-out

## Implementation

### Tailwind CSS
All brand tokens are available as Tailwind classes. The configuration includes:
- Custom color palette with full scales
- Typography utilities
- Component classes
- Responsive breakpoints

### CSS Variables
Brand colors are also available as CSS custom properties:
```css
:root {
  --uew-navy: 210 100% 9%;
  --uew-brass: 36 42% 52%;
  --uew-graphite: 0 0% 17%;
  --uew-zinc: 220 9% 46%;
  --uew-white: 0 0% 100%;
}
```

### Font Loading
Google Fonts are automatically loaded:
- **Archivo**: For headings
- **Inter**: For body text

## Brand Assets

### Logo
- **SVG Logo**: `/public/logo.svg` (120x40)
- **Favicon**: `/public/favicon.svg` (32x32)

### Colors
- **Primary**: Navy (#0B1B2B), Brass (#B08D57), Graphite (#2B2B2B)
- **Neutral**: Zinc (#6B7280), White (#FFFFFF)
- **Semantic**: Success, Warning, Error, Info

## Examples

See `/brand-kit` page for a live demonstration of all brand elements.

## Support

For questions about the brand kit or design system, refer to:
1. This README
2. The comprehensive `theme.md` documentation
3. The design tokens in `tokens.json`
4. The live brand showcase at `/brand-kit`

---

*Maintain consistency, embrace precision, and reflect engineering excellence in every design decision.*
