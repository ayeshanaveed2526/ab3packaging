"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function CTABand() {
  return (
    <section className="section-padding pt-0">
      <div className="container-main">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-charcoal px-8 py-16 md:px-16 md:py-20 text-center border border-charcoal-soft">
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -top-32 -right-32 w-64 h-64 rounded-full border border-maroon/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full border border-maroon/15"
              />
              <div className="absolute inset-0 bg-linear-to-br from-maroon/20 via-transparent to-transparent" />
            </div>

            <p className="caption-uppercase text-maroon-muted mb-4 relative">Ready to Begin?</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-dark mb-5 relative tracking-tight">
              Transform your product with packaging that sells
            </h2>
            <p className="text-on-dark-soft max-w-lg mx-auto mb-8 relative leading-relaxed">
              Join hundreds of brands who trust AB3 for packaging that combines
              safety, beauty, and brand impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center h-12 px-7 bg-maroon text-white text-sm font-semibold rounded-md shadow-maroon"
              >
                Get Started Today
              </motion.a>
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center h-12 px-7 border border-on-dark-soft/30 text-on-dark text-sm font-semibold rounded-md hover:border-maroon-muted transition-colors"
              >
                View Portfolio
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
