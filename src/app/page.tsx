import { PageShell } from "@/components/layout/PageShell";
import { Footer } from "@/components/layout/Footer";
import {
  HeroSection,
  MarqueeSection,
  AboutSection,
  CompaniesSection,
  GlobalSection,
  NewsSection,
} from "@/components/home/HomeSections";
import { ContactSection } from "@/components/home/ContactSection";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "Clarusto Group",
  url: "https://clarusto.com",
  description:
    "A globally connected business ecosystem delivering specialised solutions across technology and international logistics industries",
  areaServed: ["GB", "AE", "DE", "CN", "IN", "SA"],
  subOrganization: [
    {
      "@type": "Corporation",
      name: "Clarusto Technology",
      url: "https://clarusto.co.uk",
      description:
        "Business-focused IT solutions and digital transformation",
    },
    {
      "@type": "Corporation",
      name: "Clarusto Logistics",
      url: "https://clarustologistics.com",
      description:
        "International freight forwarding and cargo solutions",
    },
  ],
};

export default function HomePage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <CompaniesSection />
      <GlobalSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </PageShell>
  );
}
