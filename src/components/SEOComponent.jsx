import React from "react";
import { Helmet } from "react-helmet";

const SEOComponent = ({
  title = "Legal Solution - Premier Law Firm in Baranagar, Kolkata",
  description = "Expert legal services in Baranagar, Kolkata. Specializing in Criminal Law, Family Law, Business Law & Civil Law. Trusted law firm in North Kolkata with proven results.",
  keywords = "Law firm in Baranagar, Law firm in Kolkata, Law firm in North Kolkata, Legal solution, Legal solution in Baranagar",
  url = "https://www.legalsolution.firm.in",
  image = "https://www.legalsolution.firm.in/logo-with-bg.jpeg",
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Legal Solution",
    alternateName: "Legal Solution Baranagar",
    description:
      "Premier law firm in Baranagar, Kolkata providing comprehensive legal services including Criminal Law, Family Law, Business Law, and Civil Law",
    url: url,
    logo: "https://www.legalsolution.firm.in/logo.png",
    image: image,
    telephone: "+91-8100205037",
    email: "legalsolution798@gmail.com",
    founder: {
      "@type": "Person",
      name: "Advocate Farah Anjum",
    },
    foundingDate: "2025",
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
        sameAs: "https://en.wikipedia.org/wiki/Baranagar",
      },
      {
        "@type": "City",
        name: "Kolkata",
        sameAs: "https://en.wikipedia.org/wiki/Kolkata",
      },
      {
        "@type": "Place",
        name: "North Kolkata",
      },
      {
        "@type": "State",
        name: "West Bengal",
      },
    ],
    serviceType: [
      "Criminal Law",
      "Family Law",
      "Business Law",
      "Civil Law",
      "Estate Planning",
      "Property Law",
      "Contract Law",
      "Corporate Law",
    ],
    priceRange: "$$",
    openingHours: "Mo-Sa 09:00-18:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Criminal Law Services",
            description:
              "Expert criminal defense representation in Baranagar and Kolkata",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Family Law Services",
            description:
              "Comprehensive family law services including divorce, custody, and matrimonial disputes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Law Services",
            description:
              "Corporate legal services for businesses in Kolkata and North Kolkata",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Civil Law Services",
            description: "Civil litigation and dispute resolution services",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.legalsolution.firm.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Law Firm in Baranagar",
        item: "https://www.legalsolution.firm.in/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Legal Services",
        item: "https://www.legalsolution.firm.in/#services",
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Legal Solution",
    url: url,
    logo: "https://www.legalsolution.firm.in/logo.png",
    description:
      "Premier law firm serving Baranagar, Kolkata, and North Kolkata with expert legal services",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "1/B/5, Tara Prasad Moitra Street, Near Baranagar Municipality",
      addressLocality: "Baranagar",
      addressRegion: "West Bengal",
      postalCode: "700035",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8100205037",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Bengali"],
    },
  };

  return (
    <Helmet>
      {/* Additional SEO meta tags */}
      <meta name="author" content="Legal Solution - Law Firm in Baranagar" />
      <meta name="publisher" content="Legal Solution" />
      <meta
        name="copyright"
        content="© 2025 Legal Solution. All rights reserved."
      />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="local" />
      <meta name="target" content="all" />
      <meta name="audience" content="general" />
      <meta name="rating" content="general" />

      {/* Geographic meta tags */}
      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content="Baranagar, Kolkata" />
      <meta name="geo.position" content="22.647242;88.3690871" />
      <meta name="ICBM" content="22.647242, 88.3690871" />

      {/* Additional Open Graph tags */}
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Legal Solution" />
      <meta property="og:updated_time" content="2025-07-02T00:00:00+05:30" />
      <meta
        property="article:publisher"
        content="https://www.facebook.com/legalsolution"
      />

      {/* Twitter Card additional tags */}
      <meta name="twitter:creator" content="@legalsolution" />
      <meta name="twitter:domain" content="legalsolution.firm.in" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Preload critical resources */}
      <link rel="preload" href="/logo.png" as="image" />
      <link rel="preload" href="/hero-bg.jpeg" as="image" />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
    </Helmet>
  );
};

export default SEOComponent;
