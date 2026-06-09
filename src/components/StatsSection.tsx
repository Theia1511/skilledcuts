"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 150, suffix: "+",  label: "Projects Delivered",   desc: "Across 20+ industries"    },
  { value: 98,  suffix: "%",  label: "Client Satisfaction",  desc: "Average rating 4.9 / 5"   },
  { value: 12,  suffix: "M+", label: "Revenue Generated",    desc: "For our clients combined"  },
  { value: 5,   suffix: "+",  label: "Years of Experience",  desc: "Building digital products" },
];

const brands = ["Shopify", "Notion", "Webflow", "Stripe", "Vercel", "Figma", "Linear", "Framer", "Loom", "Resend"];

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
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white border-y border-[#f0f0f0]">
      {/* Brand marquee */}
      <div className="border-b border-[#f0f0f0] py-5 overflow-hidden bg-[#fafafa]">
        <div className="flex whitespace-nowrap w-max animate-marquee">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="inline-block px-10 text-[#c4c4c8] text-sm font-medium tracking-[0.14em] uppercase"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Stats grid */}
      <div ref={ref} className="max-w-[1320px] mx-auto px-8 py-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="font-black text-[#343690] mb-3 tabular-nums leading-none"
                style={{ fontSize: "clamp(2.5rem,5vw,3.75rem)" }}
              >
                <Counter target={s.value} suffix={s.suffix} run={inView} />
              </div>
              <div className="text-[15px] font-semibold text-[#111118] mb-1.5">{s.label}</div>
              <div className="text-[13px] text-[#a1a1aa]">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
