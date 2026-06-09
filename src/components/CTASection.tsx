"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale   = useTransform(scrollYProgress, [0, 0.4, 0.9, 1], [0.94, 1, 1, 0.96]);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} className="bg-white py-[120px] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-8">
        <motion.div
          style={{ scale }}
          className="relative rounded-3xl overflow-hidden bg-[#343690] p-12 md:p-20 text-center"
        >
          {/* Subtle beige texture blobs */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#EBCEB5]/10 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#EBCEB5]/10 rounded-full blur-[60px] pointer-events-none" />

          {/* Rotating rings */}
          <div className="absolute top-8 right-8 w-20 h-20 opacity-[0.15]">
            <svg viewBox="0 0 80 80" className="w-full h-full animate-spin-slow">
              <circle cx="40" cy="40" r="36" fill="none" stroke="#EBCEB5" strokeWidth="1" strokeDasharray="6 10" />
            </svg>
          </div>
          <div className="absolute bottom-8 left-8 w-14 h-14 opacity-[0.15]">
            <svg viewBox="0 0 56 56" className="w-full h-full animate-spin-slow" style={{ animationDirection: "reverse" }}>
              <circle cx="28" cy="28" r="24" fill="none" stroke="#EBCEB5" strokeWidth="1" strokeDasharray="4 7" />
            </svg>
          </div>

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-[12px] font-medium text-white/70 mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#EBCEB5] animate-pulse" />
              Currently accepting new projects
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-black text-white leading-[1.0] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.2rem,5.5vw,5rem)" }}
            >
              Ready to Build<br />Something Exceptional?
            </motion.h2>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-[17px] max-w-md mx-auto mb-12 leading-[1.7]"
            >
              Let&apos;s turn your vision into a high-performing digital experience. Your next chapter starts here.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "#f0e6d8" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo("#contact")}
                className="group flex items-center gap-2.5 px-9 py-4 bg-[#EBCEB5] text-[#343690] font-bold rounded-xl text-[15px] transition-all duration-200"
              >
                <Calendar size={16} />
                Schedule a Call
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-9 py-4 border border-white/25 text-white font-medium rounded-xl text-[15px] transition-all duration-200 hover:border-white/40"
              >
                Get a Proposal
              </motion.button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/40 text-[13px]"
            >
              {["Free consultation", "No commitments", "24h response", "Fixed project pricing"].map(item => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="text-[#EBCEB5]">✓</span> {item}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
