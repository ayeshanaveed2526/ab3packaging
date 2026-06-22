"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "./Reveal";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 12h20M10 8V6a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Food-Grade Packaging",
    description:
      "FDA-compliant round tubes and cylindrical containers for food, beverages, and health products. Safe materials with barrier coatings and tamper-evident seals.",
    tags: ["FDA Compliant", "Barrier Films", "Custom Sizes"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4l8 4v8c0 5-3.5 8-8 8s-8-3-8-8V8l8-4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 12v6M11 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Luxury & Perfume Packaging",
    description:
      "Embossed cylindrical tubes, round rigid containers, and premium gift tubes with metallic finishes, foil stamping, and soft-touch coatings for high-end brands.",
    tags: ["Gold Foil", "Metal Caps", "Embossing"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 11h16M11 6v5M17 6v5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Custom Retail Tubes",
    description:
      "Bespoke round display tubes, cylindrical shelf-ready packaging, and branded paper tubes tailored to your identity — from concept sketches to production runs.",
    tags: ["Brand Design", "Prototyping", "Bulk Orders"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 9v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Cosmetic & Personal Care",
    description:
      "Elegant round tubes and jars for skincare, cosmetics, and wellness products — cylindrical bottles, round jars, and multi-component tube sets with premium unboxing.",
    tags: ["Pump Systems", "Glass Inserts", "Sustainable Options"],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-main">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="maroon-line" />
            <p className="caption-uppercase text-maroon">What We Do</p>
            <div className="maroon-line" />
          </div>
          <h2 className="display-lg mb-5">Packaging solutions for every industry</h2>
          <p className="text-body leading-relaxed">
            Whether you need food-safe containers or luxury perfume presentation,
            AB3 delivers precision manufacturing with finishes that make your
            product unforgettable.
          </p>
        </Reveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.article
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="feature-card h-full flex flex-col group hover:shadow-elevated hover:border-maroon/20 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
                  className="w-12 h-12 rounded-lg bg-maroon-soft flex items-center justify-center text-maroon mb-5"
                >
                  {service.icon}
                </motion.div>
                <h3 className="font-headline text-xl font-bold text-ink mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-body flex-1 mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-surface-soft text-muted border border-hairline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
