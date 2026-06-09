"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const WORDS = ["Websites", "Landing Pages", "Experiences", "AI Systems", "Products"];

function useTypewriter(words: string[], speed = 75, pause = 2000) {
  const [display,  setDisplay]  = useState("");
  const [wordIdx,  setWordIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const id = setTimeout(() => {
      if (!deleting) {
        setDisplay(word.slice(0, display.length + 1));
        if (display.length + 1 === word.length) setTimeout(() => setDeleting(true), pause);
      } else {
        setDisplay(word.slice(0, display.length - 1));
        if (display.length - 1 === 0) {
          setDeleting(false);
          setWordIdx(i => (i + 1) % words.length);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(id);
  }, [display, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const typed   = useTypewriter(WORDS);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Soft beige radial bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(235,206,181,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating badge — top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute top-36 right-[8%] hidden lg:flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-[#f0f0f0] animate-float"
      >
        <div className="w-7 h-7 bg-[#EBCEB5]/40 rounded-lg flex items-center justify-center">
          <Sparkles size={13} className="text-[#343690]" />
        </div>
        <div>
          <div className="text-[11px] font-semibold text-[#111118]">150+ Projects</div>
          <div className="text-[10px] text-[#a1a1aa]">Delivered worldwide</div>
        </div>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.35, duration: 0.5 }}
        className="absolute bottom-40 left-[8%] hidden lg:flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.07)] border border-[#f0f0f0] animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="w-7 h-7 bg-[#343690]/10 rounded-lg flex items-center justify-center">
          <span className="text-[#343690] text-xs font-bold">★</span>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-[#111118]">98% Satisfaction</div>
          <div className="text-[10px] text-[#a1a1aa]">Average 4.9 / 5 rating</div>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-[860px] mx-auto pt-24"
      >
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#f7f0e8] border border-[#EBCEB5] rounded-full text-[12px] font-medium text-[#343690] mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#343690] animate-pulse" />
          Premium Digital Agency — Est. 2020
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-black leading-[1.0] tracking-[-0.03em] text-[#111118] mb-7"
          style={{ fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)" }}
        >
          We Build Digital<br />
          <span className="text-[#343690]">
            {typed}
            <span className="animate-blink text-[#EBCEB5]">|</span>
          </span><br />
          That Drive Growth
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[18px] text-[#52525b] max-w-[540px] mx-auto mb-12 leading-[1.7]"
        >
          We design and develop websites, landing pages, and digital systems
          that help businesses scale faster — with precision and purpose.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "#272b72" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#contact")}
            className="group flex items-center gap-2.5 px-8 py-4 bg-[#343690] text-white font-semibold rounded-xl text-[15px] transition-all duration-200 shadow-[0_4px_20px_rgba(52,54,144,0.28)]"
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#f7f0e8" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#work")}
            className="flex items-center gap-2 px-8 py-4 bg-white border border-[#e4e4e7] text-[#111118] font-medium rounded-xl text-[15px] transition-all duration-200 hover:border-[#EBCEB5]"
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#a1a1aa]"
        >
          {["150+ Projects", "98% Satisfaction", "5+ Years", "$12M+ Generated"].map((stat, i) => (
            <span key={stat} className="flex items-center gap-2">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-[#e4e4e7]" />}
              {stat}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-[#e4e4e7] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[#343690]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
