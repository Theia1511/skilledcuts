"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { Layout, Layers, Code2, Palette, Bot, Zap } from "lucide-react";

const services = [
  { icon: Layout,  no: "01", title: "Website Design",      desc: "Pixel-perfect sites that convert visitors into customers with strategic aesthetics." },
  { icon: Layers,  no: "02", title: "Landing Pages",       desc: "High-converting pages engineered for maximum ROI on every campaign you run." },
  { icon: Code2,   no: "03", title: "Web Development",     desc: "Scalable, performant code on modern stacks. From MVP to enterprise platform." },
  { icon: Palette, no: "04", title: "UI/UX Design",        desc: "Research-driven interfaces users love. Wireframes to polished design systems." },
  { icon: Bot,     no: "05", title: "AI Integrations",     desc: "Embed GPT-4, Claude and custom models directly into your product or workflow." },
  { icon: Zap,     no: "06", title: "Automation Systems",  desc: "Smart workflows that eliminate repetitive work and save your team hours daily." },
];

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]),  { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMove = (e: MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width  - 0.5);
    my.set((e.clientY - r.top)  / r.height - 0.5);
  };
  const handleLeave = () => { mx.set(0); my.set(0); };

  const Icon = s.icon;
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: i * 0.07 }}
      className="group relative p-7 rounded-2xl border border-[rgba(235,206,181,0.07)] bg-[#131109] hover:border-[rgba(235,206,181,0.14)] transition-all duration-300 cursor-default"
    >
      {/* Number */}
      <span className="text-[10px] text-[rgba(235,206,181,0.2)] tracking-[0.2em] uppercase font-mono mb-5 block">
        {s.no}
      </span>

      {/* Icon */}
      <div className="mb-4 inline-flex p-2.5 rounded-xl border border-[rgba(235,206,181,0.08)] bg-[rgba(235,206,181,0.04)] text-[#ebceb5] group-hover:bg-[rgba(235,206,181,0.08)] transition-colors">
        <Icon size={20} />
      </div>

      <h3 className="text-[#ebceb5] font-semibold text-base mb-2">{s.title}</h3>
      <p className="text-[rgba(235,206,181,0.38)] text-sm leading-relaxed">{s.desc}</p>

      {/* Bottom hover line */}
      <motion.div
        className="absolute bottom-0 left-6 right-6 h-px bg-[rgba(235,206,181,0.15)] origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 border-t border-[rgba(235,206,181,0.06)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[10px] text-[rgba(235,206,181,0.35)] tracking-[0.22em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black text-[#ebceb5] leading-[0.95] tracking-tight max-w-lg">
            Services Built<br />for Growth
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
