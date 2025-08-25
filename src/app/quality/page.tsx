import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quality & Certifications',
  description: 'Our commitment to quality excellence with ISO certifications, quality management systems, and continuous improvement processes.',
}

export default function QualityPage() {
  return (
    <div className="container section-padding">
      <div className="text-center mb-16">
        <h1 className="heading-1 mb-6">Quality & Certifications</h1>
        <p className="text-body max-w-3xl mx-auto">
          We offer complete in-house production—from sourcing raw materials to casting and finishing—followed by rigorous testing before delivery. Our quality assurance process ensures every component meets international standards.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        <div>
          <h2 className="heading-2 mb-6">Quality Management System</h2>
          <p className="text-body mb-6">
            Our comprehensive quality management system ensures every component meets 
            the highest standards of precision, reliability, and performance.
          </p>
          <div className="space-y-4">
            {[
              'In-house manufacturing from raw materials to finished products',
              'Advanced casting and finishing processes',
              'Comprehensive testing protocols',
              'International quality standards compliance',
              'Regular quality audits and continuous improvement'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-body">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-muted rounded-lg p-8 flex items-center justify-center overflow-hidden">
          <img 
            src="/QMS.jpg" 
            alt="Quality Management System" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="heading-2 mb-8 text-center">Certifications & Standards</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
            { name: 'Automotive Standards', description: 'Truck & Trailer Components' },
            { name: 'Industrial Standards', description: 'Engineering Components' },
            { name: 'Export Standards', description: 'International Compliance' },
            { name: 'Quality Assurance', description: 'In-House Testing' },
            { name: 'Material Standards', description: 'Raw Material Quality' }
          ].map((cert, i) => (
            <div key={i} className="bg-card border rounded-lg p-6 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">✓</span>
              </div>
              <h3 className="heading-3 mb-2">{cert.name}</h3>
              <p className="text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        <div className="bg-muted rounded-lg p-8 flex items-center justify-center order-2 lg:order-1 overflow-hidden">
          <img 
            src="/testing.jpg" 
            alt="Testing & Inspection Equipment" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="heading-2 mb-6">Testing & Inspection</h2>
          <div className="space-y-4">
            {[
              'Dimensional Inspection',
              'Material Testing',
              'Performance Validation',
              'Non-Destructive Testing',
              'Environmental Testing'
            ].map((test, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-body">{test}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="heading-2 mb-8 text-center">Quality Metrics</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            {[
              { metric: '99.8%', label: 'On-Time Delivery' },
              { metric: '99.9%', label: 'Quality Acceptance' },
              { metric: '<0.1%', label: 'Defect Rate' },
              { metric: '24hrs', label: 'Response Time' }
            ].map((item, i) => (
              <div key={i} className="text-center bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
