import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import React from "react";

const PracticeAreas = ({ practiceAreas, handleContactClick }) => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Our Practice Areas
          </h2>
          <p className="text-xl text-zinc-500 max-w-3xl mx-auto">
            Comprehensive legal services tailored to meet your specific needs
            with proven expertise and dedication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-[rgb(230,233,243)] backdrop-blur-md rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-teal-500/10 rounded-xl mr-4">
                    <area.icon className="h-8 w-8 text-[#2e2861]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2e2861]">
                    {area.title}
                  </h3>
                </div>

                <p className="text-[#2e2861] mb-6 leading-relaxed">
                  {area.description}
                </p>

                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-[#2e2861]"
                    >
                      <ChevronRight className="h-4 w-4 text-[#2e2861] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
