"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [loading,  setLoading]  = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(iv); return 100; }
        return Math.min(p + Math.random() * 20, 100);
      });
    }, 70);
    const t = setTimeout(() => setLoading(false), 1100);
    return () => { clearInterval(iv); clearTimeout(t); };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2.5"
          >
            <div className="w-9 h-9 bg-[#343690] rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-sm">SC</span>
            </div>
            <span className="font-black text-[22px] text-[#111118] tracking-tight">
              Skilled<span className="text-[#343690]">Cuts</span>
            </span>
          </motion.div>

          {/* Progress track */}
          <div className="w-36 h-0.5 bg-[#f0f0f0] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#343690] rounded-full origin-left"
              animate={{ scaleX: Math.min(progress, 100) / 100 }}
              transition={{ duration: 0.08 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[11px] text-[#a1a1aa] tracking-[0.22em] uppercase"
          >
            Loading
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
