"use client";

import { motion } from "framer-motion";
import { Rocket, Gem, Target, Smartphone, Search, HeartHandshake } from "lucide-react";

const items = [
  { icon: Rocket,          no: "01", label: "Fast Delivery",       stat: "14-day avg",     desc: "Agile sprints and dedicated timelines — we ship on time, every time." },
  { icon: Gem,             no: "02", label: "Premium Design",      stat: "$10K+ quality",  desc: "Every pixel is intentional. We set the standard, not follow it." },
  { icon: Target,          no: "03", label: "Conversion Focused",  stat: "+220% avg lift", desc: "Beautiful isn't enough — we build to turn visitors into customers." },
  { icon: Smartphone,      no: "04", label: "Mobile Optimised",    stat: "100% responsive",desc: "Built mobile-first so every screen size feels native and flawless." },
  { icon: Search,          no: "05", label: "SEO Friendly",        stat: "95+ Lighthouse", desc: "Performance, structured data, and best practices baked in from day one." },
  { icon: HeartHandshake,  no: "06", label: "Ongoing Support",     stat: "30-day included",desc: "We don't vanish after launch — dedicated support keeps you growing." },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-white py-[120px]">
      <div className="max-w-[1320px] mx-auto px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[640px] mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f7f0e8] border border-[#EBCEB5] rounded-full text-[12px] font-medium text-[#343690] mb-6">
            Why SkilledCuts
          </div>
          <h2
            className="font-black text-[#111118] leading-[1.05] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)" }}
          >
            The Difference Is<br />In the Details
          </h2>
          <p className="text-[17px] text-[#52525b] leading-[1.7]">
            We obsess over the things others overlook — because that's what separates good from exceptional.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group p-8 rounded-2xl border border-[#f0f0f0] bg-white hover:border-[#EBCEB5] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-[#f7f0e8] text-[#343690] group-hover:bg-[#343690] group-hover:text-white transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <span className="text-[11px] font-medium text-[#343690] bg-[#f7f0e8] px-3 py-1.5 rounded-lg border border-[#EBCEB5]/60">
                    {item.stat}
                  </span>
                </div>
                <div className="text-[11px] text-[#c4c4c8] font-mono tracking-[0.18em] uppercase mb-3">
                  {item.no}
                </div>
                <h3 className="text-[16px] font-bold text-[#111118] mb-2.5">{item.label}</h3>
                <p className="text-[14px] text-[#52525b] leading-[1.75]">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
