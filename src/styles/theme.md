# United Engineering Works (UEW) Brand Kit

## Brand Overview
United Engineering Works is a precision engineering and manufacturing company specializing in automotive components, industrial machinery, and custom engineering solutions. Our brand reflects reliability, precision, and industrial strength.

## Color Palette

### Primary Colors
- **Navy** `#0B1B2B` - Primary brand color, represents trust, stability, and engineering excellence
- **Brass** `#B08D57` - Accent color, symbolizes quality craftsmanship and industrial heritage
- **Graphite** `#2B2B2B` - Secondary color, represents precision and technical expertise

### Neutral Colors
- **Zinc** `#6B7280` - Text and border color, provides subtle contrast
- **White** `#FFFFFF` - Background and text color, ensures clarity and readability

### Color Usage Guidelines
- **Navy**: Primary buttons, headers, navigation, brand elements
- **Brass**: CTAs, highlights, borders, accent elements
- **Graphite**: Secondary text, icons, subtle backgrounds
- **Zinc**: Body text, borders, disabled states
- **White**: Backgrounds, primary text on dark backgrounds

## Typography

### Font Families
- **Headings**: 'Archivo' (Google Fonts) - Industrial, geometric, strong
- **Body**: 'Inter' (Google Fonts) - Highly readable, modern, professional

### Type Scale
```css
/* Heading Scale */
.heading-1: 3.5rem (56px) - Page titles, hero text
.heading-2: 2.5rem (40px) - Section headers
.heading-3: 2rem (32px) - Subsection headers
.heading-4: 1.5rem (24px) - Card titles, form labels
.heading-5: 1.25rem (20px) - Small headers
.heading-6: 1rem (16px) - Micro headers

/* Body Scale */
.body-large: 1.125rem (18px) - Lead paragraphs
.body-base: 1rem (16px) - Body text, default
.body-small: 0.875rem (14px) - Captions, small text
.body-xs: 0.75rem (12px) - Micro text, labels
```

### Font Weights
- **Headings**: 600 (Semi-bold), 700 (Bold)
- **Body**: 400 (Regular), 500 (Medium), 600 (Semi-bold)

## Spacing System

### Base Unit: 4px (0.25rem)
```css
/* Spacing Scale */
0: 0px
1: 4px (0.25rem)
2: 8px (0.5rem)
3: 12px (0.75rem)
4: 16px (1rem)
5: 20px (1.25rem)
6: 24px (1.5rem)
7: 28px (1.75rem)
8: 32px (2rem)
9: 36px (2.25rem)
10: 40px (2.5rem)
12: 48px (3rem)
14: 56px (3.5rem)
16: 64px (4rem)
20: 80px (5rem)
24: 96px (6rem)
32: 128px (8rem)
40: 160px (10rem)
48: 192px (12rem)
56: 224px (14rem)
64: 256px (16rem)
```

### Component Spacing
- **Section padding**: 16-24 (64px-96px)
- **Card padding**: 6 (24px)
- **Button padding**: 3-4 (12px-16px)
- **Form spacing**: 4-6 (16px-24px)

## Border Radius

### Radius Scale
```css
/* Border Radius */
radius-none: 0px
radius-sm: 2px
radius-base: 4px
radius-md: 6px
radius-lg: 8px
radius-xl: 12px
radius-2xl: 16px
radius-3xl: 24px
radius-full: 9999px
```

### Usage Guidelines
- **Cards, panels**: radius-lg (8px)
- **Buttons**: radius-md (6px)
- **Inputs**: radius-base (4px)
- **Hero sections**: radius-2xl (16px)
- **Modals**: radius-xl (12px)

## Shadows

### Shadow Scale
```css
/* Shadow System */
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)
```

### Usage Guidelines
- **Cards**: shadow-base
- **Buttons**: shadow-sm (default), shadow-md (hover)
- **Modals**: shadow-xl
- **Hero elements**: shadow-lg
- **Floating elements**: shadow-2xl

## Motion & Animation

### Duration Scale
```css
/* Animation Duration */
duration-75: 75ms
duration-100: 100ms
duration-150: 150ms
duration-200: 200ms (default)
duration-300: 300ms
duration-500: 500ms
duration-700: 700ms
duration-1000: 1000ms
```

### Easing Functions
```css
/* Easing */
ease-linear: linear
ease-in: cubic-bezier(0.4, 0, 1, 1)
ease-out: cubic-bezier(0, 0, 0.2, 1)
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

### Animation Guidelines
- **Hover effects**: 200ms ease-out
- **Page transitions**: 300ms ease-in-out
- **Loading states**: 500ms ease-in-out
- **Micro-interactions**: 150ms ease-out
- **Page load animations**: 700ms ease-out

## Component Examples

### Buttons
```css
.btn-primary {
  @apply bg-navy text-white px-4 py-3 rounded-md shadow-sm hover:shadow-md transition-all duration-200;
}

.btn-secondary {
  @apply bg-brass text-white px-4 py-3 rounded-md shadow-sm hover:shadow-md transition-all duration-200;
}

.btn-ghost {
  @apply bg-transparent text-navy border border-navy px-4 py-3 rounded-md hover:bg-navy hover:text-white transition-all duration-200;
}
```

### Cards
```css
.card {
  @apply bg-white rounded-lg shadow-base p-6 border border-zinc-100 hover:shadow-lg transition-all duration-200;
}
```

### Forms
```css
.input {
  @apply border border-zinc-300 rounded-md px-4 py-3 focus:border-brass focus:ring-2 focus:ring-brass/20 transition-all duration-200;
}
```

## Accessibility

### Color Contrast
- **Navy on White**: 15.6:1 (AAA)
- **Brass on White**: 3.2:1 (AA)
- **Graphite on White**: 12.6:1 (AAA)
- **Zinc on White**: 4.5:1 (AA)

### Focus States
- **Focus ring**: 2px brass with 20% opacity
- **Focus outline**: 2px solid brass

## Implementation Notes

### CSS Variables
All colors are defined as CSS custom properties for easy theming and dark mode support.

### Responsive Design
Spacing and typography scale responsively using Tailwind's responsive prefixes.

### Dark Mode
Colors automatically adapt for dark mode using CSS custom properties and Tailwind's dark: prefix.

---

*This brand kit ensures consistency across all UEW digital touchpoints while maintaining the industrial, professional aesthetic that reflects our engineering expertise.*
