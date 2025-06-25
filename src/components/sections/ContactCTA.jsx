import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactCTA = ({ handleConsultationClick, handleContactClick }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-3xl p-12 border border-teal-500/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2e2861] mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-zinc-700">
                  Contact us today to Schedule a consultation. Let's discuss how
                  we can help protect your rights and interests.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-[#2e2861]" />
                  <span className="text-[#2e2861] text-lg">
                    (+91) 8100205037
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-[#2e2861]" />
                  <a
                    href="mailto:legalsolution798@gmail.com"
                    className="text-[#2e2861] text-lg hover:underline"
                  >
                    legalsolution798@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-[#2e2861]" />
                  <span className="text-[#2e2861] text-lg">
                    1/B/5,Tara Prasad Moitra Street, Near Baranagar
                    Municipality, Baranagar Kolkata - 700035
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid gap-4">
                <a
                  href="https://wa.me/918100205037?text=Hi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full"
                >
                  <Button
                    onClick={handleConsultationClick}
                    size="lg"
                    className="w-full bg-black hover:bg-black/80 text-white font-semibold"
                  >
                    Schedule Consultation
                  </Button>
                </a>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Emergency Legal Help?
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  Available 24/7 for urgent legal matters. Don't wait - call
                  now.
                </p>
                <a href="tel:+918100205037">
                  <Button
                    onClick={handleContactClick}
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                  >
                    Emergency Hotline
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
