import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for United Engineering Works - Learn how we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <div className="container section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-6">Privacy Policy</h1>
          <p className="text-body max-w-3xl mx-auto">
            At United Engineering Works, we respect your privacy and are committed to protecting your personal information.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="heading-2 mb-6">Information We Collect</h2>
            <div className="space-y-4">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="heading-3 mb-3">Contact Information</h3>
                <ul className="space-y-2 text-body">
                  <li>• Name and company details</li>
                  <li>• Email address and phone number</li>
                  <li>• Project requirements and specifications</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-6">How We Use Your Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="heading-3 mb-3">Primary Uses</h3>
                <ul className="space-y-2 text-body">
                  <li>• Process your RFQ requests</li>
                  <li>• Provide technical support</li>
                  <li>• Send project updates</li>
                  <li>• Improve our services</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="heading-3 mb-3">Communication</h3>
                <ul className="space-y-2 text-body">
                  <li>• Respond to inquiries</li>
                  <li>• Send quotes and proposals</li>
                  <li>• Provide customer support</li>
                  <li>• Share relevant updates</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-6">Information Protection</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-body mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="space-y-2 text-body">
                <li>• Secure data transmission</li>
                <li>• Limited access to personal data</li>
                <li>• Regular security assessments</li>
                <li>• Employee privacy training</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-6">Information Sharing</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-body mb-4">
                We do not sell, trade, or rent your personal information to third parties. Information may be shared only when:
              </p>
              <ul className="space-y-2 text-body">
                <li>• Required by law or regulation</li>
                <li>• Necessary for service delivery</li>
                <li>• You provide explicit consent</li>
                <li>• Protecting our rights and safety</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-6">Your Rights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="heading-3 mb-3">Access & Control</h3>
                <ul className="space-y-2 text-body">
                  <li>• View your personal data</li>
                  <li>• Update information</li>
                  <li>• Request data deletion</li>
                  <li>• Opt-out of communications</li>
                </ul>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="heading-3 mb-3">Contact Us</h3>
                <ul className="space-y-2 text-body">
                  <li>• Email: unitedenggworks04@gmail.com</li>
                  <li>• Phone: +91-8979820228</li>
                  <li>• Address: Meerut, Uttar Pradesh, India</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="heading-2 mb-6">Updates to This Policy</h2>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-body">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. 
                We encourage you to review this policy periodically.
              </p>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-muted rounded-lg p-6">
              <p className="text-body mb-4">
                <strong>Last Updated:</strong> January 2025
              </p>
              <p className="text-body">
                If you have any questions about this Privacy Policy, please contact us using the information provided above.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
