"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const scroll = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} className="py-24 border-t border-[rgba(235,206,181,0.06)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          style={{ scale, opacity }}
          className="relative rounded-3xl border border-[rgba(235,206,181,0.1)] bg-[#131109] overflow-hidden p-12 md:p-20 text-center"
        >
          {/* Big watermark text */}
          <div className="absolute inset-0 flex items-center justify-center text-[clamp(5rem,18vw,14rem)] font-black text-[rgba(235,206,181,0.015)] leading-none select-none pointer-events-none">
            LET&apos;S GO
          </div>

          {/* Rotating ring */}
          <div className="absolute top-6 right-6 w-16 h-16 opacity-20">
            <svg viewBox="0 0 64 64" className="w-full h-full animate-spin-slow">
              <circle cx="32" cy="32" r="28" fill="none" stroke="#ebceb5" strokeWidth="0.5" strokeDasharray="4 8" />
            </svg>
          </div>
          <div className="absolute bottom-6 left-6 w-12 h-12 opacity-20">
            <svg viewBox="0 0 48 48" className="w-full h-full animate-spin-slow" style={{ animationDirection: "reverse" }}>
              <circle cx="24" cy="24" r="20" fill="none" stroke="#ebceb5" strokeWidth="0.5" strokeDasharray="3 6" />
            </svg>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-8 text-[11px] text-[rgba(235,206,181,0.4)] tracking-[0.2em] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ebceb5] opacity-60 animate-pulse" />
              Currently accepting new projects
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.4rem,6vw,5.5rem)] font-black text-[#ebceb5] leading-[0.92] tracking-tight mb-6"
            >
              Ready to Build<br />Something Exceptional?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[rgba(235,206,181,0.45)] text-lg max-w-md mx-auto mb-12"
            >
              Let&apos;s turn your vision into a high-performing digital experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scroll("#contact")}
                className="group flex items-center gap-2 px-9 py-4 bg-[#ebceb5] text-[#0e0c0a] font-bold rounded-full text-sm transition-all"
              >
                Schedule a Call
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scroll("#contact")}
                className="flex items-center gap-2 px-9 py-4 rounded-full border border-[rgba(235,206,181,0.15)] text-[rgba(235,206,181,0.6)] text-sm hover:text-[#ebceb5] hover:border-[rgba(235,206,181,0.3)] transition-all"
              >
                Get a Proposal
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-10 text-[rgba(235,206,181,0.25)] text-xs"
            >
              {["Free consultation","No commitments","24h response","Fixed pricing"].map(t => (
                <span key={t}>✓ {t}</span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
