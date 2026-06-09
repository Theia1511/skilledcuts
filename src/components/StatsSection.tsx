"use client";

import { useInView, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed", description: "Across 20+ industries" },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Average rating 4.9/5" },
  { value: 12, suffix: "M+", label: "Revenue Generated", description: "For our clients collectively" },
  { value: 5, suffix: "+", label: "Years Experience", description: "Building digital products" },
];

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const trustedBy = [
  "Shopify", "Notion", "Webflow", "Stripe", "Vercel", "Figma", "Linear", "Resend"
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Top separator gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-white/30 tracking-widest uppercase mb-8">
            Trusted by growing businesses worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedBy.map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-white/20 font-semibold text-lg hover:text-white/50 transition-colors cursor-default"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-16" />

        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black gradient-text-purple mb-2 tabular-nums">
                <CountUp target={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-white/40">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
