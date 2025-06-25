import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award, ChevronRight, Phone } from "lucide-react";
import React from "react";

const Hero = ({ stats, handleConsultationClick, handleContactClick }) => {
  return (
    <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-zinc-900 rounded-full border"
              >
                <Award className="h-4 w-4 text-white mr-2" />
                <span className="text-white text-sm font-medium">
                  Award-Winning Legal Team
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold text-zinc-600 leading-tight">
                Legal
                <span className="block text-black">Solution</span>
              </h1>

              <p className="text-xl text-zinc-600 leading-relaxed">
                Advocating for your Rights and life's complex with integrity and
                results. Protecting your rights with unwavering dedication. Our
                experienced legal team provides comprehensive representation
                across Criminal Law, Family Law, Business Law, Civil Law, and
                Estate Planning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918100205037?text=Hi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  onClick={handleConsultationClick}
                  size="lg"
                  className="bg-black hover:bg-black/80 rounded-3xl text-white font-semibold px-8 py-3"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                alt="Professional lawyers in modern office"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                src="/hero-bg.jpeg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-500/10 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
