import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function CTASection() {
  const [ref, inView] = useInView(0.2);

  return (
    <section ref={ref} className="py-6 px-4 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] mx-auto relative overflow-hidden rounded-3xl min-h-[400px] flex flex-col items-center justify-center text-center p-12"
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)",
        }}
      >
        {/* Animated background rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.5 + i * 0.3, 1], opacity: [0.1, 0.05, 0.1] }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
            className="absolute inset-0 rounded-full border border-white/10"
            style={{ margin: `${i * 40}px` }}
          />
        ))}

        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent" />

        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-apple-blue text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Apple Store
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            The best way to buy
            <br />
            the products you love.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/60 text-lg max-w-xl mx-auto mb-10"
          >
            Get expert advice. Trade in your current device. Find the perfect plan. All in one place.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-[#1d1d1f] rounded-full text-base font-semibold hover:bg-white/90 transition-colors"
            >
              Shop Apple Store
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-transparent text-white rounded-full text-base font-semibold border border-white/30 hover:border-white/60 transition-colors"
            >
              Find a store
            </motion.a>
          </motion.div>

          {/* Features row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6 mt-12 text-white/50 text-sm"
          >
            {["Free delivery", "Easy returns", "Trade-in", "Financing options"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
