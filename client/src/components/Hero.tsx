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
            className="text-white space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-accent/20 border border-accent/50 rounded-full text-accent font-medium mb-2 backdrop-blur-sm text-[14px]">24-Hour Inspector Match Guarantee</div>
            <h1 className="md:text-[48px] lg:text-[56px] font-display font-bold text-[69px] leading-[1.25]">
              All your inspectors <br/>
              <span className="text-accent">booked?</span>
            </h1>
            <p className="md:text-xl text-gray-200 max-w-lg mt-[11px] mb-[11px] text-[18px]">We’ll connect you with a licensed inspector in 24 hours—or our fee is waived.</p>
            <p className="md:text-xl text-gray-200 text-[18px]">Serving Hamilton County & Greater Cincinnati</p>
            <div className="md:text-xl font-bold text-[#f8f8fa] mt-2 text-[17px]">$349 coordination fee — inspector paid directly</div>
            
            <div className="flex flex-col sm:flex-row gap-2 pt-4">
              <div className="flex items-center gap-2 font-medium text-gray-300 text-[16px]">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Quick Booking
              </div>
              <div className="flex items-center gap-2 font-medium text-gray-300 text-[16px]">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fully Licensed & Insured
              </div>
              <div className="flex items-center gap-2 font-medium text-gray-300 text-[16px]">
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
