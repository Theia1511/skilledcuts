"use client";

import { motion } from "framer-motion";
import { Rocket, Gem, Target, Smartphone, Search, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "We ship in weeks, not months. Agile processes and dedicated sprints ensure your project launches on time, every time.",
    stat: "14-Day avg. delivery",
  },
  {
    icon: Gem,
    title: "Premium Design",
    description:
      "Every pixel is intentional. We craft experiences that reflect the quality of your brand and set you apart from competitors.",
    stat: "$10K+ quality standard",
  },
  {
    icon: Target,
    title: "Conversion Focused",
    description:
      "Beautiful isn't enough. We build with data-driven strategies to turn visitors into paying customers at every touchpoint.",
    stat: "avg. +220% conversion lift",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description:
      "60% of traffic is mobile. Every project is built mobile-first, ensuring a flawless experience on any device or screen size.",
    stat: "100% mobile-first",
  },
  {
    icon: Search,
    title: "SEO Friendly",
    description:
      "Rank higher and drive organic traffic. We build with structured data, performance optimization, and SEO best practices baked in.",
    stat: "95+ Lighthouse score",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. Dedicated post-launch support, updates, and growth strategy to keep your site performing.",
    stat: "24/7 priority support",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-violet-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs tracking-widest uppercase mb-4">
            Why SkilledCuts
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            The Difference Is In
            <span className="gradient-text"> The Details</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg">
            We obsess over the things others overlook — because that&apos;s what separates good from exceptional.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-violet-500/20 transition-all duration-300"
              >
                {/* Icon + Stat row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/15">
                    <Icon size={20} className="text-violet-400" />
                  </div>
                  <span className="text-xs text-cyan-400/70 bg-cyan-400/10 border border-cyan-400/15 px-2 py-1 rounded-full font-medium">
                    {feature.stat}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
