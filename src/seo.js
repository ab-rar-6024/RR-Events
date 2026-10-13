// Central SEO data. Change SITE_URL here if the domain ever changes.
export const SITE_URL = "https://rrevents.live";
export const SITE_NAME = "RR Events";
export const OG_IMAGE = `${SITE_URL}/media/og-image.jpg`;

export const pages = {
  home: {
    path: "/",
    title: "RR Events | Event Management & Entertainment Company in Chennai",
    description:
      "RR Events is a Chennai event management and entertainment company. We produce weddings, corporate events, concerts, DJ nights and brand activations across India.",
    keywords: "RR Events, RR Events Chennai, event management Chennai, event management company Chennai, wedding event management Chennai, corporate event management Chennai, concert production Chennai, DJ services Chennai, stage and sound rental Chennai, brand activation Chennai",
  },
  about: {
    path: "/about",
    title: "About RR Events | Chennai Event Production Team & Founder",
    description:
      "Meet the team behind RR Events, a Chennai events and entertainment studio founded by Siva. Learn our story, values and the crew who runs every production.",
    keywords: "about RR Events, RR Events team, RR Events founder Siva, event company Chennai, event production team Chennai",
  },
  services: {
    path: "/services",
    title: "Event Services in Chennai | Weddings, Corporate, Concerts & DJ | RR Events",
    description:
      "Wedding planning, corporate event management, concert production, DJ and sound, stage and lighting, exhibitions and decor. Full event services in Chennai from RR Events.",
    keywords: "event services Chennai, wedding planners Chennai, corporate event planners Chennai, concert production company Chennai, DJ and sound Chennai, stage lighting rental Chennai, exhibition stall design Chennai, decor and set design Chennai",
  },
  portfolio: {
    path: "/portfolio",
    title: "Event Portfolio | Weddings, Concerts & Corporate Events | RR Events Chennai",
    description:
      "Browse RR Events' portfolio of weddings, corporate summits, concerts, DJ nights and brand activations produced in Chennai and across India.",
    keywords: "RR Events portfolio, event portfolio Chennai, wedding events Chennai, corporate event photos Chennai, concert production portfolio, DJ event videos Chennai",
  },
  testimonials: {
    path: "/testimonials",
    title: "Client Testimonials | RR Events Chennai Event Management Reviews",
    description:
      "Read what clients say about RR Events: brides and grooms, corporate leaders, festival producers and campus coordinators who trusted us with their events.",
    keywords: "RR Events reviews, RR Events testimonials, event management reviews Chennai, RR Events clients",
  },
  contact: {
    path: "/contact",
    title: "Contact RR Events | Book Your Event in Chennai",
    description:
      "Contact RR Events in Chennai to plan your wedding, corporate event, concert or DJ night. Call +91 63839 78275, WhatsApp or send an enquiry online.",
    keywords: "contact RR Events, book event management Chennai, RR Events phone number, RR Events address Chennai, event enquiry Chennai",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | RR Events",
    description: "How RR Events collects, uses and protects the personal information you share with us through this website.",
    keywords: "RR Events privacy policy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Service | RR Events",
    description: "Terms of service for RR Events event production and entertainment bookings in Chennai and across India.",
    keywords: "RR Events terms of service",
  },
  notFound: {
    path: "/404",
    title: "Page Not Found | RR Events",
    description: "The page you're looking for doesn't exist. Return to RR Events, Chennai's event production studio.",
    keywords: "",
    noindex: true,
  },
};

/** Schema.org LocalBusiness data, reused by the static HTML and the sitemap. */
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  name: "RR Events",
  alternateName: "RR Events — Events & Entertainment",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-white.png`,
  image: OG_IMAGE,
  description:
    "Chennai event management and entertainment company producing weddings, corporate events, concerts, DJ nights and brand activations.",
  telephone: "+91-63839-78275",
  email: "rrevent26@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 582, P H Road, Aminjikarai",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "City", name: "Chennai" },
    { "@type": "Country", name: "India" },
  ],
  openingHours: "Mo-Sa 10:00-19:00",
  sameAs: [
    "https://www.instagram.com/_rr_events___",
    "https://youtube.com/@rrevent26",
  ],
  knowsAbout: ["Wedding event management", "Corporate event management", "Concert production", "DJ and sound services", "Stage and lighting", "Brand activation"],
};
