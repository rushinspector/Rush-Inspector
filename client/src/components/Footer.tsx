import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-3 pb-4">
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

          {/* Contact */}
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
          </div>

        </div>
        <div className="mt-2 flex justify-end">
          <p className="text-[10px] text-gray-500">
            © {new Date().getFullYear()} Rush Inspector. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
