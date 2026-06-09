"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { no: "01", title: "Discovery",   desc: "We ask the right questions to understand your goals, audience, and competitive landscape.",          days: "1–2 days" },
  { no: "02", title: "Strategy",    desc: "Architecture, content plan, and technical roadmap — every decision backed by data.",                  days: "2–3 days" },
  { no: "03", title: "Design",      desc: "Wireframes to high-fidelity mockups. You see exactly what you're getting before a line of code.",    days: "3–5 days" },
  { no: "04", title: "Development", desc: "Clean, performant code. Daily updates, staging previews, iterative feedback.",                       days: "5–10 days"},
  { no: "05", title: "Launch",      desc: "QA, performance pass, SEO, deployment. Full documentation and 30 days post-launch support.",         days: "1–2 days" },
];

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="py-28 border-t border-[rgba(235,206,181,0.06)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[10px] text-[rgba(235,206,181,0.35)] tracking-[0.22em] uppercase mb-4">How We Work</p>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black text-[#ebceb5] leading-[0.95] tracking-tight max-w-lg">
            A Process That<br />Always Delivers
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[rgba(235,206,181,0.06)] hidden md:block" />
          <motion.div
            style={{ height: lineH }}
            className="absolute left-[19px] top-0 w-px bg-[rgba(235,206,181,0.25)] origin-top hidden md:block"
          />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.no}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group flex gap-8 md:gap-12 py-8 border-b border-[rgba(235,206,181,0.06)] last:border-0"
              >
                {/* Node */}
                <div className="relative flex-shrink-0 hidden md:flex">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: i * 0.1 + 0.2 }}
                    className="w-10 h-10 rounded-full border border-[rgba(235,206,181,0.15)] bg-[#0e0c0a] flex items-center justify-center text-[10px] font-mono text-[rgba(235,206,181,0.4)] group-hover:border-[rgba(235,206,181,0.35)] group-hover:text-[#ebceb5] transition-all"
                  >
                    {step.no}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="text-[10px] text-[rgba(235,206,181,0.25)] tracking-[0.18em] uppercase font-mono mb-1 md:hidden">
                      {step.no}
                    </div>
                    <h3 className="text-[#ebceb5] font-bold text-xl mb-2 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[rgba(235,206,181,0.38)] text-sm leading-relaxed max-w-lg">{step.desc}</p>
                  </div>
                  <div className="flex-shrink-0 text-[11px] text-[rgba(235,206,181,0.3)] border border-[rgba(235,206,181,0.08)] px-4 py-1.5 rounded-full whitespace-nowrap">
                    {step.days}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
