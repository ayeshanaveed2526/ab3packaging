"use client";

import { motion } from "framer-motion";
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
    image: "/products-showcase.png",
    featured: true,
  },
  {
    id: 2,
    name: "Food-Grade Paper Tubes",
    category: "food",
    description: "FDA-compliant cardboard tubes with food-safe inner linings for dry goods and snacks.",
    image: "/products-showcase.png",
  },
  {
    id: 3,
    name: "Premium Gift Box Collection",
    category: "retail",
    description: "Rigid boxes with magnetic closures, velvet inserts, and custom brand embossing.",
    image: "/products-showcase.png",
  },
  {
    id: 4,
    name: "Cosmetic Pump Packaging",
    category: "cosmetic",
    description: "Elegant pump bottles and jars with soft-touch matte finishes for skincare lines.",
    image: "/products-showcase.png",
  },
  {
    id: 5,
    name: "Seraphina Eau de Parfum Box",
    category: "perfume",
    description: "Custom perfume packaging with glass bottle insert and ornate exterior design.",
    image: "/products-showcase.png",
  },
  {
    id: 6,
    name: "Sustainable Food Containers",
    category: "food",
    description: "Compostable and recyclable food packaging with barrier coating technology.",
    image: "/products-showcase.png",
  },
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="section-padding">
      <div className="container-main">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <p className="caption-uppercase mb-4 text-maroon">Our Work</p>
            <h2 className="display-lg mb-4">Premium packaging portfolio</h2>
            <p className="text-body leading-relaxed">
              Explore our range of luxury tubes, food-grade containers, and bespoke
              retail packaging crafted for brands worldwide.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-surface-card text-ink shadow-soft"
                    : "text-muted hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, index) => (
            <motion.article
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-lg ${
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
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    product.featured
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {product.featured && (
                  <span className="inline-block caption-uppercase text-gold mb-2">
                    Signature Collection
                  </span>
                )}
                <h3 className="font-headline text-xl md:text-2xl text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-on-dark-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-md">
                  {product.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
