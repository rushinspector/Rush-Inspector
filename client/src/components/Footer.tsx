import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-1.5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-6 md:gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-2">
              Rush <span className="text-accent">Inspector</span>
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              The platform connecting real estate professionals with fast, high-quality home inspections.
            </p>
          </div>

          {/* Contact & Legal */}
          <div className="text-[8px]">
            <h4 className="text-[10px] font-bold mb-1">Contact</h4>
            <ul className="space-y-0.5 text-gray-400">
              <li className="flex items-center gap-1">
                <Phone className="w-2.5 h-2.5 text-accent" />
                <span>(513) 877-7874</span>
              </li>
              <li className="flex items-center gap-1">
                <Mail className="w-2.5 h-2.5 text-accent" />
                <span>cansanelli@rushinspector.com</span>
              </li>
              <li className="flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-accent" />
                <span>Cincinnati, OH</span>
              </li>
            </ul>
            
            <h4 className="text-[10px] font-bold mb-1 mt-1.5">Legal</h4>
            <ul className="space-y-0.5 text-gray-400">
              <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="-mt-3 flex justify-end">
          <p className="text-[10px] text-gray-500">
            © {new Date().getFullYear()} Rush Inspector. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
