"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const marqueeItems = [
  "Food-Grade Certified",
  "Luxury Finishes",
  "Custom Prototyping",
  "ISO 9001",
  "Gold Foil Stamping",
  "Sustainable Materials",
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen hero-gradient overflow-hidden pt-24 md:pt-28"
    >
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-maroon/8 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-charcoal-soft/10 blur-3xl"
        />
      </div>

      <div className="container-main relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)] pb-16 lg:pb-24">
        <motion.div style={{ y: textY, opacity }} className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="maroon-line" />
            <p className="caption-uppercase text-maroon">Premium Packaging Solutions</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl mb-6"
          >
            Crafted packaging for brands that demand{" "}
            <span className="text-gradient-maroon">excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg leading-relaxed text-body mb-10 max-w-md"
          >
            From food-grade containers to luxury perfume tubes — AB3 Packaging
            delivers precision-engineered solutions with premium finishes that
            elevate your product.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-14 grid grid-cols-3 gap-3"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Clients Served" },
              { value: "100%", label: "Food-Grade" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 + i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="stat-card"
              >
                <p className="font-headline text-2xl md:text-3xl font-bold text-maroon">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-muted mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY, scale: imageScale }}
          initial={{ opacity: 0, x: 60, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="product-frame aspect-4/3 lg:aspect-square">
            <Image
              src="/hero-showcase.png"
              alt="AB3 luxury packaging collection — perfume tubes, gift boxes, and premium containers"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-4 md:-left-8 dark-card px-5 py-4 shadow-elevated max-w-55"
          >
            <p className="caption-uppercase text-maroon-muted mb-1">Featured</p>
            <p className="font-headline text-lg font-semibold text-on-dark">
              Luxury Perfume Tubes
            </p>
            <p className="text-sm text-on-dark-soft mt-1">
              Embossed gold foil · Metal caps
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-4 -right-2 md:-right-6 glass-card px-4 py-3 shadow-soft"
          >
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2.5 w-2.5 rounded-full bg-maroon"
              />
              <span className="text-sm font-semibold text-ink">ISO Certified</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-hairline bg-surface-soft/80 backdrop-blur-sm py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center mx-8 text-sm font-medium text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-maroon mr-3" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
