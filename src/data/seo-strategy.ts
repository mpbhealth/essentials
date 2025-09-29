// SEO Internal Linking Strategy for MPB Health Essentials

export const seoStrategy = {
  // Primary target keywords and their anchor text variations
  keywordClusters: {
    virtualHealthcare: [
      "virtual healthcare",
      "virtual urgent care",
      "online healthcare services",
      "telemedicine services",
      "virtual doctor visits"
    ],
    healthcareMembership: [
      "healthcare membership",
      "health membership plans",
      "essentials membership",
      "health coverage membership",
      "healthcare benefits"
    ],
    conciergeHealthcare: [
      "healthcare concierge",
      "medical concierge services",
      "health navigation support",
      "healthcare guidance",
      "medical assistance"
    ],
    mentalHealth: [
      "virtual mental health",
      "online mental health services",
      "mental health support",
      "behavioral health care",
      "mental wellness"
    ]
  },

  // Internal linking hierarchy
  linkingStrategy: {
    // Pillar pages (main topic pages)
    pillarPages: [
      {
        url: "/#services",
        title: "Healthcare Services",
        keywords: ["virtual healthcare", "telemedicine", "urgent care"],
        supportingPages: ["#details", "#pricing", "#how-it-works"]
      },
      {
        url: "/#pricing", 
        title: "Membership Pricing",
        keywords: ["healthcare membership", "health plans", "pricing"],
        supportingPages: ["#details", "#services", "#faq"]
      },
      {
        url: "/#details",
        title: "Membership Benefits", 
        keywords: ["health benefits", "membership features", "healthcare coverage"],
        supportingPages: ["#services", "#pricing", "#how-it-works"]
      }
    ],

    // Topic clusters for related content
    topicClusters: [
      {
        mainTopic: "Virtual Care",
        pages: ["/#services", "/#details", "/#how-it-works"],
        anchorVariations: [
          "virtual urgent care services",
          "online healthcare platform", 
          "virtual care benefits",
          "telemedicine access"
        ]
      },
      {
        mainTopic: "Membership Value",
        pages: ["/#pricing", "/#details", "/#faq"],
        anchorVariations: [
          "membership benefits",
          "healthcare value proposition",
          "essentials membership features",
          "comprehensive health coverage"
        ]
      }
    ]
  },

  // URL structure recommendations
  urlStructure: {
    current: "Single page application with anchors",
    recommended: {
      homepage: "/",
      services: "/services/virtual-healthcare/",
      pricing: "/membership-pricing/", 
      benefits: "/membership-benefits/",
      howItWorks: "/how-essentials-works/",
      faq: "/frequently-asked-questions/",
      contact: "/contact-healthcare-advisor/",
      thankYou: "/thank-you/advisor-request/"
    },
    
    // SEO-friendly anchor structure for current single-page design
    anchors: {
      services: "#virtual-healthcare-services",
      benefits: "#membership-benefits", 
      pricing: "#transparent-pricing",
      howItWorks: "#how-essentials-works",
      faq: "#healthcare-faq",
      contact: "#healthcare-advisor"
    }
  },

  // Link attributes best practices
  linkAttributes: {
    internal: {
      rel: "related", // For related content
      title: "descriptive title attribute",
      "aria-label": "for screen readers when needed"
    },
    external: {
      rel: "external noopener",
      target: "_blank",
      title: "descriptive title"
    },
    contact: {
      rel: "contact",
      title: "Contact information"
    }
  }
}

// Content recommendations for future pages
export const contentRecommendations = [
  {
    page: "Virtual Healthcare Services",
    url: "/services/virtual-healthcare/",
    description: "Detailed page about virtual urgent care, primary care, and mental health services",
    targetKeywords: ["virtual healthcare", "telemedicine", "online doctor visits"],
    internalLinks: [
      { to: "/membership-pricing/", anchor: "healthcare membership pricing" },
      { to: "/how-essentials-works/", anchor: "how virtual care works" },
      { to: "/membership-benefits/", anchor: "virtual care benefits" }
    ]
  },
  {
    page: "Healthcare Concierge",
    url: "/services/healthcare-concierge/", 
    description: "Dedicated page for MPB Concierge services and navigation support",
    targetKeywords: ["healthcare concierge", "medical navigation", "healthcare guidance"],
    internalLinks: [
      { to: "/services/virtual-healthcare/", anchor: "virtual healthcare services" },
      { to: "/membership-benefits/", anchor: "concierge benefits included" }
    ]
  },
  {
    page: "Member Success Stories", 
    url: "/member-testimonials/",
    description: "Expanded testimonials and case studies",
    targetKeywords: ["member testimonials", "healthcare success stories", "member results"],
    internalLinks: [
      { to: "/membership-pricing/", anchor: "join thousands of members" },
      { to: "/services/virtual-healthcare/", anchor: "services our members love" }
    ]
  }
]