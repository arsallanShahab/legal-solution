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
import SEOComponent from "@/components/SEOComponent";

import { practiceAreas, stats, testimonials } from "@/data/legalData";

function App() {
  const handleContactClick = () => {};

  const handleConsultationClick = () => {};

  return (
    <>
      <Helmet>
        <title>
          Legal Solution - Premier Law Firm in Baranagar, Kolkata | Expert Legal
          Services
        </title>
        <meta
          name="description"
          content="Legal Solution - Leading law firm in Baranagar, Kolkata specializing in Criminal Law, Family Law, Business Law & Civil Law. Expert legal representation in North Kolkata with 15+ years experience."
        />
        <meta
          name="keywords"
          content="Law firm in Baranagar, Law firm in Kolkata, Law firm in North Kolkata, Legal solution, Legal solution in Baranagar, Advocate Kolkata, Criminal lawyer, Family lawyer, Business law, Civil law, Legal services Baranagar"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Legal Solution - Premier Law Firm in Baranagar, Kolkata"
        />
        <meta
          property="og:description"
          content="Expert legal services in Baranagar, Kolkata. Specializing in Criminal, Family, Business & Civil Law with 15+ years experience."
        />
        <meta property="og:url" content="https://www.legalsolution.firm.in" />
        <meta
          property="og:image"
          content="https://www.legalsolution.firm.in/logo-with-bg.jpeg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:title"
          content="Legal Solution - Premier Law Firm in Baranagar, Kolkata"
        />
        <meta
          name="twitter:description"
          content="Expert legal services in Baranagar, Kolkata. Criminal, Family, Business & Civil Law specialists."
        />
        <meta
          name="twitter:image"
          content="https://www.legalsolution.firm.in/logo-with-bg.jpeg"
        />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Legal Solution",
            description:
              "Premier law firm in Baranagar, Kolkata providing expert legal services",
            url: "https://www.legalsolution.firm.in",
            logo: "https://www.legalsolution.firm.in/logo.png",
            image: "https://www.legalsolution.firm.in/logo-with-bg.jpeg",
            telephone: "+91-8100205037",
            email: "legalsolution798@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "1/B/5, Tara Prasad Moitra Street, Near Baranagar Municipality",
              addressLocality: "Baranagar",
              addressRegion: "West Bengal",
              postalCode: "700035",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "22.647242",
              longitude: "88.3690871",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Baranagar",
              },
              {
                "@type": "City",
                name: "Kolkata",
              },
              {
                "@type": "Place",
                name: "North Kolkata",
              },
            ],
            serviceType: [
              "Criminal Law",
              "Family Law",
              "Business Law",
              "Civil Law",
              "Estate Planning",
            ],
            priceRange: "$$",
            openingHours: "Mo-Sa 09:00-18:00",
          })}
        </script>
      </Helmet>

      <SEOComponent />

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
