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
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden sm:flex items-center gap-8"
        >
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">For Agents</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </motion.nav>
      </div>
    </header>
  );
}
