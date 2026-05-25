import { siteConfig } from "@/lib/site-config";
import { divisionImages } from "@/lib/data/images";

export const groupStats = [
  { value: "30+", label: "Years Combined Expertise" },
  { value: "6", label: "International Markets" },
  { value: "2", label: "Specialised Divisions" },
  { value: "500+", label: "Active Client Accounts" },
] as const;

export const divisions = [
  {
    id: "technology",
    number: "01",
    name: "Clarusto Technology",
    tag: "Technology Division",
    tagClass: "company-tag-tech",
    cardClass: "company-card-tech",
    accentClass: "btn-tech",
    website: siteConfig.links.technology,
    learnMorePath: "/technology",
    sub: "Digital Transformation & IT Solutions · clarusto.co.uk",
    description:
      "Business-focused IT solutions designed to help organisations modernise infrastructure, strengthen cybersecurity, and support digital transformation across modern digital environments.",
    image: divisionImages.technology.src,
    imageAlt: divisionImages.technology.alt,
    services: [
      "Managed IT Services",
      "IT Support",
      "Cyber Security",
      "Cloud Infrastructure",
      "Digital Transformation",
      "Tech Consultancy",
    ],
    highlights: [
      { label: "Uptime SLA", value: "99.9%" },
      { label: "Certified Engineers", value: "45+" },
      { label: "Avg. Response Time", value: "< 15 min" },
    ],
  },
  {
    id: "logistics",
    number: "02",
    name: "Clarusto Logistics",
    tag: "Logistics Division",
    tagClass: "company-tag-logi",
    cardClass: "company-card-logi",
    accentClass: "btn-logi",
    website: siteConfig.links.logistics,
    learnMorePath: "/logistics",
    sub: "Global Freight Forwarding & Cargo Solutions · clarustologistics.com",
    description:
      "International freight forwarding, cargo coordination, customs support, and supply chain solutions designed for seamless cargo movement across global trade markets with 30+ years of expertise.",
    image: divisionImages.logistics.src,
    imageAlt: divisionImages.logistics.alt,
    services: [
      "Freight Forwarding",
      "Cargo Management",
      "Customs Coordination",
      "Supply Chain",
      "Documentation",
      "Transportation",
    ],
    highlights: [
      { label: "Shipments / Year", value: "12,000+" },
      { label: "Trade Corridors", value: "40+" },
      { label: "On-Time Delivery", value: "96%" },
    ],
  },
] as const;

export const leadershipTeam = [
  {
    name: "Alexander Whitfield",
    role: "Group Chief Executive",
    bio: "20+ years leading multi-division international businesses across technology and logistics sectors.",
    initials: "AW",
  },
  {
    name: "Nadia Hassan",
    role: "Chief Technology Officer",
    bio: "Former enterprise architect specialising in cloud transformation and cybersecurity strategy.",
    initials: "NH",
  },
  {
    name: "Robert Clarke",
    role: "Head of Global Logistics",
    bio: "Three decades of freight forwarding experience across European, Gulf, and Asia-Pacific corridors.",
    initials: "RC",
  },
  {
    name: "Mei Lin",
    role: "Director, Asia-Pacific Operations",
    bio: "Leads Clarusto's China and India market expansion with deep supply chain expertise.",
    initials: "ML",
  },
] as const;

export const partnershipBenefits = [
  {
    icon: "🔗",
    title: "Unified Ecosystem",
    text: "Access technology and logistics capabilities through a single trusted group partner.",
  },
  {
    icon: "🌍",
    title: "Global Network",
    text: "Operational support across six major markets with local expertise in each region.",
  },
  {
    icon: "📊",
    title: "Scalable Solutions",
    text: "From SME growth plans to enterprise-grade infrastructure and freight programmes.",
  },
  {
    icon: "🛡️",
    title: "Compliance Ready",
    text: "Cybersecurity, customs, and regulatory frameworks built into every engagement.",
  },
] as const;
