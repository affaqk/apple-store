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

const features = [
  {
    title: "A18 Pro chip",
    subtitle: "The fastest chip ever in a smartphone.",
    description: "With a 6-core CPU and 6-core GPU, A18 Pro takes performance to the next level — handling pro-level tasks with ease and unlocking Apple Intelligence.",
    color: "#ff9500",
    bg: "from-orange-950 to-stone-900",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
        <rect x="10" y="10" width="60" height="60" rx="12" fill="currentColor" opacity="0.15"/>
        <rect x="18" y="18" width="44" height="44" rx="8" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="26" y="26" width="28" height="28" rx="4" fill="currentColor" opacity="0.4"/>
        <circle cx="40" cy="40" r="6" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Camera Control",
    subtitle: "A new way to shoot photos and videos.",
    description: "Camera Control gives you an easier way to quickly access camera features. A click, swipe, or press lets you zoom, adjust exposure, switch lenses and more.",
    color: "#2997ff",
    bg: "from-blue-950 to-slate-900",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
        <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
        <circle cx="40" cy="40" r="18" stroke="currentColor" strokeWidth="2"/>
        <circle cx="40" cy="40" r="8" fill="currentColor"/>
        <circle cx="55" cy="25" r="3" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
  {
    title: "Apple Intelligence",
    subtitle: "AI that understands you deeply.",
    description: "Writing tools, image creation, enhanced Siri — Apple Intelligence puts the power of generative AI directly in your hands, with your privacy protected at every step.",
    color: "#bf5af2",
    bg: "from-purple-950 to-indigo-950",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
        <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
        <path d="M40 20 Q55 30 55 40 Q55 55 40 60 Q25 55 25 40 Q25 30 40 20Z" fill="currentColor" opacity="0.2"/>
        <path d="M30 40 Q35 32 40 30 Q45 32 50 40 Q45 48 40 50 Q35 48 30 40Z" fill="currentColor" opacity="0.5"/>
        <circle cx="40" cy="40" r="5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "ProRes Video",
    subtitle: "Shoot cinema-grade video.",
    description: "iPhone 16 Pro shoots Apple Log video footage and supports 4K 120fps ProRes video — capture stunning detail, then edit with pro precision.",
    color: "#30d158",
    bg: "from-green-950 to-emerald-950",
    icon: (
      <svg viewBox="0 0 80 80" className="w-16 h-16" fill="none">
        <rect x="8" y="20" width="50" height="40" rx="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5"/>
        <polygon points="62,32 75,40 62,48" fill="currentColor" opacity="0.8"/>
        <circle cx="33" cy="40" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="33" cy="40" r="4" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function FeatureSection() {
  const [headerRef, headerInView] = useInView(0.1);

  return (
    <section id="features" className="py-24 bg-apple-dark">
      {/* Header */}
      <div ref={headerRef} className="max-w-5xl mx-auto px-6 text-center mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-apple-blue text-sm font-semibold uppercase tracking-widest mb-4"
        >
          Why Apple
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
        >
          Breakthrough features.
          <br />
          <span className="text-white/40">Built for you.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-apple-gray text-xl max-w-2xl mx-auto"
        >
          Every Apple product is designed with the same goal: give you tools that disappear into the background, so you can focus on what matters most.
        </motion.p>
      </div>

      {/* Feature grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <FeatureCard key={f.title} feature={f} index={i} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }) {
  const [ref, inView] = useInView(0.15);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${feature.bg} p-8 border border-white/5 cursor-pointer group`}
    >
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        style={{ background: feature.color }}
      />
      <div className="relative z-10">
        <div style={{ color: feature.color }} className="mb-6">
          {feature.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
        <p className="text-base font-medium mb-3" style={{ color: feature.color }}>{feature.subtitle}</p>
        <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
        <motion.a
          href="#"
          className="inline-flex items-center gap-1 mt-6 text-sm font-medium"
          style={{ color: feature.color }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          Learn more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}
