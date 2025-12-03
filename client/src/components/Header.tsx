import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 14L12 4L21 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 14V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 17L12 12L16 17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <span className="font-display font-bold text-primary tracking-tight text-[24px]">Rush Inspector</span>
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
