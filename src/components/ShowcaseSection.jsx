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

const showcaseItems = [
  {
    title: "iPhone 17 Pro",
    sub: "Hello, Apple Intelligence.",
    cta: ["Learn more", "Shop iPhone"],
    bg: "bg-black",
    textColor: "text-white",
    accent: "#a17f57",
    image: "https://www.apple.com/v/iphone-17-pro/h/images/overview/welcome/hero_endframe__gb7f6nb06rau_xlarge.jpg",
    imageFit: "object-cover",
  },
  {
    title: "MacBook Pro",
    sub: "Mind-blowing. Head-turning.",
    cta: ["Learn more", "Shop Mac"],
    bg: "bg-[#f5f5f7]",
    textColor: "text-[#1d1d1f]",
    accent: "#0071e3",
    image: "https://www.apple.com/v/macbook-pro/ax/images/overview/welcome/hero_endframe__fwev9ebh42mq_xlarge.jpg",
    imageFit: "object-cover",
  },
  {
    title: "Apple Watch Series 11",
    sub: "Thinnest Apple Watch ever.",
    cta: ["Learn more", "Shop Watch"],
    bg: "bg-[#1d1d1f]",
    textColor: "text-white",
    accent: "#ff375f",
    image: "https://www.apple.com/v/apple-watch-series-11/c/images/overview/welcome/hero__d4bput78wzu6_xlarge.jpg",
    imageFit: "object-cover",
  },
  {
    title: "AirPods Max",
    sub: "Supersonic sound.",
    cta: ["Learn more", "Shop AirPods"],
    bg: "bg-[#fbfbfd]",
    textColor: "text-[#1d1d1f]",
    accent: "#0071e3",
    image: "https://www.apple.com/v/airpods/ae/images/overview/airpods_max_black__x3byrd2venmu_large.png",
    imageFit: "object-contain",
  },
];

export default function ShowcaseSection() {
  const [ref, inView] = useInView(0.05);

  return (
    <section ref={ref} className="py-6 px-4 bg-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {showcaseItems.map((item, i) => (
            <ShowcaseCard key={item.title} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({ item, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-3xl ${item.bg} h-[500px] flex flex-col group cursor-pointer`}
    >
      {/* Text */}
      <div className="pt-10 px-8 z-10">
        <h2 className={`text-3xl font-bold ${item.textColor} mb-1`}>{item.title}</h2>
        <p className="text-base" style={{ color: item.accent }}>{item.sub}</p>
        <div className="flex gap-4 mt-3">
          {item.cta.map((c, ci) => (
            <a
              key={c}
              href="#"
              className={`text-sm font-medium hover:underline transition-colors ${
                ci === 0 ? "" : "opacity-70"
              }`}
              style={{ color: item.accent }}
            >
              {c} {ci === 0 ? "›" : "›"}
            </a>
          ))}
        </div>
      </div>

      {/* Product image */}
      <div className="flex-1 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          className={`w-full h-full ${item.imageFit}`}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
