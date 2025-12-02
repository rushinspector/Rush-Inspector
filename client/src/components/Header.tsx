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
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 15L3 21C3 21.5304 3.21071 22.0391 3.58579 22.4142C3.96086 22.7893 4.46957 23 5 23L19 23C19.5304 23 20.0391 22.7893 20.4142 22.4142C20.7893 22.0391 21 21.5304 21 21L21 15" fill="white"/>
                <path d="M12 4L3 13L7 13L7 21L17 21L17 13L21 13L12 4Z" fill="white"/>
                <path d="M12 17L10 15M12 17L14 15M12 17L12 11" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
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
