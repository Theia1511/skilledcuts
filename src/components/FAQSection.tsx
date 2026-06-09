"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How long does a project take?", a: "Most websites launch in 2–4 weeks. Landing pages in as little as 5 business days. We provide a precise timeline after discovery." },
  { q: "What's your pricing structure?", a: "Fixed project pricing — no hourly billing, no surprises. Landing pages from $1,500. Full websites from $4,000. Custom quotes for complex builds." },
  { q: "Do you work with international clients?", a: "Yes. We work with clients across the US, Europe, Middle East, and Asia. Our async process makes timezone differences seamless." },
  { q: "What tech stack do you use?", a: "Next.js, React, TypeScript, Tailwind CSS on the front end. Node.js, Supabase, or Prisma for backends. OpenAI, Claude, LangChain for AI integrations." },
  { q: "Do you offer post-launch support?", a: "Every project includes 30 days of support. We also offer retainer packages for ongoing updates, feature work, and growth consulting." },
  { q: "What makes you different from other agencies?", a: "We combine senior-level design with genuine technical depth — and we obsess over conversions, not just aesthetics. Every decision is made to grow your business." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 border-t border-[rgba(235,206,181,0.06)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left sticky */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-[10px] text-[rgba(235,206,181,0.35)] tracking-[0.22em] uppercase mb-4">FAQ</p>
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black text-[#ebceb5] leading-[0.95] tracking-tight mb-6">
              Common<br />Questions
            </h2>
            <p className="text-[rgba(235,206,181,0.38)] text-sm leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Just send us a message.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 text-sm text-[rgba(235,206,181,0.5)] hover:text-[#ebceb5] underline underline-offset-4 transition-colors"
            >
              Contact us →
            </motion.button>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-0 divide-y divide-[rgba(235,206,181,0.06)]">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  aria-expanded={open === i}
                >
                  <span className={`text-base font-medium transition-colors duration-200 ${open === i ? "text-[#ebceb5]" : "text-[rgba(235,206,181,0.6)] group-hover:text-[#ebceb5]"}`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 w-6 h-6 rounded-full border border-[rgba(235,206,181,0.12)] flex items-center justify-center text-[rgba(235,206,181,0.4)]"
                  >
                    <Plus size={13} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[rgba(235,206,181,0.45)] text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
