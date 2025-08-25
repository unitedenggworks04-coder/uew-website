import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with United Engineering Works for quotes, technical support, sales inquiries, and project discussions.',
}

export default function ContactPage() {
  return (
    <div className="container section-padding">
      <div className="text-center mb-16">
        <h1 className="heading-1 mb-6">Contact Us</h1>
        <p className="text-body max-w-3xl mx-auto">
          Ready to discuss your project? Get instant quotes, technical support, 
          or connect with our sales team.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 mb-16">
        {/* RFQ Form */}
        <div>
          <h2 className="heading-2 mb-6">Get Instant Quote</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Company Name</label>
              <input 
                type="text" 
                className="w-full p-3 border rounded-lg bg-background"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Contact Person</label>
              <input 
                type="text" 
                className="w-full p-3 border rounded-lg bg-background"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-3 border rounded-lg bg-background"
                placeholder="email@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input 
                type="tel" 
                className="w-full p-3 border rounded-lg bg-background"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Product/Service Interest</label>
              <select className="w-full p-3 border rounded-lg bg-background">
                <option>Select Product Category</option>
                <option>KING PIN BUSHES</option>
                <option>BRASS BUSHES</option>
                <option>BRONZE BUSHES</option>
                <option>BELLCRANK BUSHES</option>
                <option>SPRING PINS</option>
                <option>WASHERS</option>
                <option>U-BOLTS</option>
                <option>Custom Manufacturing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Project Details</label>
              <textarea 
                rows={4}
                className="w-full p-3 border rounded-lg bg-background"
                placeholder="Describe your project requirements..."
              />
            </div>
            <button className="btn-primary w-full">Submit RFQ</button>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="heading-2 mb-6">Get In Touch</h2>
          <div className="space-y-6">
            <div>
              <h3 className="heading-3 mb-3">WhatsApp Support</h3>
              <p className="text-body mb-2">Quick questions? Chat with us on WhatsApp</p>
              <a
                href="https://wa.me/918979820228?text=Hi! I have a question about your products. Can you help me?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                WhatsApp Chat
              </a>
            </div>

            <div>
              <h3 className="heading-3 mb-3">Phone Support</h3>
              <p className="text-body mb-2">Speak directly with our experts</p>
              <a
                href="tel:+918979820228"
                className="btn-outline inline-flex items-center justify-center"
              >
                Call Now
              </a>
            </div>

            <div>
              <h3 className="heading-3 mb-3">Email Support</h3>
              <p className="text-body mb-2">Send us an email for detailed inquiries</p>
              <a
                href="mailto:unitedenggworks04@gmail.com?subject=Inquiry about UEW Products&body=Hi, I would like to know more about your products. Please provide additional information."
                className="btn-outline inline-flex items-center justify-center"
              >
                Send Email
              </a>
            </div>

            <div>
              <h3 className="heading-3 mb-3">Business Hours</h3>
              <div className="text-body space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p>Saturday: 9:00 AM - 1:00 PM IST</p>
                <p className="text-sm text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="mb-16">
        <h2 className="heading-2 mb-8 text-center">Office Locations</h2>
        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {[
            {
              city: 'Headquarters',
              address: 'Meerut, Uttar Pradesh, India',
              phone: '+91-8979820228',
              email: 'unitedenggworks04@gmail.com'
            }
          ].map((office, i) => (
            <div key={i} className="bg-card border rounded-lg p-6">
              <h3 className="heading-3 mb-4">{office.city}</h3>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">{office.address}</p>
                <p className="text-muted-foreground">{office.phone}</p>
                <p className="text-muted-foreground">{office.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
