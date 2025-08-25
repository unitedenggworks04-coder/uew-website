# United Engineering Works Website

A modern, professional website for United Engineering Works - a leading manufacturer of precision engineering components, automotive parts, and custom manufacturing solutions.

## 🚀 Features

- **Next.js 14** with App Router for modern React development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** with custom design system and responsive breakpoints
- **shadcn/ui** components for consistent UI patterns
- **Framer Motion** for smooth animations and interactions
- **Dark Mode** support with system preference detection
- **Mobile-First** responsive design
- **SEO Optimized** with metadata, sitemap, and robots.txt
- **Performance Focused** with optimized images and Core Web Vitals

## 🏗️ Architecture

### Site Structure (Based on IA Document)
```
Home
├── About
├── Products (7 Categories)
├── Capabilities
├── Quality
├── Industries Served
├── Resources
└── Contact
```

### Key Pages
- **Home**: Hero section with primary CTA "Get Instant Quote"
- **Products**: 7 product categories with technical specifications
- **Capabilities**: Manufacturing processes and R&D capabilities
- **Quality**: Certifications and quality management systems
- **Industries**: Industry-specific solutions and applications
- **Resources**: Downloads, technical documentation, case studies
- **Contact**: RFQ forms, multiple contact methods, office locations

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.3
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Development Tools
- **Linting**: ESLint with TypeScript and Prettier
- **Code Formatting**: Prettier
- **Git Hooks**: Husky with pre-commit linting
- **Package Manager**: npm

### SEO & Performance
- **Metadata**: Open Graph, Twitter Cards
- **Sitemap**: Dynamic XML sitemap generation
- **Robots**: SEO-friendly robots.txt
- **Performance**: Core Web Vitals optimization

## 📱 Responsive Design

### Breakpoints
- **xs**: 475px (Mobile small)
- **sm**: 640px (Mobile large)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop small)
- **xl**: 1280px (Desktop large)
- **2xl**: 1536px (Desktop extra large)
- **3xl**: 1920px (Ultra wide)

### Mobile-First Features
- Touch-optimized navigation (44px minimum touch targets)
- Mobile hamburger menu with progressive disclosure
- Floating action buttons for WhatsApp and phone
- Responsive forms and CTAs

## 🎨 Design System

### Color Scheme
- **Primary**: Blue-based with accessibility compliance
- **Secondary**: Neutral grays for content
- **Accent**: Supporting colors for highlights
- **Dark Mode**: Automatic system preference detection

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Responsive sizing (h1: 4xl-6xl, h2: 3xl-5xl, h3: 2xl-4xl)
- **Body**: Optimized for readability (base-lg)

### Components
- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Consistent spacing and hover effects
- **Forms**: Accessible input fields and validation
- **Navigation**: Sticky header with mobile optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd united-engineering-works-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types

# Git Hooks
npm run prepare      # Install Husky hooks
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (routes)/          # Page routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── not-found.tsx      # 404 page
│   └── error.tsx          # 500 page
├── components/             # Reusable components
│   ├── sections/          # Page sections
│   ├── header.tsx         # Navigation header
│   ├── footer.tsx         # Site footer
│   ├── theme-toggle.tsx   # Dark/light mode toggle
│   └── theme-provider.tsx # Theme context provider
├── lib/                    # Utility functions
│   └── utils.ts           # Common utilities
├── types/                  # TypeScript type definitions
├── utils/                  # Helper functions
├── styles/                 # Additional styles
├── hooks/                  # Custom React hooks
└── constants/              # Application constants
```

## 🔧 Configuration

### Tailwind CSS
- Custom breakpoints and spacing
- CSS variables for theming
- Component classes for consistency
- Dark mode support

### ESLint & Prettier
- TypeScript-aware linting
- Prettier integration
- Consistent code formatting
- Pre-commit hooks

### Next.js
- App Router configuration
- Image optimization
- Performance settings
- SEO metadata

## 📊 Performance & SEO

### Core Web Vitals
- **LCP**: Optimized hero images and content
- **FID**: Minimal JavaScript execution
- **CLS**: Stable layout with proper sizing

### SEO Features
- **Metadata**: Comprehensive page metadata
- **Structured Data**: Schema.org markup ready
- **Sitemap**: Dynamic XML sitemap
- **Robots**: SEO-friendly crawling

### Analytics Ready
- Google Analytics integration ready
- Conversion tracking setup
- Performance monitoring

## 🎯 Conversion Optimization

### Primary CTAs
- **"Get Instant Quote"** - Hero sections and key pages
- **"Request Product Quote"** - Product pages
- **"Discuss Your Project"** - Capabilities pages

### Contact Methods
- **RFQ Forms** - Integrated throughout the site
- **Phone Support** - Click-to-call functionality
- **WhatsApp** - Floating action button
- **Email Forms** - Multiple contact points

### User Experience
- **Fast Loading** - Optimized images and code
- **Mobile Optimized** - Touch-friendly interface
- **Clear Navigation** - Logical information architecture
- **Trust Indicators** - Certifications and experience

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start
```

### Environment Variables
```bash
NEXT_PUBLIC_SITE_URL=https://unitedengineeringworks.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Deployment Platforms
- **Vercel**: Recommended for Next.js
- **Netlify**: Static site generation
- **AWS**: Custom server setup
- **Docker**: Containerized deployment

## 🔒 Security

### Best Practices
- **HTTPS Only**: Secure connections
- **Content Security Policy**: XSS protection
- **Input Validation**: Form security
- **Dependencies**: Regular security updates

### Privacy
- **GDPR Compliance**: Cookie consent ready
- **Data Protection**: Secure form handling
- **Analytics**: Privacy-focused tracking

## 📈 Monitoring & Analytics

### Performance Monitoring
- **Core Web Vitals**: Real-time monitoring
- **Page Speed**: Performance insights
- **User Experience**: Interaction tracking

### Business Metrics
- **RFQ Submissions**: Form completion tracking
- **Phone Calls**: Click-to-call analytics
- **WhatsApp Clicks**: Social engagement
- **Downloads**: Resource engagement

## 🤝 Contributing

### Development Workflow
1. Create feature branch
2. Make changes with proper TypeScript types
3. Run linting and formatting
4. Test on multiple devices
5. Submit pull request

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Comprehensive linting rules
- **Prettier**: Consistent formatting
- **Husky**: Pre-commit quality checks

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

### Design Resources
- [IA Document](./docs/ia_kpis.md) - Site architecture and KPIs
- [Competitive Analysis](./research/competitive.md) - Market research
- [Component Library](./src/components/) - Reusable components

## 📄 License

This project is proprietary to United Engineering Works. All rights reserved.

## 🆘 Support

For technical support or questions about this website:
- **Email**: tech@unitedengineeringworks.com
- **Phone**: +1 (555) 123-4567
- **Documentation**: See [docs/](./docs/) folder

---

**Built with ❤️ by the United Engineering Works Development Team**
