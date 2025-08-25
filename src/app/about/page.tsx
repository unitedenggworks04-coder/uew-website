import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about United Engineering Works - our company profile, leadership team, global presence, and commitment to engineering excellence.',
}

export default function AboutPage() {
  return (
    <div className="container section-padding">
      <div className="text-center mb-16">
        <h1 className="heading-1 mb-6">About United Engineering Works</h1>
        <p className="text-body max-w-3xl mx-auto">
          United Engineering Works, headquartered in Meerut, Uttar Pradesh, is a leading manufacturer of precision engineering components for the automotive and industrial sectors. We specialize in KING PIN BUSHES, BRASS BUSHES, BRONZE BUSHES, BELLCRANK BUSHES, SPRING PINS, WASHERS, and U-BOLTS for trucks and trailers.
        </p>
      </div>
      
      {/* Company Overview */}
      <section className="mb-16">
        <h2 className="heading-2 mb-8 text-center">Company Overview</h2>
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <p className="text-body text-lg leading-relaxed">
              Under the visionary leadership of Mr. Jaspreet Singh Bindra, Chairman, UEW has grown from a local manufacturer to a trusted partner for industries across India and overseas.
            </p>
            <p className="text-body text-lg leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for automotive and industrial sectors, with a focus on precision engineering components.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="mb-16">
        <h2 className="heading-2 mb-8 text-center">Leadership Team</h2>
        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                             <img 
                 src="/Papa.jpeg" 
                 alt="Mr. Jaspreet Singh Bindra - Chairman & Founder" 
                 className="w-full h-full object-cover object-center"
               />
            </div>
            <h3 className="heading-3 mb-2">Mr. Jaspreet Singh Bindra</h3>
            <p className="text-muted-foreground">Chairman & Founder</p>
            <p className="text-body mt-4">
              Founded in 1998, Mr. Bindra has led UEW from a local manufacturer to a trusted partner for industries across India and overseas.
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="mb-16">
        <h2 className="heading-2 mb-8 text-center">Global Presence</h2>
        <div className="bg-muted rounded-lg p-8 text-center">
          <p className="text-muted-foreground">"India", "Nepal", "Sri Lanka"</p>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="mb-16">
        <h2 className="heading-2 mb-8 text-center">Company Timeline</h2>
        <div className="space-y-8">
          {[
            { year: '1998', title: 'Company Founded', description: 'UEW established under Mr. Jaspreet Singh Bindra' },
            { year: '2005', title: 'Quality Certification', description: 'Achieved ISO 9001:2015 certification' },
            { year: '2010', title: 'Market Expansion', description: 'Expanded to serve industries across India' },
            { year: '2020', title: 'Global Reach', description: 'Started exporting to international markets' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg flex-shrink-0">
                {item.year}
              </div>
              <div>
                <h3 className="heading-3 mb-2">{item.title}</h3>
                <p className="text-body">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values & Culture */}
      <section className="mb-16">
        <h2 className="heading-2 mb-8 text-center">Values & Culture</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Quality', description: 'Excellence in every component' },
            { title: 'Innovation', description: 'Continuous improvement and R&D' },
            { title: 'Integrity', description: 'Trust and transparency' },
          ].map((value, i) => (
            <div key={i} className="text-center p-6 bg-muted rounded-lg">
              <h3 className="heading-3 mb-4">{value.title}</h3>
              <p className="text-body">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Team Form */}
      {/* <section>
        <h2 className="heading-2 mb-8 text-center">Contact Our Team</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-muted rounded-lg p-8 text-center">
            <p className="text-muted-foreground">Contact Team Form Placeholder</p>
            <button className="btn-primary mt-4">Contact Our Team</button>
          </div>
        </div>
      </section> */}
    </div>
  )
}
