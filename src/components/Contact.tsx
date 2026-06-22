"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Reveal } from "./Reveal";

type FormState = "idle" | "submitting" | "success";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1200);
  }

  return (
    <section id="contact" className="section-padding bg-surface-soft">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <p className="caption-uppercase mb-4 text-maroon">Get In Touch</p>
            <h2 className="display-lg mb-5">Let&apos;s create something exceptional</h2>
            <p className="text-body leading-relaxed mb-10">
              Ready to elevate your product packaging? Tell us about your project
              and our team will respond within 24 hours with a tailored proposal.
            </p>

            <div className="space-y-6">
              {[
                {
                  label: "Email",
                  value: "hello@ab3packaging.com",
                  href: "mailto:hello@ab3packaging.com",
                },
                {
                  label: "Phone",
                  value: "+1 (555) 123-4567",
                  href: "tel:+15551234567",
                },
                {
                  label: "Location",
                  value: "Industrial District, Your City",
                  href: undefined,
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-md bg-maroon-soft flex items-center justify-center shrink-0">
                    <span className="text-maroon text-sm font-medium">
                      {item.label[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-muted">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-ink font-medium hover:text-maroon transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-ink font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} direction="right">
            <div className="feature-card">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-maroon-soft flex items-center justify-center mx-auto mb-5 text-maroon">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                      <path d="M7 14l5 5 9-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-headline text-2xl text-ink mb-2">
                    Message Sent
                  </h3>
                  <p className="text-body">
                    Thank you! Our team will be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Smith"
                        className="w-full h-11 px-4 rounded-md border border-hairline bg-canvas text-ink text-sm placeholder:text-muted-soft focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/15 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full h-11 px-4 rounded-md border border-hairline bg-canvas text-ink text-sm placeholder:text-muted-soft focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/15 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-ink mb-2">
                      Packaging Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full h-11 px-4 rounded-md border border-hairline bg-canvas text-ink text-sm focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/15 transition-all"
                    >
                      <option value="">Select a category</option>
                      <option value="food">Food-Grade Packaging</option>
                      <option value="perfume">Perfume & Luxury</option>
                      <option value="cosmetic">Cosmetics & Personal Care</option>
                      <option value="retail">Custom Retail Boxes</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your product, quantities, and timeline..."
                      className="w-full px-4 py-3 rounded-md border border-hairline bg-canvas text-ink text-sm placeholder:text-muted-soft focus:outline-none focus:border-maroon focus:ring-2 focus:ring-maroon/15 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="btn-primary w-full sm:w-auto disabled:opacity-70"
                  >
                    {formState === "submitting" ? "Sending..." : "Request a Quote"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
