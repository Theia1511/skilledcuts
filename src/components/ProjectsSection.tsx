"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    no: "01",
    title: "NexaCommerce",
    category: "E-Commerce",
    result: "+340% conversion",
    tags: ["Next.js", "Stripe", "AI"],
    lines: [80, 55, 70, 40, 90, 60],
  },
  {
    no: "02",
    title: "Fintract",
    category: "FinTech SaaS",
    result: "$2.1M raised",
    tags: ["React", "D3.js", "Node"],
    lines: [65, 90, 45, 78, 55, 85],
  },
  {
    no: "03",
    title: "MediFlow",
    category: "Healthcare",
    result: "60% time saved",
    tags: ["TypeScript", "OpenAI"],
    lines: [70, 50, 88, 60, 75, 45],
  },
  {
    no: "04",
    title: "PropVault",
    category: "Real Estate",
    result: "+180% leads",
    tags: ["Three.js", "Maps API"],
    lines: [55, 82, 65, 92, 48, 70],
  },
];

/* Minimal abstract bar chart as project visual */
function BarMockup({ lines }: { lines: number[] }) {
  return (
    <div className="flex items-end gap-1.5 h-20 mt-auto">
      {lines.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: `${h}%` }}
          className="flex-1 rounded-sm bg-[rgba(235,206,181,0.15)] origin-bottom"
        />
      ))}
    </div>
  );
}

function ProjectCard({ p, i }: { p: typeof projects[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative p-7 rounded-2xl border border-[rgba(235,206,181,0.07)] bg-[#131109] hover:border-[rgba(235,206,181,0.14)] transition-all duration-300 flex flex-col min-h-[280px] cursor-pointer"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <span className="text-[10px] text-[rgba(235,206,181,0.25)] tracking-[0.2em] uppercase font-mono">
            {p.no} — {p.category}
          </span>
          <h3 className="text-[#ebceb5] font-bold text-xl mt-1">{p.title}</h3>
        </div>
        <div className="w-8 h-8 rounded-full border border-[rgba(235,206,181,0.1)] flex items-center justify-center text-[rgba(235,206,181,0.3)] group-hover:text-[#ebceb5] group-hover:border-[rgba(235,206,181,0.3)] transition-all duration-200">
          <ArrowUpRight size={14} />
        </div>
      </div>

      {/* Chart */}
      <BarMockup lines={p.lines} />

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-5 border-t border-[rgba(235,206,181,0.06)]">
        <div className="flex gap-2">
          {p.tags.map(t => (
            <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-[rgba(235,206,181,0.05)] border border-[rgba(235,206,181,0.07)] text-[rgba(235,206,181,0.35)]">
              {t}
            </span>
          ))}
        </div>
        <span className="text-[11px] text-[rgba(235,206,181,0.55)] font-medium">{p.result}</span>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="work" ref={ref} className="relative py-28 border-t border-[rgba(235,206,181,0.06)] overflow-hidden">
      {/* Parallax background text */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[20vw] font-black text-[rgba(235,206,181,0.02)] leading-none select-none pointer-events-none"
      >
        WORK
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <p className="text-[10px] text-[rgba(235,206,181,0.35)] tracking-[0.22em] uppercase mb-4">Our Work</p>
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black text-[#ebceb5] leading-[0.95] tracking-tight">
              Featured<br />Projects
            </h2>
          </div>
          <p className="text-[rgba(235,206,181,0.35)] max-w-xs text-sm leading-relaxed">
            Real results for real businesses. Each project is a story of strategy meeting execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
