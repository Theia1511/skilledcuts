"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most projects are completed within 2–4 weeks depending on scope and complexity. Landing pages can launch in as little as 5 business days. We provide a detailed timeline during the strategy phase before any work begins.",
  },
  {
    q: "What's included in your web development package?",
    a: "Every project includes design, development, mobile optimization, SEO setup, performance optimization, and 30 days post-launch support. We also provide thorough documentation so you can manage your site with confidence.",
  },
  {
    q: "Do you work with clients outside your country?",
    a: "Absolutely. We work with clients globally — across the US, Europe, Middle East, and Asia. Our async communication process ensures smooth collaboration across time zones.",
  },
  {
    q: "What technologies do you use?",
    a: "We primarily build with Next.js, React, TypeScript, and Tailwind CSS for the front end, with Node.js, Supabase, or Prisma for backends. For AI integrations we use OpenAI, Anthropic Claude, and LangChain depending on requirements.",
  },
  {
    q: "How does the pricing work?",
    a: "We offer project-based pricing rather than hourly billing. After your discovery call, we provide a fixed quote with no hidden fees. Packages start from $1,500 for landing pages and $4,000+ for full website builds.",
  },
  {
    q: "Can you help with ongoing maintenance and updates?",
    a: "Yes — we offer retainer packages for ongoing maintenance, content updates, feature additions, and growth consulting. Many clients stay with us long-term as their dedicated digital partner.",
  },
  {
    q: "What makes SkilledCuts different from other agencies?",
    a: "We combine premium design with genuine technical depth. Unlike generalist agencies, we specialize in high-converting digital experiences — meaning every design decision is made with growth in mind, not just aesthetics.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs tracking-widest uppercase mb-4">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Common
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="text-white/40 text-lg">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? "bg-[#111111] border-violet-500/20"
                  : "bg-[#0D0D0D] border-white/5 hover:border-white/10"
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className={`font-semibold text-base ${open === i ? "text-white" : "text-white/70"}`}>
                  {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    open === i ? "bg-violet-500 text-white" : "bg-white/5 text-white/40"
                  }`}
                >
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <p className="px-6 pb-6 text-white/50 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
