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
    <section id="contact" className="section-padding">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="maroon-line" />
              <p className="caption-uppercase text-maroon">Get In Touch</p>
            </div>
            <h2 className="display-lg mb-5">Let&apos;s create something exceptional</h2>
            <p className="text-body leading-relaxed mb-10">
              Ready to elevate your product packaging? Tell us about your project
              and our team will respond within 24 hours with a tailored proposal.
            </p>

            <div className="space-y-5">
              {[
                {
                  label: "Email",
                  value: "hello@ab3packaging.com",
                  href: "mailto:hello@ab3packaging.com",
                  icon: "M4 6h16v12H4V6zm0 0l8 6 8-6",
                },
                {
                  label: "Phone",
                  value: "+1 (555) 123-4567",
                  href: "tel:+15551234567",
                  icon: "M6 4h4l2 5-2.5 1.5a11 11 0 005 5L17 13l5 2v4a2 2 0 01-2 2A14 14 0 014 6z",
                },
                {
                  label: "Location",
                  value: "Industrial District, Your City",
                  href: undefined,
                  icon: "M14 6a4 4 0 00-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 00-4-4z",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex gap-4 p-4 rounded-xl border border-hairline bg-surface-card hover:border-maroon/20 hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-maroon-soft flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-maroon">
                      <path d={item.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted font-medium">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-ink font-semibold hover:text-maroon transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-ink font-semibold">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} direction="right">
            <motion.div
              whileHover={{ boxShadow: "0 20px 60px rgba(139, 35, 66, 0.08)" }}
              className="feature-card shadow-soft"
            >
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-maroon-soft flex items-center justify-center mx-auto mb-5 text-maroon"
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                      <path d="M7 14l5 5 9-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                  <h3 className="font-headline text-2xl font-bold text-ink mb-2">
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
                      <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">
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
                      <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
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
                    <label htmlFor="service" className="block text-sm font-semibold text-ink mb-2">
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
                    <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
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

                  <motion.button
                    type="submit"
                    disabled={formState === "submitting"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full sm:w-auto disabled:opacity-70"
                  >
                    {formState === "submitting" ? "Sending..." : "Request a Quote"}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
