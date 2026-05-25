"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-navbar py-4 shadow-lg shadow-black/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <span className="hero-font text-2xl font-bold tracking-tight text-white group-hover:text-magenta transition-colors">
              The Pop<span className="text-magenta">.</span>Social
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-off-white/80 hover:text-magenta hover:translate-y-[-1px] transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="cta-font inline-flex items-center space-x-2 bg-gradient-to-r from-magenta to-[#f881a5] hover:from-[#f881a5] hover:to-magenta text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-md shadow-magenta/10 hover:shadow-magenta/20 transition-all duration-300 hover:scale-105 group"
            >
              <span>Book Call</span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-off-white hover:text-magenta p-2 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 glass-panel-heavy border-b border-magenta/10 p-8 flex flex-col space-y-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-off-white hover:text-magenta py-2 border-b border-off-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="cta-font text-center bg-gradient-to-r from-magenta to-[#f881a5] text-white py-3 rounded-full text-base font-semibold tracking-wide shadow-lg shadow-magenta/10 hover:shadow-magenta/20 transition-all duration-300"
            >
              Book a Free Strategy Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
