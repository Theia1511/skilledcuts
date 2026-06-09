"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { no: "01", icon: Search,     title: "Discovery",    desc: "We ask the right questions to understand your goals, audience, and competitive landscape.",        days: "1–2 days",  deliverable: "Project Brief"     },
  { no: "02", icon: Lightbulb,  title: "Strategy",     desc: "Architecture, content plan, and technical roadmap — every decision backed by data and research.",  days: "2–3 days",  deliverable: "Strategy Doc"      },
  { no: "03", icon: PenTool,    title: "Design",       desc: "Wireframes to high-fidelity mockups. You see exactly what you're getting before a single line of code.", days: "3–5 days",  deliverable: "Design System"  },
  { no: "04", icon: Code2,      title: "Development",  desc: "Clean, performant code. Daily updates, staging previews and iterative feedback loops.",            days: "5–10 days", deliverable: "Staging Build"     },
  { no: "05", icon: Rocket,     title: "Launch",       desc: "QA, performance pass, SEO, deployment. Full documentation and 30 days post-launch support.",       days: "1–2 days",  deliverable: "Live Product"      },
];

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="bg-[#fafafa] py-[120px] border-y border-[#f0f0f0]">
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
            How We Work
          </div>
          <h2
            className="font-black text-[#111118] leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)" }}
          >
            A Process That<br />Always Delivers
          </h2>
          <p className="text-[17px] text-[#52525b] leading-[1.7]">
            From brief to launch — a structured, transparent workflow that keeps you in control at every stage.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-[900px]">
          {/* Vertical track */}
          <div className="absolute left-[23px] top-6 bottom-6 w-px bg-[#e4e4e7] hidden md:block" />
          {/* Animated fill */}
          <motion.div
            style={{ height: lineH }}
            className="absolute left-[23px] top-6 w-px bg-[#343690] origin-top hidden md:block"
          />

          <div className="space-y-2">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.no}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.09 }}
                  className="group flex gap-8 md:gap-12 items-start py-8 px-0"
                >
                  {/* Node */}
                  <div className="relative flex-shrink-0 hidden md:block mt-1">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 280, delay: i * 0.1 + 0.25 }}
                      className="w-[46px] h-[46px] rounded-full bg-white border-2 border-[#e4e4e7] group-hover:border-[#343690] flex items-center justify-center text-[#c4c4c8] group-hover:text-[#343690] transition-all duration-300 shadow-sm"
                    >
                      <Icon size={18} />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 p-7 rounded-2xl bg-white border border-[#f0f0f0] group-hover:border-[#EBCEB5] group-hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-300">
                    <div className="flex items-start justify-between gap-6 mb-4">
                      <div>
                        <span className="text-[11px] text-[#c4c4c8] font-mono tracking-[0.18em] uppercase block mb-1.5">
                          Step {step.no}
                        </span>
                        <h3 className="text-[18px] font-bold text-[#111118]">{step.title}</h3>
                      </div>
                      <div className="flex gap-2 flex-shrink-0 flex-wrap justify-end">
                        <span className="text-[11px] text-[#52525b] bg-[#f4f4f5] px-3 py-1.5 rounded-lg font-medium whitespace-nowrap">
                          ⏱ {step.days}
                        </span>
                        <span className="text-[11px] text-[#343690] bg-[#f7f0e8] border border-[#EBCEB5]/60 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap">
                          {step.deliverable}
                        </span>
                      </div>
                    </div>
                    <p className="text-[14px] text-[#52525b] leading-[1.75]">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
