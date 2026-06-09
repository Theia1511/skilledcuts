"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WORDS = ["Websites", "Experiences", "Brands", "Products", "Systems"];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(word.slice(0, display.length + 1));
        if (display.length + 1 === word.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setDisplay(word.slice(0, display.length - 1));
        if (display.length - 1 === 0) {
          setDeleting(false);
          setWordIdx(i => (i + 1) % words.length);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [display, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* Floating orbs — pure CSS animation, no JS per frame */
function Orb({ className }: { className: string }) {
  return <div className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`} />;
}

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rawY  = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y     = useSpring(rawY, { stiffness: 80, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const typed = useTypewriter(WORDS);

  const scroll = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  /* Mouse parallax on headline */
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMouse = (e: React.MouseEvent) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r) return;
    setMouse({
      x: ((e.clientX - r.left) / r.width  - 0.5) * 18,
      y: ((e.clientY - r.top)  / r.height - 0.5) * 10,
    });
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouse}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Orbs */}
      <Orb className="w-[600px] h-[600px] bg-[#ebceb5]/[0.04] top-[-10%] left-[-15%] animate-[float1_14s_ease-in-out_infinite]" />
      <Orb className="w-[500px] h-[500px] bg-[#ebceb5]/[0.03] bottom-[-5%] right-[-10%] animate-[float2_18s_ease-in-out_infinite]" />

      <style>{`
        @keyframes float1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,-20px)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,25px)} }
      `}</style>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(235,206,181,1) 1px,transparent 1px),linear-gradient(90deg,rgba(235,206,181,1) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        ref={containerRef}
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full border border-[rgba(235,206,181,0.12)] text-xs text-[rgba(235,206,181,0.5)] tracking-[0.18em] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ebceb5] opacity-60 animate-pulse" />
          Premium Digital Agency
        </motion.div>

        {/* Headline */}
        <motion.h1
          style={{ x: mouse.x * 0.6, y: mouse.y * 0.6 }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
          className="font-black leading-[0.92] tracking-[-0.03em] mb-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[clamp(3.2rem,9vw,7.5rem)] text-[#ebceb5]"
          >
            We Build
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[clamp(3.2rem,9vw,7.5rem)] text-[rgba(235,206,181,0.22)] relative"
          >
            Digital&nbsp;
            <span className="text-[#ebceb5]">
              {typed}
              <span className="animate-blink">|</span>
            </span>
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[clamp(3.2rem,9vw,7.5rem)] text-[rgba(235,206,181,0.22)]"
          >
            That Drive Growth
          </motion.span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-[rgba(235,206,181,0.45)] text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Websites, landing pages, AI systems &amp; automations built
          to scale your business — fast.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "#ebceb5" }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scroll("#contact")}
            className="group flex items-center gap-2.5 px-8 py-4 bg-[#ebceb5] text-[#0e0c0a] font-semibold rounded-full text-sm transition-all duration-200"
          >
            Start a Project
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scroll("#work")}
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-[rgba(235,206,181,0.15)] text-[rgba(235,206,181,0.6)] text-sm hover:text-[#ebceb5] hover:border-[rgba(235,206,181,0.3)] transition-all"
          >
            View Our Work
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[rgba(235,206,181,0.25)] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[rgba(235,206,181,0.4)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
