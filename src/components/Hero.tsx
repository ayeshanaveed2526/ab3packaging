"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen hero-gradient overflow-hidden pt-24 md:pt-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-maroon/4 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-forest/5 blur-3xl" />
      </div>

      <div className="container-main relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)] pb-16 lg:pb-24">
        <motion.div style={{ y: textY }} className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="caption-uppercase mb-6 text-maroon"
          >
            Premium Packaging Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl mb-6"
          >
            Crafted packaging for brands that demand{" "}
            <span className="text-maroon italic">excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg leading-relaxed text-body mb-10 max-w-md"
          >
            From food-grade containers to luxury perfume tubes — AB3 Packaging
            delivers precision-engineered solutions with premium finishes that
            elevate your product.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary">
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#products" className="btn-secondary">
              Explore Products
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 flex flex-wrap gap-8 md:gap-12"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Clients Served" },
              { value: "100%", label: "Food-Grade Certified" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-headline text-3xl text-maroon">
                  {stat.value}
                </p>
                <p className="text-sm text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY, scale: imageScale }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="product-frame aspect-4/3 lg:aspect-square">
            <Image
              src="/products-showcase.png"
              alt="AB3 luxury packaging — perfume tubes and premium containers"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-4 md:-left-8 dark-card px-5 py-4 shadow-elevated max-w-55"
          >
            <p className="caption-uppercase text-on-dark-soft mb-1">
              Featured
            </p>
            <p className="font-headline text-lg text-on-dark">
              Luxury Perfume Tubes
            </p>
            <p className="text-sm text-on-dark-soft mt-1">
              Embossed gold foil · Metal caps
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-4 -right-2 md:-right-6 bg-surface-card rounded-lg px-4 py-3 shadow-soft border border-hairline"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-maroon" />
              <span className="text-sm font-medium text-ink">
                ISO Certified
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="caption-uppercase text-muted-soft">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-muted-soft flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-maroon" />
        </motion.div>
      </motion.div>
    </section>
  );
}
