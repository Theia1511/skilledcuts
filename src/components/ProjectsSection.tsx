"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "NexaCommerce",
    category: "E-Commerce",
    description: "Full e-commerce platform with AI-powered recommendations and seamless checkout.",
    result: "+340% conversion rate",
    tags: ["Next.js", "Stripe", "AI"],
    gradient: "from-violet-900/50 to-purple-900/30",
    accent: "#8B5CF6",
    mockup: "E-Commerce Dashboard",
  },
  {
    title: "Fintract",
    category: "FinTech",
    description: "Financial analytics SaaS with real-time data visualization and automated reporting.",
    result: "$2.1M raised post-launch",
    tags: ["React", "D3.js", "Node"],
    gradient: "from-cyan-900/50 to-blue-900/30",
    accent: "#06B6D4",
    mockup: "Finance Analytics",
  },
  {
    title: "MediFlow",
    category: "Healthcare",
    description: "Patient management system with AI scheduling and telemedicine integrations.",
    result: "60% admin time saved",
    tags: ["TypeScript", "OpenAI", "Prisma"],
    gradient: "from-emerald-900/50 to-teal-900/30",
    accent: "#10B981",
    mockup: "Healthcare Platform",
  },
  {
    title: "PropVault",
    category: "Real Estate",
    description: "Premium property listing platform with 3D tours and smart search functionality.",
    result: "+180% qualified leads",
    tags: ["Three.js", "Next.js", "Maps"],
    gradient: "from-amber-900/50 to-orange-900/30",
    accent: "#F59E0B",
    mockup: "Real Estate App",
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs tracking-widest uppercase mb-4">
              Our Work
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Featured
              <span className="gradient-text"> Projects</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-base">
            Real results for real businesses. Each project is a case study in strategy and execution.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer"
            >
              {/* Project Mockup */}
              <div className={`relative h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                {/* Abstract UI mockup */}
                <div className="w-full h-full p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                    <div className="flex-1 h-3 rounded-full bg-white/5 ml-2" />
                  </div>
                  <div className="flex gap-3 flex-1">
                    <div className="w-1/3 rounded-lg bg-white/5 border border-white/5" />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="h-3 rounded-full bg-white/8 w-3/4" />
                      <div className="h-3 rounded-full bg-white/5 w-1/2" />
                      <div className="flex-1 rounded-lg mt-1" style={{ background: `${project.accent}15`, border: `1px solid ${project.accent}20` }} />
                      <div className="flex gap-2">
                        <div className="h-7 flex-1 rounded-md" style={{ background: `${project.accent}30` }} />
                        <div className="h-7 flex-1 rounded-md bg-white/5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-semibold"
                  >
                    View Project <ExternalLink size={14} />
                  </motion.div>
                </div>

                {/* Category badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border"
                  style={{
                    background: `${project.accent}20`,
                    color: project.accent,
                    borderColor: `${project.accent}30`,
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-[#111111]">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <ArrowUpRight
                    size={18}
                    className="text-white/20 group-hover:text-white/70 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-white/40 border border-white/8"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ color: project.accent, background: `${project.accent}15` }}
                  >
                    {project.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 glass border border-white/10 hover:border-white/20 text-white font-medium rounded-full text-sm transition-all inline-flex items-center gap-2"
          >
            View All Projects <ArrowUpRight size={15} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
