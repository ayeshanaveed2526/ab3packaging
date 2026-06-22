"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "./Reveal";

const features = [
  {
    number: "01",
    title: "Precision Manufacturing",
    description:
      "State-of-the-art machinery ensures consistent quality across every production run, from prototype to bulk order.",
  },
  {
    number: "02",
    title: "Premium Finishes",
    description:
      "Gold foil stamping, embossing, soft-touch coatings, metallic caps, and UV spot varnishes that elevate your brand.",
  },
  {
    number: "03",
    title: "Sustainable Options",
    description:
      "Recyclable materials, soy-based inks, and compostable alternatives without compromising on luxury aesthetics.",
  },
  {
    number: "04",
    title: "End-to-End Service",
    description:
      "From design consultation and prototyping to full-scale production and logistics — one partner, complete solutions.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-charcoal text-on-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-maroon/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-maroon/5 blur-3xl" />
      </div>

      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="maroon-line" />
              <p className="caption-uppercase text-maroon-muted">About AB3</p>
            </div>
            <h2 className="display-lg text-on-dark mb-6">
              Where craftsmanship meets{" "}
              <span className="text-gradient-maroon">innovation</span>
            </h2>
            <p className="text-on-dark-soft leading-relaxed mb-6">
              AB3 Packaging has been a trusted partner for brands seeking packaging
              that tells a story. From food-grade safety standards to the ornate
              finishes of luxury perfume presentation, we combine technical
              expertise with an eye for elegance.
            </p>
            <p className="text-on-dark-soft leading-relaxed mb-8">
              Our facility operates under strict quality controls with ISO
              certification, ensuring every container meets the highest standards
              for your industry — whether that&apos;s FDA food safety or the
              tactile luxury your customers expect.
            </p>
            <div className="flex flex-wrap gap-3">
              {["ISO 9001", "FDA Compliant", "FSC Certified", "GMP Standards"].map(
                (cert, i) => (
                  <motion.span
                    key={cert}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(139, 35, 66, 0.5)" }}
                    className="text-sm font-semibold text-on-dark px-4 py-2 rounded-md border border-charcoal-soft bg-charcoal-elevated/50"
                  >
                    {cert}
                  </motion.span>
                )
              )}
            </div>
          </Reveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <StaggerItem key={feature.number}>
                <motion.article
                  whileHover={{ y: -4, borderColor: "rgba(139, 35, 66, 0.4)" }}
                  className="bg-charcoal-elevated rounded-xl p-6 h-full border border-charcoal-soft/50 transition-colors duration-300"
                >
                  <span className="font-headline text-3xl font-bold text-maroon-muted">
                    {feature.number}
                  </span>
                  <h3 className="font-headline text-lg font-semibold text-on-dark mt-3 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-on-dark-soft leading-relaxed">
                    {feature.description}
                  </p>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
