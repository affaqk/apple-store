import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    tagline: "Hello, Apple Intelligence.",
    description: "The most powerful iPhone ever with A19 Pro chip.",
    price: "From $999",
    gradient: "from-slate-900 via-slate-800 to-stone-900",
    accent: "#a17f57",
    badge: "New",
    image: "https://www.apple.com/v/iphone-17-pro/h/images/overview/product-viewer/initial__d2ghrz27b54y_large.jpg",
  },
  {
    id: 2,
    name: "MacBook Pro",
    tagline: "Mind-blowing. Head-turning.",
    description: "Supercharged by M4, M4 Pro, and M4 Max chips.",
    price: "From $1,599",
    gradient: "from-zinc-900 via-neutral-800 to-zinc-900",
    accent: "#6e6e73",
    badge: "New",
    image: "https://www.apple.com/v/macbook-pro/ax/images/overview/product-viewer/pv_colors_spaceblack__dwfpyrbaf4cy_large.jpg",
  },
  {
    id: 3,
    name: "iPad Pro",
    tagline: "Thin. Powerful. Magical.",
    description: "The thinnest Apple product ever with M4 chip.",
    price: "From $999",
    gradient: "from-sky-950 via-blue-950 to-slate-900",
    accent: "#2997ff",
    badge: "New",
    image: "https://www.apple.com/v/ipad-pro/aw/images/overview/highlights/design__fz9jny9rl722_large.jpg",
  },
  {
    id: 4,
    name: "Apple Watch Series 11",
    tagline: "The future of health on your wrist.",
    description: "Blood pressure. Sleep apnea. Thinner than ever.",
    price: "From $399",
    gradient: "from-neutral-900 via-zinc-900 to-neutral-800",
    accent: "#ff375f",
    badge: "New",
    image: "https://www.apple.com/v/apple-watch-series-11/c/images/overview/product-viewer/product_finishes_jet_black__blfwjso629w2_large.jpg",
  },
  {
    id: 5,
    name: "AirPods Pro",
    tagline: "Adaptive Audio. Now personalised for you.",
    description: "Next-level Active Noise Cancellation.",
    price: "From $249",
    gradient: "from-slate-900 via-gray-900 to-slate-800",
    accent: "#ffffff",
    badge: "3rd Gen",
    image: "https://www.apple.com/v/airpods/ae/images/overview/hero_endframe__calpooy4ucr6_large.jpg",
  },
  {
    id: 6,
    name: "Apple Vision Pro",
    tagline: "Welcome to the era of spatial computing.",
    description: "Breakthrough experiences that blend digital with real.",
    price: "From $3,499",
    gradient: "from-indigo-950 via-purple-950 to-slate-900",
    accent: "#8c8cff",
    badge: "New",
    image: "https://www.apple.com/v/apple-vision-pro/k/images/overview/hero/hero__cvgr5aj1ttsi_large.jpg",
  },
];

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

export default function ProductCarousel() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="products" ref={ref} className="py-20 bg-black overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-apple-blue text-sm font-semibold uppercase tracking-widest text-center mb-3"
        >
          The latest
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
        >
          Shop the newest Apple products.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-apple-gray text-center text-lg"
        >
          Swipe to explore. Tap to discover.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 2.8 },
            1280: { slidesPerView: 3.2 },
          }}
          className="!pb-12"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3 }}
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${product.gradient} h-[480px] flex flex-col items-center justify-between p-8 cursor-pointer group border border-white/5`}
    >
      {/* Badge */}
      <div className="absolute top-5 left-5">
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: product.accent + "22", color: product.accent, border: `1px solid ${product.accent}44` }}
        >
          {product.badge}
        </span>
      </div>

      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"
        style={{ background: `radial-gradient(circle at 50% 50%, ${product.accent}, transparent 70%)` }}
      />

      {/* Product image */}
      <div className="flex-1 flex items-center justify-center mt-8 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[260px] w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="w-full text-center">
        <h3 className="text-2xl font-semibold text-white mb-1">{product.name}</h3>
        <p className="text-sm mb-2" style={{ color: product.accent }}>{product.tagline}</p>
        <p className="text-white/50 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-center gap-4">
          <span className="text-white font-medium">{product.price}</span>
          <div className="flex gap-2">
            <a
              href="#"
              className="text-apple-blue text-sm hover:underline"
            >
              Learn more
            </a>
            <span className="text-white/20">|</span>
            <a
              href="#"
              className="text-apple-blue text-sm hover:underline"
            >
              Buy
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
