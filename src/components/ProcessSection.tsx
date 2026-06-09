"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "Deep dive into your business, goals, audience, and competition. We ask the questions others miss to build a complete picture.",
    duration: "1-2 days",
    deliverable: "Project Brief",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Define the architecture, content strategy, and technical roadmap. Every decision backed by data and aligned with your goals.",
    duration: "2-3 days",
    deliverable: "Strategy Document",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design",
    description:
      "Wireframes, high-fidelity mockups, and interactive prototypes. You see exactly what you're getting before a single line of code.",
    duration: "3-5 days",
    deliverable: "Design System",
  },
  {
    number: "04",
    icon: Code2,
    title: "Development",
    description:
      "Clean, performant code built to scale. Daily updates, staging previews, and iterative feedback ensure nothing is lost in translation.",
    duration: "5-10 days",
    deliverable: "Staging Build",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description:
      "Final QA, performance optimization, SEO setup, and deployment. We hand off with thorough documentation and ongoing support.",
    duration: "1-2 days",
    deliverable: "Live Product",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs tracking-widest uppercase mb-4">
            How We Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            A Process That
            <span className="gradient-text"> Delivers</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg">
            From initial brief to final launch — a structured, transparent process that keeps you in control at every stage.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-[26px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="inline-block w-full md:max-w-md p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-violet-500/20 transition-all duration-300 text-left"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-violet-500/10">
                          <Icon size={18} className="text-violet-400" />
                        </div>
                        <span className="text-violet-500/60 font-mono text-sm font-bold">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-white/30 bg-white/5 px-2.5 py-1 rounded-full border border-white/8">
                          ⏱ {step.duration}
                        </span>
                        <span className="text-xs text-cyan-400/70 bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-400/15">
                          📄 {step.deliverable}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center node */}
                  <div className="relative flex-shrink-0 z-10 hidden md:flex">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-violet-700 border-4 border-[#0A0A0A] flex items-center justify-center text-white font-black text-xs"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
