import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import React from "react";

const Header = ({ handleContactClick }) => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            {/* <div className="h-14 w-auto ">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-full w-auto object-contain"
              />
            </div> */}
            <a
              href="/"
              className="text-2xl font-semibold text-[var(--background-dark)] font-cormorant"
            >
              Legal Solution
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-8 text-sm"
          >
            <a
              href="#services"
              className="text-zinc-900 hover:text-zinc-800 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-zinc-900 hover:text-zinc-800 font-medium transition-colors"
            >
              About
            </a>
            {/* <a
              href="#testimonials"
              className="text-zinc-900 hover:text-zinc-800 font-medium transition-colors"
            >
              Testimonials
            </a> */}
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-3xl bg-zinc-100 hover:bg-zinc-200 text-slate-950 font-semibold"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
