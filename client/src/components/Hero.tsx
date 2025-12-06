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
            <h1 className="hero-title font-display font-bold leading-[1.25] md:leading-[1.1]">
              Can't find an <br/>
              <span className="text-accent">inspector?</span>
            </h1>
            
            <p className="text-[20.9px] md:text-2xl lg:text-3xl text-gray-100 max-w-xl mt-6 md:mt-10 lg:mt-18">
              <span className="md:whitespace-nowrap">Inspector booked within 24 hours—</span><br/>
              pay only when confirmed.
            </p>
            
            <div className="space-y-2 pt-2">
              <p className="text-gray-200 font-semibold text-[16px] md:text-xl lg:text-[23px] -mt-3 md:mt-0">
                Serving Hamilton County & Greater Cincinnati
              </p>
              <p className="text-white font-light -mt-2 md:mt-6 text-[14.5px] md:text-[20px]">$349 coordination fee (inspector paid directly)</p>
            </div>
            
            <div className="hidden md:flex flex-wrap items-center justify-start gap-x-6 md:gap-x-8 gap-y-2 pt-6 lg:pt-8 text-sm text-gray-300">
              <div className="flex items-center gap-2 text-[18px]">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Quick Booking
              </div>
              <div className="flex items-center gap-2 text-[18px]">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fully Licensed & Insured
              </div>
              <div className="flex items-center gap-2 text-[18px]">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Real Support
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <div className="lg:pl-12 -mt-14 lg:mt-0">
            <div className="disclaimer-text hidden lg:block text-xl lg:text-sm text-gray-400 max-w-2xl ml-2 lg:ml-5 mr-0 mb-1"> We match licensed & insured professionals; verify independently.</div>
            <ConciergeForm />
            <p className="lg:hidden text-[10px] text-gray-300 text-center mt-3">
              By submitting, you agree to our <a href="/terms" className="underline">Terms of Service</a> and <a href="/privacy" className="underline">Privacy</a>
            </p>
            <p className="lg:hidden text-[10px] text-gray-300 text-center mt-1">
              Licensed & insured professionals; verify independently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
