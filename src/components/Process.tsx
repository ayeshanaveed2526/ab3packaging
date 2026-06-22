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
    <section id="process" className="section-padding">
      <div className="container-main">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="caption-uppercase mb-4 text-maroon">How It Works</p>
          <h2 className="display-lg mb-5">From concept to delivery</h2>
          <p className="text-body leading-relaxed">
            A streamlined process designed to bring your packaging vision to life
            with clarity and confidence at every step.
          </p>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-hairline" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.1}>
                <article className="relative text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-maroon text-white font-headline text-lg mb-5 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="font-headline text-xl text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
