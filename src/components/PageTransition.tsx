"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-[#0A0A0A] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">SC</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-xl blur-lg opacity-60 animate-pulse" />
            </div>
            <motion.div
              className="flex gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                  className="w-1.5 h-1.5 rounded-full bg-violet-400"
                />
              ))}
            </motion.div>
          </motion.div>
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
