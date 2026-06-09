"use client";

import { motion } from "framer-motion";
import { Layout, Layers, Code2, Palette, Bot, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Layout,
    no: "01",
    title: "Website Design",
    desc: "Pixel-perfect sites that captivate visitors and convert them into customers. We blend aesthetics with data-driven strategy.",
    tags: ["Framer", "Next.js", "CMS"],
  },
  {
    icon: Layers,
    no: "02",
    title: "Landing Pages",
    desc: "High-converting pages engineered for maximum ROI. Every element placed with purpose — from headline to CTA.",
    tags: ["A/B Testing", "Analytics", "CRO"],
  },
  {
    icon: Code2,
    no: "03",
    title: "Web Development",
    desc: "Scalable, performant applications on modern stacks. From MVPs to enterprise-grade platforms built to last.",
    tags: ["React", "Node.js", "APIs"],
  },
  {
    icon: Palette,
    no: "04",
    title: "UI/UX Design",
    desc: "Research-driven interfaces users love. Wireframes, prototypes, and complete design systems delivered.",
    tags: ["Figma", "Design Systems", "Research"],
  },
  {
    icon: Bot,
    no: "05",
    title: "AI Integrations",
    desc: "Embed GPT-4, Claude and custom models into your product — chatbots, recommendations, content generation.",
    tags: ["OpenAI", "Claude", "LangChain"],
  },
  {
    icon: Zap,
    no: "06",
    title: "Automation Systems",
    desc: "Eliminate repetitive work with smart workflows. Custom automations that save your team hours every week.",
    tags: ["Make.com", "Zapier", "N8N"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-[120px]">
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
            What We Do
          </div>
          <h2
            className="font-black text-[#111118] leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)" }}
          >
            Services Built<br />for Growth
          </h2>
          <p className="text-[17px] text-[#52525b] leading-[1.7]">
            End-to-end digital solutions that move the needle — from first impression to final conversion.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group relative p-8 rounded-2xl border border-[#f0f0f0] bg-white hover:border-[#EBCEB5] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                {/* Number */}
                <span className="text-[11px] text-[#c4c4c8] font-mono tracking-[0.18em] uppercase mb-5 block">
                  {s.no}
                </span>

                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-[#f7f0e8] text-[#343690] mb-5 group-hover:bg-[#343690] group-hover:text-white transition-all duration-300">
                  <Icon size={22} />
                </div>

                <h3 className="text-[17px] font-bold text-[#111118] mb-3">{s.title}</h3>
                <p className="text-[14px] text-[#52525b] leading-[1.75] mb-6">{s.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.tags.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] rounded-lg bg-[#f4f4f5] text-[#52525b] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#343690] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
