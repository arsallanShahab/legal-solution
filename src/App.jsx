import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";
import React from "react";
import { Helmet } from "react-helmet";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import ContactCTA from "@/components/sections/ContactCTA";
import Hero from "@/components/sections/Hero";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Testimonials from "@/components/sections/Testimonials";

import { practiceAreas, stats, testimonials } from "@/data/legalData";

function App() {
  const handleContactClick = () => {};

  const handleConsultationClick = () => {};

  return (
    <>
      <Helmet>
        <title>Legal Solution | Expert Advocate Firm</title>
        <meta
          name="description"
          content="Legal Solution - Leading advocate firm specializing in Criminal Law, Family Law, Business Law, Civil Law, and Estate Planning. Expert legal representation with proven results."
        />
      </Helmet>

      <div className="min-h-screen">
        <Header handleContactClick={handleContactClick} />
        <main>
          <Hero
            stats={stats}
            handleConsultationClick={handleConsultationClick}
            handleContactClick={handleContactClick}
          />
          <PracticeAreas
            practiceAreas={practiceAreas}
            handleContactClick={handleContactClick}
          />
          <About handleContactClick={handleContactClick} />
          {/* <Testimonials testimonials={testimonials} /> */}
          <ContactCTA
            handleConsultationClick={handleConsultationClick}
            handleContactClick={handleContactClick}
          />
        </main>
        <Footer handleContactClick={handleContactClick} />
        <Toaster />
      </div>
    </>
  );
}

export default App;
