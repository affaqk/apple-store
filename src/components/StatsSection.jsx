import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function useInView(threshold = 0.3) {
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

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  { value: 2, suffix: "B+", label: "Active devices worldwide" },
  { value: 195, suffix: "+", label: "Countries with Apple products" },
  { value: 500, suffix: "M+", label: "App Store apps" },
  { value: 40, suffix: "B+", label: "Songs on Apple Music" },
];

export default function StatsSection() {
  const [ref, inView] = useInView(0.2);

  return (
    <section ref={ref} className="py-24 bg-apple-dark border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Loved by billions.
          <br />
          <span className="text-white/40">Trusted by all.</span>
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, inView }) {
  const count = useCountUp(stat.value, 2000, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-apple-gray text-sm">{stat.label}</div>
    </motion.div>
  );
}
