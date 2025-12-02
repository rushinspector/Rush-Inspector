import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <a href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 cursor-pointer" data-testid="link-back-home">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2" data-testid="text-privacy-title">
            Rush Inspector – Privacy Policy
          </h1>
          <p className="text-gray-500 mb-8">Last updated: December 1, 2025</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">1. Information We Collect</h2>
              <p className="mb-3">
                When you submit an inspection matching request through our platform, we collect the following personal and job-related information that you voluntarily provide:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full name</li>
                <li>Real estate agency and/or brokerage name</li>
                <li>Telephone number</li>
                <li>Email address</li>
                <li>Property address to be inspected</li>
                <li>Approximate square footage of the property</li>
                <li>Preferred inspection date and time</li>
                <li>Requested additional services or add-ons (e.g., radon testing, mold assessment, sewer scope, etc.)</li>
                <li>Referral source ("How did you hear about us?")</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">2. How We Use Your Information</h2>
              <p className="mb-3">We use the information described above for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>(a) To facilitate the matching of your inspection request with independent third-party home inspectors;</li>
                <li>(b) To communicate with you regarding the status and coordination of your current request;</li>
                <li>(c) To improve our services and platform functionality; and</li>
                <li>(d) To send you marketing and promotional communications about Rush Inspector services, industry updates, and special offers, unless and until you opt out (see Section 5 below).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">3. How We Share Your Information</h2>
              <p className="mb-3">We share your information only as described below:</p>
              
              <h3 className="font-medium text-primary mt-4 mb-2">3.1 Job-Related Details</h3>
              <p>
                The property address, square footage, requested date/time, and any add-ons are shared with multiple independent inspectors in our network solely to enable them to evaluate availability and decide whether to accept the assignment.
              </p>
              
              <h3 className="font-medium text-primary mt-4 mb-2">3.2 Contact Information</h3>
              <p>
                Your full name, telephone number, email address, and agency/brokerage name are disclosed only to the independent inspector(s) who formally accept your assignment.
              </p>
              
              <h3 className="font-medium text-primary mt-4 mb-2">3.3 Other Third Parties</h3>
              <p>
                We do not sell, rent, lease, or otherwise disclose your personal information to any unrelated third parties for their own marketing or commercial purposes.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">4. Legal Bases for Processing</h2>
              <p>
                We process your personal information as necessary to perform the matching service you request, to pursue our legitimate business interests (including marketing our services), and to comply with applicable legal obligations.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">5. Marketing Communications & Opt-Out Rights</h2>
              <p>
                You may receive transactional messages related to your current request and, separately, marketing communications from Rush Inspector. Every marketing email and SMS message will contain a clear and conspicuous unsubscribe mechanism. You may also opt out at any time by replying "STOP" to any text message or by emailing cansanelli@rushinspector.com with the word "UNSUBSCRIBE" in the subject line. Upon receipt of an opt-out request, we will promptly remove you from future marketing communications.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, to establish or defend legal claims, and to comply with applicable record-keeping obligations under Ohio and federal law. Upon request, we will delete or anonymize your information where we are not legally required to retain it.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">7. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal information at any time by contacting cansanelli@rushinspector.com.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">8. Security</h2>
              <p>
                We implement reasonable administrative, technical, and organizational measures to protect your personal information against unauthorized access, loss, or alteration.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">9. Governing Law</h2>
              <p>
                This Privacy Policy is governed by the laws of the State of Ohio.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">10. Contact Us</h2>
              <p>
                For any questions or requests regarding this Privacy Policy or your personal information, please contact:
              </p>
              <p className="mt-2">
                <a href="mailto:cansanelli@rushinspector.com" className="text-accent hover:underline">cansanelli@rushinspector.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
