"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "NexaCommerce",
    avatar: "SC",
    avatarColor: "from-violet-500 to-purple-600",
    rating: 5,
    review:
      "SkilledCuts completely transformed our online presence. Our conversion rate jumped 340% in the first 3 months. The attention to detail and speed of delivery was unlike anything we've experienced from an agency before.",
  },
  {
    name: "Marcus Reid",
    role: "Founder",
    company: "Fintract",
    avatar: "MR",
    avatarColor: "from-cyan-500 to-blue-600",
    rating: 5,
    review:
      "We came to them with a complex FinTech dashboard concept and they delivered something beyond our imagination. The UI is stunning, the performance is flawless, and the AI integrations work seamlessly. Raised $2.1M shortly after launch.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "HealthBridge",
    avatar: "PS",
    avatarColor: "from-emerald-500 to-teal-600",
    rating: 5,
    review:
      "Our landing page was underperforming badly. SkilledCuts rebuilt it from scratch with a clear conversion strategy, and our lead generation tripled. ROI in the first week. That's the SkilledCuts difference.",
  },
  {
    name: "James Whitfield",
    role: "CTO",
    company: "PropVault",
    avatar: "JW",
    avatarColor: "from-amber-500 to-orange-600",
    rating: 5,
    review:
      "Honestly the best agency we've ever worked with. Communication was transparent, timelines were hit, and the quality exceeded every expectation. The automation systems they built save us 20+ hours a week.",
  },
  {
    name: "Amara Osei",
    role: "Head of Growth",
    company: "Launchify",
    avatar: "AO",
    avatarColor: "from-pink-500 to-rose-600",
    rating: 5,
    review:
      "The premium feel of our new website has completely changed how prospects perceive us. Deals are closing faster because clients see us as a serious, enterprise-grade company from the first impression.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs tracking-widest uppercase mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            What Clients
            <span className="gradient-text"> Say</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative p-8 md:p-12 rounded-3xl bg-[#111111] border border-white/5"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote size={60} className="text-violet-400" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>

              {/* Review */}
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-white/40 text-sm">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-violet-500"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prev}
                className="w-10 h-10 rounded-full glass border border-white/10 hover:border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="w-10 h-10 rounded-full glass border border-white/10 hover:border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
