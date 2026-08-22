import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  "Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "Entertainment", "Accessories", "Support",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-white/10" : "bg-black/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-[980px] mx-auto px-4 flex items-center justify-between h-12">
          {/* Apple Logo */}
          <a href="#home" className="text-white hover:opacity-70 transition-opacity flex-shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 814 1000" fill="currentColor">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.5 0 663 0 541.8c0-207.8 134.3-317.5 266.5-317.5 63.1 0 115.9 41.5 155.4 41.5 38 0 97.9-44.2 170.9-44.2 27.9 0 130.4 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
            </svg>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[12px] text-white/80 hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Bag">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </a>
            <button
              className="lg:hidden text-white/80 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-12 left-0 right-0 z-40 glass border-b border-white/10"
          >
            <div className="flex flex-col py-4 px-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="py-3 text-base text-white/80 hover:text-white border-b border-white/10 last:border-0 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 glass flex items-start justify-center pt-24"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              className="w-full max-w-2xl px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center bg-white/10 rounded-2xl px-5 py-3 border border-white/20">
                <svg className="w-5 h-5 text-white/50 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  autoFocus
                  type="text"
                  placeholder="Search apple.com"
                  className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-lg"
                />
              </div>
              <p className="text-white/40 text-sm mt-3 text-center">Press ESC to close</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
