import { articleImages } from "@/lib/data/images";

export type InsightArticle = {
  slug: string;
  category: "tech" | "logi" | "global" | "company";
  featured?: boolean;
  image: string;
  alt: string;
  badge: string;
  badgeClass: "badge-tech" | "badge-logi" | "badge-global";
  date: string;
  readTime: string;
  author: string;
  title: string;
  excerpt: string;
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "ai-cybersecurity-2025",
    category: "tech",
    featured: true,
    image: articleImages.cybersecurity.src,
    alt: articleImages.cybersecurity.alt,
    badge: "Technology",
    badgeClass: "badge-tech",
    date: "May 2025",
    readTime: "8 min read",
    author: "Sarah Chen",
    title:
      "The Future of Cybersecurity: How AI Is Transforming Enterprise Threat Detection in 2025",
    excerpt:
      "Artificial intelligence is rapidly redefining how organisations detect, prevent, and respond to cyber threats across global enterprise networks.",
  },
  {
    slug: "supply-chain-disruptions-2025",
    category: "logi",
    image: articleImages.supplyChain.src,
    alt: articleImages.supplyChain.alt,
    badge: "Logistics",
    badgeClass: "badge-logi",
    date: "April 2025",
    readTime: "6 min read",
    author: "James Okonkwo",
    title: "Navigating Global Supply Chain Disruptions: Key Strategies for 2025",
    excerpt:
      "How businesses are adapting freight strategies amid port congestion, geopolitical tensions, and shifting trade routes.",
  },
  {
    slug: "uae-china-trade-corridor",
    category: "global",
    image: articleImages.globalTrade.src,
    alt: articleImages.globalTrade.alt,
    badge: "Global Trade",
    badgeClass: "badge-global",
    date: "March 2025",
    readTime: "7 min read",
    author: "Fatima Al-Rashid",
    title:
      "UAE-China Trade Corridor: Emerging Opportunities for International Business",
    excerpt:
      "New routes opening significant growth potential for businesses operating across Gulf and Asia-Pacific markets.",
  },
  {
    slug: "cloud-migration-essentials",
    category: "tech",
    image: articleImages.cloudInfra.src,
    alt: articleImages.cloudInfra.alt,
    badge: "Cloud",
    badgeClass: "badge-tech",
    date: "February 2025",
    readTime: "5 min read",
    author: "David Hughes",
    title:
      "Cloud Migration Essentials: Reducing Downtime During Enterprise Transitions",
    excerpt:
      "Best practices for IT teams managing complex cloud migrations without disrupting day-to-day operations.",
  },
  {
    slug: "post-brexit-customs-guide",
    category: "logi",
    image: articleImages.customs.src,
    alt: articleImages.customs.alt,
    badge: "Customs",
    badgeClass: "badge-logi",
    date: "January 2025",
    readTime: "9 min read",
    author: "Emma Richardson",
    title:
      "Post-Brexit Customs Guide: What Importers and Exporters Need to Know",
    excerpt:
      "A comprehensive overview of UK customs procedures, documentation requirements, and compliance checkpoints.",
  },
  {
    slug: "expansion-saudi-india",
    category: "company",
    image: articleImages.expansion.src,
    alt: articleImages.expansion.alt,
    badge: "Announcement",
    badgeClass: "badge-global",
    date: "December 2024",
    readTime: "4 min read",
    author: "Clarusto Group",
    title: "Clarusto Group Expands Operations to Saudi Arabia and India",
    excerpt:
      "Growing our global footprint to better serve businesses across the Gulf region and South Asian markets.",
  },
  {
    slug: "ai-business-automation",
    category: "tech",
    image: articleImages.automation.src,
    alt: articleImages.automation.alt,
    badge: "AI & Automation",
    badgeClass: "badge-tech",
    date: "November 2024",
    readTime: "6 min read",
    author: "Priya Sharma",
    title:
      "AI-Powered Business Automation: Where to Start and What to Expect",
    excerpt:
      "A practical guide to implementing intelligent automation without disrupting existing workflows or teams.",
  },
  {
    slug: "container-rates-2025",
    category: "global",
    image: articleImages.containerRates.src,
    alt: articleImages.containerRates.alt,
    badge: "Global Trade",
    badgeClass: "badge-global",
    date: "October 2024",
    readTime: "7 min read",
    author: "Marco Silva",
    title:
      "Shipping Container Rates 2024–2025: What the Data Tells Us About the Year Ahead",
    excerpt:
      "Analysis of global container market trends and what importers and exporters should plan for next quarter.",
  },
  {
    slug: "air-vs-sea-freight",
    category: "logi",
    image: articleImages.airFreight.src,
    alt: articleImages.airFreight.alt,
    badge: "Air Freight",
    badgeClass: "badge-logi",
    date: "September 2024",
    readTime: "5 min read",
    author: "James Okonkwo",
    title:
      "Air Freight vs Sea Freight: Choosing the Right Mode for Your Shipment",
    excerpt:
      "Decision framework for selecting the optimal freight mode based on urgency, volume, cost, and cargo type.",
  },
];

export const insightCategories = [
  { id: "all", label: "All" },
  { id: "tech", label: "Technology" },
  { id: "logi", label: "Logistics" },
  { id: "global", label: "Global Trade" },
  { id: "company", label: "Company News" },
] as const;
