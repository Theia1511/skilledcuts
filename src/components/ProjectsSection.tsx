"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    no: "01",
    title: "NexaCommerce",
    category: "E-Commerce Platform",
    result: "+340% conversion rate",
    tags: ["Next.js", "Stripe", "AI"],
    desc: "Full e-commerce platform with AI-powered product recommendations and a seamless checkout flow.",
    bars: [60, 45, 78, 55, 90, 65, 82, 48],
    accent: "#343690",
  },
  {
    no: "02",
    title: "Fintract",
    category: "FinTech SaaS",
    result: "$2.1M raised post-launch",
    tags: ["React", "D3.js", "Node.js"],
    desc: "Financial analytics dashboard with real-time data visualisation and automated reporting systems.",
    bars: [72, 88, 50, 94, 66, 78, 55, 88],
    accent: "#343690",
  },
  {
    no: "03",
    title: "MediFlow",
    category: "Healthcare Tech",
    result: "60% admin time saved",
    tags: ["TypeScript", "OpenAI", "Prisma"],
    desc: "Patient management system with AI-powered scheduling and full telemedicine integration.",
    bars: [55, 80, 68, 45, 88, 72, 60, 76],
    accent: "#343690",
  },
  {
    no: "04",
    title: "PropVault",
    category: "Real Estate",
    result: "+180% qualified leads",
    tags: ["Three.js", "Next.js", "Maps"],
    desc: "Premium property listing platform with 3D virtual tours and intelligent search functionality.",
    bars: [80, 58, 90, 70, 48, 84, 62, 92],
    accent: "#343690",
  },
];

function MiniChart({ bars }: { bars: number[] }) {
  return (
    <div className="flex items-end gap-1.5 h-16">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: `${h}%` }}
          className="flex-1 rounded-sm bg-[#343690]/10 origin-bottom"
        />
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="work" className="bg-[#fafafa] py-[120px] border-y border-[#f0f0f0]">
      <div className="max-w-[1320px] mx-auto px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f7f0e8] border border-[#EBCEB5] rounded-full text-[12px] font-medium text-[#343690] mb-6">
              Featured Work
            </div>
            <h2
              className="font-black text-[#111118] leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)" }}
            >
              Projects That<br />Deliver Results
            </h2>
          </div>
          <p className="text-[15px] text-[#52525b] max-w-[340px] leading-[1.7]">
            Real results for real businesses. Each project is a case study in strategy meeting execution.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl border border-[#f0f0f0] hover:border-[#EBCEB5] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Chart area */}
              <div className="px-8 pt-8 pb-6 bg-[#fafafa] border-b border-[#f0f0f0]">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-[11px] text-[#a1a1aa] font-mono tracking-[0.16em] uppercase">
                      {p.no} — {p.category}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-xl border border-[#f0f0f0] bg-white flex items-center justify-center text-[#c4c4c8] group-hover:text-[#343690] group-hover:border-[#EBCEB5] transition-all duration-200">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
                <MiniChart bars={p.bars} />
              </div>

              {/* Info area */}
              <div className="p-8">
                <h3 className="text-[20px] font-bold text-[#111118] mb-2.5">{p.title}</h3>
                <p className="text-[14px] text-[#52525b] leading-[1.75] mb-6">{p.desc}</p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 text-[11px] rounded-lg bg-[#f4f4f5] text-[#52525b] font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[12px] font-semibold text-[#343690] bg-[#f7f0e8] px-3 py-1.5 rounded-lg border border-[#EBCEB5]/60">
                    {p.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#f7f0e8" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#e4e4e7] text-[#111118] font-medium rounded-xl text-[14px] transition-all hover:border-[#EBCEB5]"
          >
            View All Projects <ArrowUpRight size={15} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
