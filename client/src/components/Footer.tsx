import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Rush <span className="text-accent">Inspector</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The platform connecting real estate professionals with fast, high-quality home inspections.
            </p>
          </div>

          {/* Contact & Legal */}
          <div className="text-[10px]">
            <h4 className="text-xs font-bold mb-1.5">Contact</h4>
            <ul className="space-y-1 text-gray-400">
              <li className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-accent" />
                <span>(513) 877-7874</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-accent" />
                <span>cansanelli@rushinspector.com</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-accent" />
                <span>Cincinnati, OH</span>
              </li>
            </ul>
            
            <h4 className="text-xs font-bold mb-1.5 mt-2">Legal</h4>
            <ul className="space-y-1 text-gray-400">
              <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Rush Inspector. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
