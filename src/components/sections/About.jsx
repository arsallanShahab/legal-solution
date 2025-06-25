import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award, Clock, Users } from "lucide-react";
import React from "react";

const About = ({ handleContactClick }) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2e2861]">
                Why Choose Our Firm?
              </h2>
              <p className="text-xl text-zinc-700 leading-relaxed">
                At Legal Solution, our mission is to represent our clients with
                integrity, professionalism, and compassion. We are dedicated to
                achieving justice and fairness in every case we handle, ensuring
                that our clients receive the care and support they deserve
                during challenging legal matters.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#2e2861] rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2e2861] mb-2">
                    24/7 Availability
                  </h3>
                  <p className="text-[#2e2861]">
                    Legal emergencies don't wait for business hours. We're here
                    when you need us most.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#2e2861] rounded-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2e2861] mb-2">
                    Proven Track Record
                  </h3>
                  <p className="text-[#2e2861]">
                    98% success rate with over 1,000 cases won across all
                    practice areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-[#2e2861] rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2e2861] mb-2">
                    Personalized Approach
                  </h3>
                  <p className="text-[#2e2861]">
                    Every case is unique. We provide tailored legal strategies
                    for optimal outcomes.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/918100205037?text=Hi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6"
            >
              <Button
                size="lg"
                className="bg-black hover:bg-black/80 text-white font-semibold"
              >
                Schedule Consultation
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              alt="Legal team reviewing documents"
              className="rounded-2xl shadow-2xl w-full h-[350px] md:h-[500px] object-cover"
              src="/logo-with-bg.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
