import { motion } from "framer-motion";
import ConciergeForm from "./ConciergeForm";
import heroImage from "@assets/generated_images/professional_home_inspection_context_image.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gray-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
        <img 
          src={heroImage} 
          alt="Professional Home Inspection" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white space-y-5"
          >
            <div className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/50 rounded-full text-accent font-medium backdrop-blur-sm text-sm">
              24-Hour Inspector Match Guarantee
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              All your inspectors <br/>
              <span className="text-accent">booked?</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-xl leading-snug">
              <span className="whitespace-nowrap">Licensed Inspector booked within 24 hours—</span><br/>
              pay only when confirmed.
            </p>
            
            <div className="space-y-2 pt-2">
              <p className="text-lg text-gray-200">
                Serving Hamilton County & Greater Cincinnati
              </p>
              <p className="text-lg font-semibold text-white">
                $349 coordination fee — inspector paid directly
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Quick Booking
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fully Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Real Support
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <div className="lg:pl-12">
            <div className="text-[11px] text-gray-400 max-w-2xl ml-5 mr-0 mb-1"> We match licensed & insured professionals; verify independently.</div>
            <ConciergeForm />
          </div>
        </div>
      </div>
    </section>
  );
}
