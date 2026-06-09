"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "CEO, NexaCommerce",
    text: "SkilledCuts rebuilt our entire online presence. Conversion rate up 340% in the first 3 months. The quality is unlike anything we've had from an agency.",
    rating: 5,
  },
  {
    initials: "MR",
    name: "Marcus Reid",
    role: "Founder, Fintract",
    text: "They delivered a FinTech dashboard beyond our imagination — stunning UI, flawless performance, seamless AI. We raised $2.1M shortly after launch.",
    rating: 5,
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Marketing Director, HealthBridge",
    text: "Our landing page was underperforming badly. SkilledCuts rebuilt it with a sharp conversion strategy. Lead generation tripled. ROI in week one.",
    rating: 5,
  },
  {
    initials: "JW",
    name: "James Whitfield",
    role: "CTO, PropVault",
    text: "Best agency we've ever worked with — period. Timelines hit, quality exceeded expectations. The automation they built saves us 20+ hours every week.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx]   = useState(0);
  const [dir, setDir]   = useState(1);

  const next = useCallback(() => { setDir(1);  setIdx(i => (i + 1) % testimonials.length); }, []);
  const prev = useCallback(() => { setDir(-1); setIdx(i => (i - 1 + testimonials.length) % testimonials.length); }, []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[idx];

  return (
    <section id="testimonials" className="py-28 border-t border-[rgba(235,206,181,0.06)] bg-[#131109]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[10px] text-[rgba(235,206,181,0.35)] tracking-[0.22em] uppercase mb-4">Testimonials</p>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black text-[#ebceb5] leading-[0.95] tracking-tight">
            What Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
          {/* Avatar side */}
          <AnimatePresence mode="wait">
            <motion.div
              key={idx + "avatar"}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-start gap-4"
            >
              <div className="w-20 h-20 rounded-2xl border border-[rgba(235,206,181,0.12)] bg-[rgba(235,206,181,0.04)] flex items-center justify-center text-[#ebceb5] font-black text-xl">
                {t.initials}
              </div>
              <div>
                <div className="text-[#ebceb5] font-semibold">{t.name}</div>
                <div className="text-[rgba(235,206,181,0.4)] text-sm">{t.role}</div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#ebceb5] text-xs opacity-70">★</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quote side */}
          <div>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={idx}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(1.1rem,2.5vw,1.5rem)] text-[rgba(235,206,181,0.75)] font-light leading-relaxed mb-10"
              >
                &ldquo;{t.text}&rdquo;
              </motion.blockquote>
            </AnimatePresence>

            <div className="flex items-center gap-6">
              {/* Arrows */}
              <div className="flex gap-3">
                {[prev, next].map((fn, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={fn}
                    className="w-10 h-10 rounded-full border border-[rgba(235,206,181,0.12)] flex items-center justify-center text-[rgba(235,206,181,0.4)] hover:text-[#ebceb5] hover:border-[rgba(235,206,181,0.3)] transition-all"
                    aria-label={i === 0 ? "Previous" : "Next"}
                  >
                    {i === 0 ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
                  </motion.button>
                ))}
              </div>

              {/* Progress dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                    className={`transition-all duration-300 rounded-full ${
                      i === idx ? "w-6 h-1.5 bg-[#ebceb5]" : "w-1.5 h-1.5 bg-[rgba(235,206,181,0.2)]"
                    }`}
                    aria-label={`Go to ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
