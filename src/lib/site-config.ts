export const siteConfig = {
  name: "Clarusto Group",
  url: "https://clarusto.com",
  description:
    "Clarusto Group is a globally connected business ecosystem delivering specialised solutions across technology and international logistics industries.",
  ogImage: "https://clarusto.com/og-image.jpg",
  links: {
    technology: "https://clarusto.co.uk",
    logistics: "https://clarustologistics.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  email: {
    partnerships: "partnerships@clarusto.com",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home", section: "hero" },
  { href: "/about", label: "About" },
  { href: "/companies", label: "Companies" },
  { href: "/global", label: "Global" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const locations = [
  { flag: "🇬🇧", name: "United Kingdom", role: "Headquarters" },
  { flag: "🇦🇪", name: "United Arab Emirates", role: "Middle East Hub" },
  { flag: "🇩🇪", name: "Germany", role: "European Operations" },
  { flag: "🇨🇳", name: "China", role: "Asia Pacific Hub" },
  { flag: "🇮🇳", name: "India", role: "South Asia Operations" },
  { flag: "🇸🇦", name: "Saudi Arabia", role: "Gulf Region Hub" },
] as const;
