import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brand Kit - United Engineering Works',
  description: 'Explore the UEW brand kit with colors, typography, components, and design guidelines.',
}

export default function BrandKitPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="container">
          <h1 className="heading-1 text-center mb-6">UEW Brand Kit</h1>
          <p className="text-body-large text-center max-w-3xl mx-auto opacity-90">
            Complete design system for United Engineering Works - precision engineering with industrial aesthetic
          </p>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-20">
        <div className="container">
          <h2 className="heading-2 text-center mb-16">Color Palette</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary Colors */}
            <div className="space-y-4">
              <h3 className="heading-4 text-navy">Primary Colors</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-navy rounded-lg shadow-md"></div>
                  <div>
                    <p className="font-semibold text-navy">Navy</p>
                    <p className="text-sm text-zinc-600">#0B1B2B</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-brass rounded-lg shadow-md"></div>
                  <div>
                    <p className="font-semibold text-navy">Brass</p>
                    <p className="text-sm text-zinc-600">#B08D57</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-graphite rounded-lg shadow-md"></div>
                  <div>
                    <p className="font-semibold text-navy">Graphite</p>
                    <p className="text-sm text-zinc-600">#2B2B2B</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Neutral Colors */}
            <div className="space-y-4">
              <h3 className="heading-4 text-navy">Neutral Colors</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-zinc-500 rounded-lg shadow-md"></div>
                  <div>
                    <p className="font-semibold text-navy">Zinc</p>
                    <p className="text-sm text-zinc-600">#6B7280</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white border border-zinc-200 rounded-lg shadow-md"></div>
                  <div>
                    <p className="font-semibold text-navy">White</p>
                    <p className="text-sm text-zinc-600">#FFFFFF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Scale */}
            <div className="space-y-4">
              <h3 className="heading-4 text-navy">Color Scale</h3>
              
              <div className="space-y-2">
                <div className="flex space-x-1">
                  <div className="w-8 h-8 bg-navy-50 rounded"></div>
                  <div className="w-8 h-8 bg-navy-100 rounded"></div>
                  <div className="w-8 h-8 bg-navy-200 rounded"></div>
                  <div className="w-8 h-8 bg-navy-300 rounded"></div>
                  <div className="w-8 h-8 bg-navy-400 rounded"></div>
                  <div className="w-8 h-8 bg-navy-500 rounded"></div>
                  <div className="w-8 h-8 bg-navy-600 rounded"></div>
                  <div className="w-8 h-8 bg-navy-700 rounded"></div>
                  <div className="w-8 h-8 bg-navy-800 rounded"></div>
                  <div className="w-8 h-8 bg-navy-900 rounded"></div>
                </div>
                <p className="text-sm text-zinc-600">Navy color scale (50-900)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-20 bg-zinc-50">
        <div className="container">
          <h2 className="heading-2 text-center mb-16">Typography</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Headings */}
            <div className="space-y-6">
              <h3 className="heading-4 text-navy mb-6">Headings (Archivo)</h3>
              
              <div className="space-y-4">
                <div>
                  <h1 className="heading-1 text-navy">Heading 1</h1>
                  <p className="text-sm text-zinc-600 mt-2">3.5rem (56px) - Page titles, hero text</p>
                </div>
                
                <div>
                  <h2 className="heading-2 text-navy">Heading 2</h2>
                  <p className="text-sm text-zinc-600 mt-2">2.5rem (40px) - Section headers</p>
                </div>
                
                <div>
                  <h3 className="heading-3 text-navy">Heading 3</h3>
                  <p className="text-sm text-zinc-600 mt-2">2rem (32px) - Subsection headers</p>
                </div>
                
                <div>
                  <h4 className="heading-4 text-navy">Heading 4</h4>
                  <p className="text-sm text-zinc-600 mt-2">1.5rem (24px) - Card titles, form labels</p>
                </div>
              </div>
            </div>

            {/* Body Text */}
            <div className="space-y-6">
              <h3 className="heading-4 text-navy mb-6">Body Text (Inter)</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-body-large text-navy">Body Large</p>
                  <p className="text-sm text-zinc-600 mt-2">1.125rem (18px) - Lead paragraphs</p>
                </div>
                
                <div>
                  <p className="text-body text-navy">Body Base</p>
                  <p className="text-sm text-zinc-600 mt-2">1rem (16px) - Body text, default</p>
                </div>
                
                <div>
                  <p className="text-sm text-navy">Body Small</p>
                  <p className="text-xs text-zinc-600 mt-2">0.875rem (14px) - Captions, small text</p>
                </div>
                
                <div>
                  <p className="text-xs text-navy">Body XS</p>
                  <p className="text-xs text-zinc-600 mt-2">0.75rem (12px) - Micro text, labels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-20">
        <div className="container">
          <h2 className="heading-2 text-center mb-16">Components</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Buttons */}
            <div className="space-y-6">
              <h3 className="heading-4 text-navy mb-6">Buttons</h3>
              
              <div className="space-y-4">
                <button className="btn-primary">Primary Button</button>
                <button className="btn-secondary">Secondary Button</button>
                <button className="btn-ghost">Ghost Button</button>
                <button className="btn-outline">Outline Button</button>
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-6">
              <h3 className="heading-4 text-navy mb-6">Cards</h3>
              
              <div className="card max-w-sm">
                <h4 className="heading-5 text-navy mb-3">Sample Card</h4>
                <p className="text-body text-zinc-600 mb-4">
                  This is a sample card component showcasing the UEW design system.
                </p>
                <button className="btn-primary">Learn More</button>
              </div>
            </div>
          </div>

          {/* Forms */}
          <div className="mt-16">
            <h3 className="heading-4 text-navy mb-6 text-center">Forms</h3>
            
            <div className="max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  className="input w-full" 
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Message
                </label>
                <textarea 
                  className="input w-full h-24 resize-none" 
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button className="btn-primary w-full">Submit</button>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing & Shadows */}
      <section className="py-20 bg-zinc-50">
        <div className="container">
          <h2 className="heading-2 text-center mb-16">Spacing & Shadows</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Spacing */}
            <div className="space-y-6">
              <h3 className="heading-4 text-navy mb-6">Spacing Scale</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-brass rounded"></div>
                  <span className="text-sm text-zinc-600">4px (spacing-1)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-brass rounded"></div>
                  <span className="text-sm text-zinc-600">8px (spacing-2)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brass rounded"></div>
                  <span className="text-sm text-zinc-600">16px (spacing-4)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-brass rounded"></div>
                  <span className="text-sm text-zinc-600">24px (spacing-6)</span>
                </div>
              </div>
            </div>

            {/* Shadows */}
            <div className="space-y-6">
              <h3 className="heading-4 text-navy mb-6">Shadow System</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">Shadow Small</div>
                <div className="p-4 bg-white rounded-lg shadow-base">Shadow Base</div>
                <div className="p-4 bg-white rounded-lg shadow-md">Shadow Medium</div>
                <div className="p-4 bg-white rounded-lg shadow-lg">Shadow Large</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motion */}
      <section className="py-20">
        <div className="container">
          <h2 className="heading-2 text-center mb-16">Motion & Animation</h2>
          
          <div className="text-center space-y-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="heading-4 text-navy mb-6">Animation Durations</h3>
              <p className="text-body text-zinc-600">
                All UEW components use consistent motion timing: 200ms for hover effects, 
                300ms for page transitions, and 500ms for loading states.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-white rounded-lg shadow-base hover:shadow-lg transition-all duration-200 cursor-pointer">
                <h4 className="heading-5 text-navy mb-2">Hover Effect</h4>
                <p className="text-sm text-zinc-600">200ms ease-out</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-base hover:shadow-lg transition-all duration-300 cursor-pointer">
                <h4 className="heading-5 text-navy mb-2">Page Transition</h4>
                <p className="text-sm text-zinc-600">300ms ease-in-out</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-base hover:shadow-lg transition-all duration-500 cursor-pointer">
                <h4 className="heading-5 text-navy mb-2">Loading State</h4>
                <p className="text-sm text-zinc-600">500ms ease-in-out</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
