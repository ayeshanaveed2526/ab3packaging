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
      "FDA-compliant containers, tubes, and boxes for food, beverages, and health products. Safe materials with barrier coatings and tamper-evident seals.",
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
      "Embossed cylindrical tubes, rigid boxes, and premium gift sets with metallic finishes, foil stamping, and soft-touch coatings for high-end brands.",
    tags: ["Gold Foil", "Metal Caps", "Embossing"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 11h16M11 6v5M17 6v5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Custom Retail Packaging",
    description:
      "Bespoke folding cartons, display boxes, and shelf-ready packaging tailored to your brand identity — from concept sketches to production runs.",
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
      "Elegant packaging for skincare, cosmetics, and wellness products — pump bottles, jars, sachets, and multi-component sets with premium unboxing.",
    tags: ["Pump Systems", "Glass Inserts", "Sustainable Options"],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-surface-soft">
      <div className="container-main">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="caption-uppercase mb-4 text-maroon">What We Do</p>
          <h2 className="display-lg mb-5">Packaging solutions for every industry</h2>
          <p className="text-body leading-relaxed">
            Whether you need food-safe containers or luxury perfume presentation,
            AB3 delivers precision manufacturing with finishes that make your
            product unforgettable.
          </p>
        </Reveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <article className="feature-card h-full flex flex-col group hover:shadow-soft transition-shadow duration-300">
                <div className="text-maroon mb-5">{service.icon}</div>
                <h3 className="font-headline text-xl text-ink mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-body flex-1 mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-canvas text-muted border border-hairline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
