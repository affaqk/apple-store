import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

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

const testimonials = [
  {
    quote: "Switching to Apple was the best decision I've ever made. The ecosystem is seamless and everything just works.",
    name: "Sarah M.",
    role: "Creative Director",
    avatar: "SM",
    color: "#2997ff",
  },
  {
    quote: "The M4 MacBook Pro handles my entire video editing pipeline without breaking a sweat. It's truly remarkable.",
    name: "James T.",
    role: "Filmmaker",
    avatar: "JT",
    color: "#ff9500",
  },
  {
    quote: "Apple Intelligence has transformed how I write. It feels like having a creative collaborator always available.",
    name: "Priya R.",
    role: "Author & Journalist",
    avatar: "PR",
    color: "#bf5af2",
  },
  {
    quote: "My Apple Watch has genuinely saved my health. The ECG and crash detection give me real peace of mind.",
    name: "Marcus L.",
    role: "Marathon Runner",
    avatar: "ML",
    color: "#30d158",
  },
  {
    quote: "The iPhone camera is the only camera I need. ProRes video on a phone is still unbelievable to me.",
    name: "Aiko N.",
    role: "Photographer",
    avatar: "AN",
    color: "#ff375f",
  },
];

export default function TestimonialSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} className="py-24 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-apple-blue text-sm font-semibold uppercase tracking-widest text-center mb-3"
        >
          What people are saying
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white text-center"
        >
          The Apple experience.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1.1}
          centeredSlides
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
          className="!pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <TestimonialCard testimonial={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

function TestimonialCard({ testimonial: t }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-[#1c1c1e] rounded-3xl p-8 border border-white/5 h-full"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <blockquote className="text-white/80 text-base leading-relaxed mb-6 italic">
        "{t.quote}"
      </blockquote>

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ backgroundColor: t.color + "33", border: `1px solid ${t.color}44`, color: t.color }}
        >
          {t.avatar}
        </div>
        <div>
          <div className="text-white font-medium text-sm">{t.name}</div>
          <div className="text-white/40 text-xs">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}
