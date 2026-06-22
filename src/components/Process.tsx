"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const steps = [
  {
    step: "01",
    title: "Consultation",
    description: "Share your vision, product specs, and brand guidelines. We assess materials, finishes, and compliance requirements.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description: "Our team creates detailed mockups and physical prototypes for your approval before production begins.",
  },
  {
    step: "03",
    title: "Production",
    description: "Precision manufacturing with quality checkpoints at every stage — from printing to assembly and finishing.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Packaged, inspected, and shipped to your specifications. Ongoing support for reorders and refinements.",
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-surface-soft/90">
      <div className="container-main">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="maroon-line" />
            <p className="caption-uppercase text-maroon">How It Works</p>
            <div className="maroon-line" />
          </div>
          <h2 className="display-lg mb-5">From concept to delivery</h2>
          <p className="text-body leading-relaxed">
            A streamlined process designed to bring your packaging vision to life
            with clarity and confidence at every step.
          </p>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] process-line" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.12}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="relative text-center lg:text-left group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-maroon text-white font-headline text-lg font-bold mb-5 relative z-10 shadow-maroon"
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="font-headline text-xl font-bold text-ink mb-3 group-hover:text-maroon transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
