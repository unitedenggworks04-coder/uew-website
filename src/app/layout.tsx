import type { Metadata } from 'next'
import { Inter, Archivo } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { RFQButton } from '@/components/rfq-button'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const archivo = Archivo({ 
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'United Engineering Works - Leading Manufacturer of Engineering Components',
    template: '%s | United Engineering Works'
  },
  description: 'United Engineering Works is a leading manufacturer of precision engineering components, automotive parts, and custom manufacturing solutions. Get instant quotes for your engineering needs.',
  keywords: ['engineering components', 'manufacturing', 'automotive parts', 'precision components', 'custom manufacturing', 'industrial machinery'],
  authors: [{ name: 'United Engineering Works' }],
  creator: 'United Engineering Works',
  publisher: 'United Engineering Works',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://unitedengineeringworks.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://unitedengineeringworks.com',
    title: 'United Engineering Works - Leading Manufacturer of Engineering Components',
    description: 'Leading manufacturer of precision engineering components, automotive parts, and custom manufacturing solutions.',
    siteName: 'United Engineering Works',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'United Engineering Works - Engineering Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'United Engineering Works - Leading Manufacturer of Engineering Components',
    description: 'Leading manufacturer of precision engineering components, automotive parts, and custom manufacturing solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${archivo.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <RFQButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
