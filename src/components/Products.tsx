"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./Reveal";

const categories = [
  { id: "all", label: "All Products" },
  { id: "perfume", label: "Perfume & Luxury" },
  { id: "food", label: "Food-Grade" },
  { id: "cosmetic", label: "Cosmetics" },
  { id: "retail", label: "Gift Tubes" },
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
    description: "FDA-compliant round cardboard tubes with food-safe inner linings for dry goods and snacks.",
    image: "/product-food.png",
  },
  {
    id: 3,
    name: "Premium Gift Tube Collection",
    category: "retail",
    description: "Rigid cylindrical tubes with velvet-lined caps, gold foil bands, and custom brand embossing.",
    image: "/product-gift-tubes.png",
  },
  {
    id: 4,
    name: "Cosmetic Tube Packaging",
    category: "cosmetic",
    description: "Round soft-touch matte tubes and jars with maroon accent caps for skincare lines.",
    image: "/product-cosmetic.png",
  },
  {
    id: 5,
    name: "Seraphina Perfume Cylinder",
    category: "perfume",
    description: "Custom round perfume tube with glass bottle insert and ornate cylindrical exterior.",
    image: "/product-perfume-cylinder.png",
  },
  {
    id: 6,
    name: "Sustainable Food Tubes",
    category: "food",
    description: "Compostable round paper tubes and containers with barrier coating technology.",
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
    <section id="products" className="section-padding bg-surface-soft/90">
      <div className="container-main">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="maroon-line" />
              <p className="caption-uppercase text-maroon">Our Work</p>
            </div>
            <h2 className="display-lg mb-4">Round packaging portfolio</h2>
            <p className="text-body leading-relaxed">
              Explore our range of luxury tubes, food-grade cylinders, and bespoke
              round packaging crafted for brands worldwide.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-sm font-semibold rounded-md transition-colors duration-200 ${
                  activeCategory === cat.id
                    ? "bg-maroon text-white shadow-maroon"
                    : "bg-surface-card text-muted border border-hairline hover:border-maroon-muted hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((product) => (
            <article
              key={product.id}
              className={`group relative overflow-hidden rounded-xl border border-hairline bg-surface-card shadow-soft transition-transform duration-300 hover:-translate-y-1 ${
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
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={
                    product.featured
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                {product.featured && (
                  <span className="inline-block caption-uppercase text-maroon-muted mb-2 bg-white/10 px-3 py-1 rounded-full">
                    Signature Collection
                  </span>
                )}
                <h3 className="font-headline text-xl md:text-2xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-on-dark-soft max-w-md translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
