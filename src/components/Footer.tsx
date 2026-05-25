"use client";

import { useState } from "react";
import { Send, ArrowUpRight, Code2, Globe, Mail, Flame } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "loading">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-deep-dark border-t border-magenta/10 pt-20 pb-10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-magenta/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <span className="hero-font text-2xl font-bold tracking-tight text-white block">
              The Pop<span className="text-magenta">.</span>Social
            </span>
            <p className="text-sm text-off-white/60 leading-relaxed font-light">
              Simplifying digital growth for the next generation of creators, startups, and modern brands through a premium, all-in-one creative ecosystem.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-navy/40 flex items-center justify-center border border-magenta/10 text-off-white/80 hover:text-magenta hover:border-magenta/40 hover:scale-110 transition-all duration-300"
                aria-label="Code"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-navy/40 flex items-center justify-center border border-magenta/10 text-off-white/80 hover:text-magenta hover:border-magenta/40 hover:scale-110 transition-all duration-300"
                aria-label="Platform"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-navy/40 flex items-center justify-center border border-magenta/10 text-off-white/80 hover:text-magenta hover:border-magenta/40 hover:scale-110 transition-all duration-300"
                aria-label="Mail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase font-poppins">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <a href="#services" className="text-off-white/70 hover:text-magenta hover:pl-1 transition-all duration-200 block">
                  Core Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-off-white/70 hover:text-magenta hover:pl-1 transition-all duration-200 block">
                  Why Work With Us
                </a>
              </li>
              <li>
                <a href="#work" className="text-off-white/70 hover:text-magenta hover:pl-1 transition-all duration-200 block">
                  Our Showcase
                </a>
              </li>
              <li>
                <a href="#process" className="text-off-white/70 hover:text-magenta hover:pl-1 transition-all duration-200 block">
                  Growth Timeline
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-off-white/70 hover:text-magenta hover:pl-1 transition-all duration-200 block">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase font-poppins">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-sm font-light">
              <li className="text-off-white/70">Social Media Growth</li>
              <li className="text-off-white/70">Creative Web & Apps</li>
              <li className="text-off-white/70">Branding & Direction</li>
              <li className="text-off-white/70">Paid Ads & Funnels</li>
              <li className="text-off-white/70">Monetization Pipelines</li>
            </ul>
          </div>

          {/* Newsletter / Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase font-poppins">
              Join the Movement
            </h4>
            <p className="text-sm text-off-white/60 font-light">
              Get creator hacks, design assets, and scaling secrets sent straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="relative flex items-center mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Scale with your email..."
                className="w-full bg-[#0b1322] border border-magenta/20 focus:border-magenta rounded-full py-2.5 px-4 pr-12 text-sm text-white placeholder-off-white/30 focus:outline-none focus:ring-1 focus:ring-magenta transition-all duration-300"
                required
                disabled={status === "loading" || status === "success"}
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="absolute right-1.5 w-8 h-8 rounded-full bg-magenta hover:bg-magenta-hover flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
              >
                {status === "loading" ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : status === "success" ? (
                  <span className="text-[10px] font-bold">OK</span>
                ) : (
                  <Send className="w-3.5 h-3.5" />
                )}
              </button>
            </form>
          </div>
        </div>

        <hr className="border-magenta/5 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-off-white/40 font-light">
          <div>
            &copy; {currentYear} The Pop Social (thepopsocial.in). All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-magenta transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-magenta transition-colors">Terms of Service</a>
            <span className="flex items-center text-magenta">
              Built for Creators <Flame className="w-3 h-3 ml-1 fill-magenta animate-bounce" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
