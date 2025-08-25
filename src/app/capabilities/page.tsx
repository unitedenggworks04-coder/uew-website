import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capabilities',
  description: 'Discover our advanced manufacturing capabilities, cutting-edge technology, quality control systems, and R&D expertise.',
}

export default function CapabilitiesPage() {
  return (
    <div className="container section-padding">
      <div className="text-center mb-16">
        <h1 className="heading-1 mb-6">Our Capabilities</h1>
        <p className="text-body max-w-3xl mx-auto">
          Complete in-house production capabilities from raw materials to finished products. 
          Advanced manufacturing processes, quality control systems, and export capabilities for global markets.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Manufacturing Processes */}
        <div className="text-center">
          <h2 className="heading-2 mb-8">Manufacturing Processes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Raw Material Sourcing',
              'Casting & Foundry',
              'Precision Machining',
              'Quality Control Systems',
              'Assembly & Testing'
            ].map((process, i) => (
              <div key={i} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-body font-medium">{process}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment & Technology */}
        <div className="text-center">
          <h2 className="heading-2 mb-8">Equipment & Technology</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Advanced CNC Machines',
              'Casting & Foundry Equipment',
              'Precision Measurement Tools',
              'Quality Testing Equipment',
              'Export Packaging Systems'
            ].map((tech, i) => (
              <div key={i} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-body font-medium">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Control Systems */}
        <div className="text-center">
          <h2 className="heading-2 mb-8">Quality Control Systems</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'ISO 9001:2015 Certified',
              'Statistical Process Control',
              'Inspection & Testing',
              'Documentation & Traceability',
              'Continuous Improvement'
            ].map((system, i) => (
              <div key={i} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-body font-medium">{system}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* R&D Capabilities */}
        <div className="text-center">
          <h2 className="heading-2 mb-8">R&D Capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Product Development',
              'Material Research',
              'Performance Testing',
              'Quality Improvement',
              'Export Compliance'
            ].map((capability, i) => (
              <div key={i} className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-body font-medium">{capability}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
