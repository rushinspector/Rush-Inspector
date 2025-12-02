import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8" data-testid="link-back-home">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2" data-testid="text-terms-title">
            Rush Inspector – Terms of Service
          </h1>
          <p className="text-gray-500 mb-8">Last updated: December 2025</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">1. Nature of Service</h2>
              <p>
                Rush Inspector operates exclusively as an online technology platform and referral/matching service. Rush Inspector does not perform home inspections, does not employ home inspectors, does not supervise home inspectors, and does not act as an agent or broker for any inspector. All home inspections are performed by independent third-party licensed professionals with whom you contract directly.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">2. 24-Hour Inspector Match Guarantee</h2>
              <p>
                Upon receipt of a properly completed request, Rush Inspector will immediately distribute the request to its network of independent licensed home inspectors and will use commercially reasonable efforts to obtain an acceptance within twenty-four (24) hours. If no inspector accepts the request within that period, the $349 matching fee will be waived in full and no charge will be made. This guarantee applies solely to the act of obtaining an acceptance and does not constitute a guarantee of any specific inspection date, time, report delivery, or inspection quality.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">3. Matching Fee and Refund Policy</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>A matching/coordination fee of three hundred forty-nine dollars ($349.00 USD) is charged to your payment method immediately upon an inspector accepting your request.</li>
                <li>Once charged, the $349 fee is non-refundable except in the following two circumstances only: (a) the assigned inspector fails to appear at the scheduled inspection (no-show), or (b) the assigned inspector is found, prior to or at the time of inspection, to lack a current valid license or required insurance.</li>
                <li>In either of the above cases, Rush Inspector will issue a full refund of the $349 fee within three (3) business days.</li>
                <li>All other cancellations, changes of mind, transaction fall-throughs, or access issues result in forfeiture of the $349 fee.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">4. Payment to Inspector</h2>
              <p>
                You are solely responsible for negotiating and paying the inspector's inspection fee directly to the inspector. Rush Inspector has no involvement in, and assumes no liability for, that separate transaction.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">5. No Employment or Agency Relationship</h2>
              <p>
                Every inspector in the Rush Inspector network is an independent contractor. Rush Inspector does not set their rates, control their schedules, direct their work, or assume responsibility for the accuracy or completeness of their inspections.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">6. User / Client Responsibilities</h2>
              <p className="mb-2">By using the service you agree to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Provide accurate property address and contact information</li>
                <li>Arrange for physical access to the property at the mutually agreed time</li>
                <li>Independently verify the assigned inspector's current license status and insurance coverage before allowing the inspection to proceed</li>
                <li>Pay the inspector directly in accordance with your separate agreement with them</li>
              </ul>
              <p className="mt-2">
                Rush Inspector makes no representations or warranties regarding the quality, thoroughness, timeliness, or outcome of any inspection performed by a third-party inspector.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">7. Limitation of Liability</h2>
              <p>
                In no event shall Rush Inspector's total liability to you for all damages, losses, and causes of action exceed the amount you actually paid Rush Inspector (maximum $349.00). Rush Inspector shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to any inspection.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Ohio, without regard to conflict of law principles. Any dispute arising under these Terms shall be resolved exclusively in the state or federal courts located in Highland, Ohio.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-lg text-primary mb-2">9. Modification of Terms</h2>
              <p>
                Rush Inspector reserves the right to modify these Terms at any time. Continued use of the service after posted changes constitutes acceptance of the modified terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
