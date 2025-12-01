import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 8V16C6 17.1046 6.89543 18 8 18H12C14.2091 18 16 16.2091 16 14C16 12.3431 14.9228 11 13.5 11H12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 11V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 8L20 12L16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-display font-bold text-primary tracking-tight text-[22px]">Rush Inspector</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-12"
        >
          <div className="text-xs text-muted-foreground flex flex-col">
            <div>Open 7 AM – 9 PM daily</div>
            <div>(Sunday 10 AM – 4 PM)</div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-end gap-1"
          >
            <a href="tel:(513)877-7874" className="text-sm font-medium text-primary hover:text-accent transition-colors underline underline-offset-2 flex items-center gap-1.5"><Phone className="w-4 h-4" />(513) 877 - RUSH</a>
            <a href="tel:(513)877-7874" className="text-xs text-muted-foreground hover:text-accent transition-colors">(513) 877 - 7874</a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
