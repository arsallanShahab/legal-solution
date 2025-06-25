import { Scale } from "lucide-react";
import React from "react";

const Footer = ({ handleContactClick }) => {
  return (
    <footer className="bg-[#e6e9f3] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-[#2e2861]" />
              <span className="text-xl font-bold text-[#2e2861]">
                Legal Solution
              </span>
            </div>
            <p className="text-zinc-600">
              Expert legal representation you can trust. Protecting your rights
              with dedication and expertise.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold text-[#2e2861] mb-4 block">
              Practice Areas
            </span>
            <ul className="space-y-2 text-zinc-600">
              <li>Criminal Law</li>
              <li>Family Law</li>
              <li>Business Law</li>
              <li>Civil Law</li>
              <li>Estate Planning</li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold text-[#2e2861] mb-4 block">
              Quick Links
            </span>
            <ul className="space-y-2 text-zinc-600">
              <li>
                <a
                  href="#services"
                  className="hover:text-[#2e2861] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#2e2861] transition-colors"
                >
                  About
                </a>
              </li>
              <li></li>
              <li>
                <button
                  onClick={handleContactClick}
                  className="hover:text-[#2e2861] transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold text-[#2e2861] mb-4 block">
              Contact Info
            </span>
            <div className="space-y-2 text-zinc-600">
              <p>(+91) 8100205037</p>
              <p>
                <a
                  href="mailto:legalsolution798@gmail.com"
                  className="text-zinc-600 text-lg hover:underline"
                >
                  legalsolution798@gmail.com
                </a>
              </p>
              <p>
                1/B/5,Tara Prasad Moitra Street,
                <br />
                Near Baranagar Municipality, Baranagar Kolkata - 700035
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-8 pt-8 text-center">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Legal Solution. All rights reserved. |
            Attorney Advertising
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
