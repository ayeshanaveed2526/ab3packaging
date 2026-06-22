"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./Reveal";

const categories = [
  { id: "all", label: "All Products" },
  { id: "perfume", label: "Perfume & Luxury" },
  { id: "food", label: "Food-Grade" },
  { id: "cosmetic", label: "Cosmetics" },
  { id: "retail", label: "Retail Boxes" },
];

const products = [
  {
    id: 1,
    name: "Luxury Perfume Tube Set",
    category: "perfume",
    description: "Embossed cylindrical tubes with brushed metal caps and gold damask patterns.",
    image: "/product-perfume.png",
    featured: true,
  },
  {
    id: 2,
    name: "Food-Grade Paper Tubes",
    category: "food",
    description: "FDA-compliant cardboard tubes with food-safe inner linings for dry goods and snacks.",
    image: "/product-food.png",
  },
  {
    id: 3,
    name: "Premium Gift Box Collection",
    category: "retail",
    description: "Rigid boxes with magnetic closures, velvet inserts, and custom brand embossing.",
    image: "/product-gift-box.png",
  },
  {
    id: 4,
    name: "Cosmetic Pump Packaging",
    category: "cosmetic",
    description: "Elegant pump bottles and jars with soft-touch matte finishes for skincare lines.",
    image: "/product-cosmetic.png",
  },
  {
    id: 5,
    name: "Seraphina Eau de Parfum Box",
    category: "perfume",
    description: "Custom perfume packaging with glass bottle insert and ornate exterior design.",
    image: "/product-perfume-box.png",
  },
  {
    id: 6,
    name: "Sustainable Food Containers",
    category: "food",
    description: "Compostable and recyclable food packaging with barrier coating technology.",
    image: "/product-sustainable.png",
  },
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="section-padding bg-surface-soft">
      <div className="container-main">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="maroon-line" />
              <p className="caption-uppercase text-maroon">Our Work</p>
            </div>
            <h2 className="display-lg mb-4">Premium packaging portfolio</h2>
            <p className="text-body leading-relaxed">
              Explore our range of luxury tubes, food-grade containers, and bespoke
              retail packaging crafted for brands worldwide.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-maroon text-white shadow-maroon"
                    : "bg-surface-card text-muted border border-hairline hover:border-maroon-muted hover:text-ink"
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, index) => (
              <motion.article
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-xl border border-hairline bg-surface-card shadow-soft ${
                  product.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    product.featured ? "aspect-21/9 md:aspect-2/1" : "aspect-4/3"
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={
                      product.featured
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-400" />

                  <motion.div
                    initial={false}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 12l8-8M8 4h4v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  {product.featured && (
                    <span className="inline-block caption-uppercase text-maroon-muted mb-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                      Signature Collection
                    </span>
                  )}
                  <h3 className="font-headline text-xl md:text-2xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-on-dark-soft max-w-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    {product.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
