"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How long does a project take?",               a: "Most websites launch in 2–4 weeks. Landing pages in as little as 5 business days. We provide a precise timeline after the discovery call, before any work begins." },
  { q: "What's your pricing structure?",              a: "We use fixed project pricing — no hourly billing, no surprises. Landing pages start from $1,500. Full websites from $4,000. Complex builds get a custom quote." },
  { q: "Do you work with international clients?",     a: "Yes. We work with clients across the US, Europe, Middle East, and Asia. Our async communication process makes timezone differences completely seamless." },
  { q: "What tech stack do you use?",                 a: "Next.js, React, TypeScript, and Tailwind CSS on the front end. Node.js, Supabase, or Prisma for backends. OpenAI, Claude, and LangChain for AI integrations." },
  { q: "Do you offer ongoing support after launch?",  a: "Every project includes 30 days of post-launch support. We also offer retainer packages for updates, feature additions, and growth consulting." },
  { q: "What makes SkilledCuts different?",           a: "We combine senior-level design with genuine technical depth — and we obsess over conversions, not just aesthetics. Every decision we make is designed to grow your business." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#fafafa] py-[120px] border-y border-[#f0f0f0]">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 xl:gap-24 items-start">

          {/* Left — sticky */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f7f0e8] border border-[#EBCEB5] rounded-full text-[12px] font-medium text-[#343690] mb-6">
              FAQ
            </div>
            <h2
              className="font-black text-[#111118] leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)" }}
            >
              Common<br />Questions
            </h2>
            <p className="text-[16px] text-[#52525b] leading-[1.7] mb-8">
              Can&apos;t find what you&apos;re looking for? Just reach out directly.
            </p>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#272b72" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-[#343690] text-white text-sm font-semibold rounded-xl transition-all duration-200"
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Right — accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  open === i
                    ? "bg-white border-[#EBCEB5] shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                    : "bg-white border-[#f0f0f0] hover:border-[#e4e4e7]"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 px-7 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className={`text-[15px] font-semibold transition-colors duration-200 ${open === i ? "text-[#343690]" : "text-[#111118]"}`}>
                    {faq.q}
                  </span>
                  <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    open === i ? "bg-[#343690] text-white" : "bg-[#f4f4f5] text-[#52525b]"
                  }`}>
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-6 text-[14px] text-[#52525b] leading-[1.8]">
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
