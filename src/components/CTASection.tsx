"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, FileText } from "lucide-react";

export default function CTASection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/60 via-[#111111] to-cyan-900/30" />
          <div className="absolute inset-0 grid-bg opacity-20" />

          {/* Glow orbs */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-violet-600/30 rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-500/20 rounded-full blur-[80px]" />

          {/* Border gradient */}
          <div className="absolute inset-0 rounded-3xl border border-white/10" />

          {/* Content */}
          <div className="relative z-10 text-center p-12 md:p-20">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Currently accepting new projects
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Ready to Build Something
              <span className="gradient-text"> Exceptional?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Let&apos;s turn your vision into a high-performing digital experience. Your next chapter starts with a conversation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleScroll("#contact")}
                className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full text-sm hover:bg-white/90 transition-all duration-200"
              >
                <Calendar size={16} />
                Schedule a Call
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleScroll("#contact")}
                className="group flex items-center gap-2 px-8 py-4 glass-dark border border-white/10 text-white font-medium rounded-full text-sm hover:border-white/20 transition-all"
              >
                <FileText size={16} />
                Get a Proposal
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/30 text-xs"
            >
              <span>✓ Free consultation</span>
              <span>✓ No commitments</span>
              <span>✓ Response within 24 hours</span>
              <span>✓ Fixed project pricing</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
