"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Layers,
  Code2,
  Palette,
  Bot,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Website Design",
    description:
      "Pixel-perfect websites that captivate visitors and convert them into customers. We blend aesthetics with strategy.",
    tags: ["Framer", "Next.js", "CMS"],
    accent: "from-violet-500 to-purple-600",
    glow: "rgba(124,58,237,0.15)",
  },
  {
    icon: Layers,
    title: "Landing Pages",
    description:
      "High-converting landing pages engineered for maximum ROI. Every element placed with purpose and precision.",
    tags: ["A/B Testing", "Analytics", "CRO"],
    accent: "from-purple-500 to-violet-600",
    glow: "rgba(147,51,234,0.15)",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Scalable, performant applications built on modern tech stacks. From MVPs to enterprise-grade platforms.",
    tags: ["React", "Node.js", "APIs"],
    accent: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Intuitive interfaces that users love. Deep research, wireframing, prototyping, and final design systems.",
    tags: ["Figma", "Design Systems", "Prototypes"],
    accent: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.15)",
  },
  {
    icon: Bot,
    title: "AI Integrations",
    description:
      "Embed powerful AI capabilities into your product — chatbots, content generation, smart recommendations.",
    tags: ["OpenAI", "Claude", "LangChain"],
    accent: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description:
      "Eliminate repetitive work with smart automation. Workflows, integrations, and custom bots that save hours daily.",
    tags: ["Zapier", "Make.com", "N8N"],
    accent: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.15)",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
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
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            Services Built for
            <span className="gradient-text"> Growth</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            End-to-end digital solutions that move the needle — from first impression to final conversion.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl glass border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer overflow-hidden"
                style={{
                  background: `radial-gradient(circle at top right, ${service.glow}, transparent 60%)`,
                }}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${service.glow}, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div className={`relative inline-flex p-3 rounded-xl bg-gradient-to-br ${service.accent} mb-5`}>
                  <Icon size={22} className="text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                    <ArrowUpRight
                      size={18}
                      className="text-white/20 group-hover:text-white/60 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200"
                    />
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-white/40 border border-white/8"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
