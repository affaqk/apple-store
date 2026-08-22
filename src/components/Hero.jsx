import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let animId;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500 rounded-full blur-[200px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-apple-blue text-sm font-semibold uppercase tracking-widest mb-4"
        >
          Welcome to Apple
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-gradient mb-6"
        >
          Think
          <br />
          <span className="text-gradient-blue">Different.</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 font-light"
        >
          Explore the new iPhone 17 Pro, MacBook Pro with M4, and more innovations designed to change everything.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#products"
            className="px-8 py-3.5 bg-apple-blue hover:bg-blue-500 text-white rounded-full text-base font-medium transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Shop now
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-base font-medium border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Learn more
          </a>
        </motion.div>

        {/* Hero product image */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12 relative mx-auto max-w-xs"
        >
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            src="https://www.apple.com/v/iphone-17-pro/h/images/overview/product-viewer/initial__d2ghrz27b54y_large.jpg"
            alt="iPhone 17 Pro"
            className="w-full object-contain drop-shadow-[0_30px_80px_rgba(161,127,87,0.35)]"
          />
          <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
