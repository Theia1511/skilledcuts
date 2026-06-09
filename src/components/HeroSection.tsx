"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useRef } from "react";

const floatingCards = [
  { label: "UI/UX Design", icon: "✦", color: "from-violet-500/20 to-violet-600/10", delay: 0 },
  { label: "AI Integration", icon: "◈", color: "from-cyan-500/20 to-cyan-600/10", delay: 0.3 },
  { label: "Web Development", icon: "⬡", color: "from-purple-500/20 to-purple-600/10", delay: 0.6 },
  { label: "Automation", icon: "◎", color: "from-violet-400/20 to-cyan-500/10", delay: 0.9 },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-700/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-800/10 rounded-full blur-[150px]"
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial gradient center fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0A0A_80%)] pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/30 text-sm text-violet-300 mb-8"
        >
          <Sparkles size={14} className="text-violet-400" />
          Premium Digital Agency — Est. 2020
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6"
        >
          <span className="block text-white">Building Digital</span>
          <span className="block gradient-text">Experiences That</span>
          <span className="block text-white">Drive Growth</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We design and develop websites, landing pages, and digital systems that help
          businesses scale faster — with precision, elegance, and purpose.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleScroll("#contact")}
            className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full text-sm hover:bg-white/90 transition-all duration-200"
          >
            Book a Call
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleScroll("#work")}
            className="group flex items-center gap-2 px-8 py-4 glass border border-white/10 text-white font-medium rounded-full text-sm hover:border-white/20 transition-all duration-200"
          >
            <Play size={14} className="fill-white" />
            View Work
          </motion.button>
        </motion.div>

        {/* Floating UI Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${card.color} glass border border-white/8 text-sm text-white/70`}
            >
              <span className="text-violet-400 text-base">{card.icon}</span>
              {card.label}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
