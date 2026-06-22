import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "Food-Grade Packaging", href: "#services" },
    { label: "Luxury & Perfume", href: "#services" },
    { label: "Custom Retail", href: "#services" },
    { label: "Cosmetics", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Request a Quote", href: "#contact" },
    { label: "Certifications", href: "#about" },
    { label: "Sustainability", href: "#about" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-on-dark-soft pt-16 pb-8">
      <div className="container-main">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="relative h-12 w-12">
                <Image
                  src="/logo.jpeg"
                  alt="AB3 Packaging"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-headline text-xl text-on-dark">
                  AB3 Packaging
                </span>
                <span className="caption-uppercase text-2xs">
                  Premium Solutions
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Crafting elegant, food-grade and luxury packaging solutions for
              brands that refuse to compromise on quality.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-medium text-on-dark mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-on-dark transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gold-line mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} AB3 Packaging. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-on-dark transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-on-dark transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
