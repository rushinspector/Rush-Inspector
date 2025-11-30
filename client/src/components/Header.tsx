import { motion } from "framer-motion";

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
              <span className="text-white font-display font-bold text-sm">RI</span>
            </div>
            <span className="font-display font-bold text-primary text-lg tracking-tight">Rush Inspector</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-12"
        >
          <div className="text-xs text-muted-foreground flex flex-col">
            <div>Mon - Sat, 7am to 9pm</div>
            <div>Sun 10am to 4pm</div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-end gap-1"
          >
            <a href="tel:(513)877-7874" className="text-sm font-medium text-primary hover:text-accent transition-colors">(513) 877 - RUSH</a>
            <a href="tel:(513)877-7874" className="text-xs text-muted-foreground hover:text-accent transition-colors">(513) 877 - 7874</a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
