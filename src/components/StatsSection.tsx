"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 150, suffix: "+",  label: "Projects Delivered"    },
  { value: 98,  suffix: "%",  label: "Client Satisfaction"   },
  { value: 12,  suffix: "M+", label: "Revenue Generated"     },
  { value: 5,   suffix: "+",  label: "Years of Experience"   },
];

const brands = ["Shopify","Notion","Webflow","Stripe","Vercel","Figma","Linear","Framer","Loom","Arc"];

function Counter({ target, suffix, run }: { target: number; suffix: string; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    const dur = 1800, step = target / (dur / 16);
    let cur = 0;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { setN(target); clearInterval(t); }
      else setN(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [run, target]);
  return <>{n}{suffix}</>;
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative border-t border-[rgba(235,206,181,0.06)]">
      {/* Marquee */}
      <div className="py-6 overflow-hidden border-b border-[rgba(235,206,181,0.06)]">
        <div className="flex whitespace-nowrap animate-marquee gap-0 w-max">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="inline-block px-8 text-[rgba(235,206,181,0.18)] text-sm font-medium tracking-widest uppercase"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div ref={ref} className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-[clamp(2.4rem,5vw,3.5rem)] font-black text-[#ebceb5] leading-none mb-2 tabular-nums">
              <Counter target={s.value} suffix={s.suffix} run={inView} />
            </div>
            <div className="text-[rgba(235,206,181,0.4)] text-sm tracking-wide">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
