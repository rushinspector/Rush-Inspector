import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Rush <span className="text-accent">Inspector</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The leading platform connecting real estate professionals with fast, high-quality home inspections.
            </p>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span>(513) 877-7874</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>concierge@rushinspections.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Cincinnati, OH</span>
              </li>
            </ul>

            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
            <p className="text-xs text-gray-500 pt-6">
              © {new Date().getFullYear()} Rush Inspector. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
