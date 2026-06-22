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
    <section id="about" className="section-padding bg-charcoal text-on-dark">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="caption-uppercase mb-4 text-maroon-muted">About AB3</p>
            <h2 className="display-lg text-on-dark mb-6">
              Where craftsmanship meets{" "}
              <span className="text-maroon-muted italic">innovation</span>
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
            <div className="gold-line w-24 mb-8" />
            <div className="flex flex-wrap gap-6">
              {["ISO 9001", "FDA Compliant", "FSC Certified", "GMP Standards"].map(
                (cert) => (
                  <span
                    key={cert}
                    className="text-sm font-medium text-on-dark px-4 py-2 rounded-md border border-charcoal-soft"
                  >
                    {cert}
                  </span>
                )
              )}
            </div>
          </Reveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <StaggerItem key={feature.number}>
                <article className="bg-charcoal-elevated rounded-lg p-6 h-full border border-charcoal-soft/50 hover:border-maroon/30 transition-colors duration-300">
                  <span className="font-headline text-3xl text-maroon-muted">
                    {feature.number}
                  </span>
                  <h3 className="font-headline text-lg text-on-dark mt-3 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-on-dark-soft leading-relaxed">
                    {feature.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
