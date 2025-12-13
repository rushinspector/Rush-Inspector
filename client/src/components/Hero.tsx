import { motion } from "framer-motion";
import ConciergeForm from "./ConciergeForm";
import heroImage from "@assets/generated_images/professional_home_inspection_context_image.png";

export default function Hero() {
  return (
    <section className="relative min-h-0 lg:min-h-screen flex items-center justify-center pt-16 pb-12 lg:py-20 overflow-hidden bg-gray-50">
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
            <h1 className="hero-title font-display font-bold leading-[1.25] lg:leading-[1.2]">
              <span className="lg:hidden inline-block pt-1">Need an inspector <br/><span className="text-accent">fast?</span></span>
              <span className="hidden lg:inline">Need an inspector <br/><span className="text-accent">fast?</span></span>
            </h1>
            
            {/* Mobile and Tablet version */}
            <div className="lg:hidden space-y-1.5 text-left mt-2">
              <p className="text-[20.7px] text-white font-semibold leading-snug hero-mobile-headline whitespace-nowrap">
                Inspector booked within 24 hours
              </p>
              <p className="text-[16.7px] text-gray-100 font-normal hero-mobile-subline whitespace-nowrap">
                Pay only when confirmed · $349 flat fee
              </p>
              <p className="text-[14.7px] text-gray-300 font-normal tracking-wide hero-mobile-location whitespace-nowrap">
                Serving Hamilton County & Greater Cincinnati
              </p>
            </div>
            
            {/* Desktop version (lg and above only) */}
            <p className="hidden lg:block text-2xl lg:text-[28px] hero-subtitle text-gray-100 max-w-xl mt-10 lg:mt-12 font-medium leading-tight">
              <span className="lg:whitespace-nowrap">Home inspector booked within 24 hours—</span><br/>
              pay only when confirmed.
            </p>
            
            <div className="hidden lg:block space-y-2 pt-2">
              <p className="text-gray-200 font-bold text-[19px] lg:text-[22px] mt-0 lg:mt-6">
                Serving Hamilton County & Greater Cincinnati
              </p>
              <p className="text-white mt-8 lg:mt-3 text-[20px]"><span className="font-light lg:font-semibold">$349 coordination fee</span><span className="font-light text-[19px]"> (inspector paid directly)</span></p>
            </div>
            
            <div className="hidden lg:flex flex-wrap items-center justify-start gap-x-6 lg:gap-x-8 gap-y-2 pt-6 lg:pt-6 text-sm text-gray-300">
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
            <ConciergeForm />
          </div>
        </div>
      </div>
    </section>
  );
}
