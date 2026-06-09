"use client";

import { motion } from "framer-motion";

const items = [
  { label: "Fast Delivery",        stat: "14-day avg",    desc: "Agile sprints, no delays." },
  { label: "Premium Design",       stat: "$10K+ quality", desc: "Every pixel intentional."  },
  { label: "Conversion Focused",   stat: "+220% avg lift", desc: "Built to make money."     },
  { label: "Mobile Optimised",     stat: "100% responsive", desc: "Flawless on any screen." },
  { label: "SEO Friendly",         stat: "95+ Lighthouse", desc: "Rank higher, organically."},
  { label: "Ongoing Support",      stat: "24/7 available", desc: "We don't disappear."      },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-28 border-t border-[rgba(235,206,181,0.06)] bg-[#131109]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-lg"
        >
          <p className="text-[10px] text-[rgba(235,206,181,0.35)] tracking-[0.22em] uppercase mb-4">Why SkilledCuts</p>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black text-[#ebceb5] leading-[0.95] tracking-tight">
            The Difference Is<br />In the Details
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(235,206,181,0.06)]">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-[#131109] hover:bg-[#181410] transition-colors p-8"
            >
              <div className="text-[11px] text-[rgba(235,206,181,0.35)] tracking-[0.18em] uppercase font-mono mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[#ebceb5] font-semibold text-lg mb-1.5">{item.label}</h3>
              <p className="text-[rgba(235,206,181,0.35)] text-sm mb-4">{item.desc}</p>
              <div className="inline-block text-xs text-[rgba(235,206,181,0.5)] border border-[rgba(235,206,181,0.1)] px-3 py-1 rounded-full">
                {item.stat}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
