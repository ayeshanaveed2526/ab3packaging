import { Reveal } from "./Reveal";

export function CTABand() {
  return (
    <section className="section-padding pt-0">
      <div className="container-main">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg bg-maroon px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-white" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-white" />
            </div>

            <p className="caption-uppercase text-white/70 mb-4 relative">Ready to Begin?</p>
            <h2 className="font-headline text-3xl md:text-4xl text-white mb-5 relative tracking-tight">
              Transform your product with packaging that sells
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8 relative leading-relaxed">
              Join hundreds of brands who trust AB3 for packaging that combines
              safety, beauty, and brand impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-11 px-6 bg-canvas text-maroon text-sm font-medium rounded-md"
              >
                Get Started Today
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center h-11 px-6 border border-white/30 text-white text-sm font-medium rounded-md"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
