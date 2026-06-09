"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "CEO",
    company: "NexaCommerce",
    text: "SkilledCuts completely transformed our online presence. Our conversion rate jumped 340% in the first 3 months. The attention to detail and speed of delivery was unlike anything we've experienced from an agency.",
    rating: 5,
  },
  {
    initials: "MR",
    name: "Marcus Reid",
    role: "Founder",
    company: "Fintract",
    text: "They delivered a FinTech dashboard beyond our imagination — stunning UI, flawless performance, seamless AI integrations. We raised $2.1M shortly after launch. Worth every penny.",
    rating: 5,
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "HealthBridge",
    text: "Our landing page was underperforming badly. SkilledCuts rebuilt it with a clear conversion strategy and our lead generation tripled. We saw ROI in the first week. That's the SkilledCuts difference.",
    rating: 5,
  },
  {
    initials: "JW",
    name: "James Whitfield",
    role: "CTO",
    company: "PropVault",
    text: "Honestly the best agency we've ever worked with. Communication was transparent, timelines were hit, and the quality exceeded every expectation. The automation systems save us 20+ hours a week.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const next = useCallback(() => { setDir(1);  setIdx(i => (i + 1) % testimonials.length); }, []);
  const prev = useCallback(() => { setDir(-1); setIdx(i => (i - 1 + testimonials.length) % testimonials.length); }, []);

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[idx];

  return (
    <section id="testimonials" className="bg-white py-[120px]">
      <div className="max-w-[1320px] mx-auto px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f7f0e8] border border-[#EBCEB5] rounded-full text-[12px] font-medium text-[#343690] mb-6">
            Client Testimonials
          </div>
          <h2
            className="font-black text-[#111118] leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)" }}
          >
            What Our Clients<br />Say About Us
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="max-w-[860px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              initial={{ opacity: 0, x: dir * 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -48 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 md:p-14 rounded-2xl bg-[#fafafa] border border-[#f0f0f0]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#EBCEB5] text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-[#111118] font-medium leading-[1.75] mb-10"
                style={{ fontSize: "clamp(1.05rem,2vw,1.3rem)" }}
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#343690] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-[#111118]">{t.name}</div>
                  <div className="text-[13px] text-[#52525b]">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-8">
            <div className="flex gap-3">
              {[{ fn: prev, label: "Previous" }, { fn: next, label: "Next" }].map(({ fn, label }, i) => (
                <motion.button
                  key={label}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={fn}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-[#e4e4e7] bg-white flex items-center justify-center text-[#52525b] hover:text-[#343690] hover:border-[#343690] transition-all duration-200"
                >
                  {i === 0 ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </motion.button>
              ))}
            </div>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === idx ? "w-6 h-2 bg-[#343690]" : "w-2 h-2 bg-[#e4e4e7] hover:bg-[#EBCEB5]"
                  }`}
                />
              ))}
            </div>

            <span className="ml-auto text-[13px] text-[#a1a1aa]">
              {idx + 1} / {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
