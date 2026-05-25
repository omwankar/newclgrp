import { defineImage, unsplashPhoto, type SiteImage } from "@/lib/unsplash";

/**
 * Central image registry — one Unsplash photo ID per slot.
 * Format: https://images.unsplash.com/photo-[ID]?w=[width]&q=80
 * Verify after edits: node scripts/verify-images.mjs
 */
export const heroImages = {
  home: {
    ...defineImage(
      "1486406146926-c627a92ad1ab",
      "Global business skyline at dusk",
      "skyscraper,business",
      1920
    ),
    visual: defineImage(
      "1517248135467-4c7edcad34c4",
      "Modern open-plan office workspace",
      "office,workspace",
      900
    ),
  },
  about: {
    ...defineImage(
      "1497366216548-37526070297c",
      "Modern corporate office corridor",
      "office,corporate",
      1920
    ),
    visual: defineImage(
      "1542744173-8e7e53415bb0",
      "Executive team collaborating in a strategy session",
      "team,meeting",
      700
    ),
  },
  companies: defineImage(
    "1504384308090-c894fdcc538d",
    "Team collaborating in a bright open office",
    "team,collaboration",
    1920
  ),
  global: {
    ...defineImage(
      "1451187580459-43490279c0fa",
      "Earth from space — global connectivity",
      "earth,global",
      1920
    ),
    position: "center 40%",
  },
  insights: defineImage(
    "1504711434969-e33886168f5c",
    "Business news and media analytics",
    "news,business",
    1920
  ),
  contact: defineImage(
    "1423666639041-f56000c27a9a",
    "Professional communication and contact",
    "telephone,contact",
    1920
  ),
  technology: defineImage(
    "1558494949-ef010cbdcc31",
    "Server room and digital infrastructure",
    "server,technology",
    1920
  ),
  logistics: defineImage(
    "1494412519320-aa613dfb7738",
    "Cargo ship at port during golden hour",
    "cargo,ship",
    1920
  ),
} as const;

export const sectionImages = {
  homeAbout: defineImage(
    "1497366811353-6870744d04b2",
    "Bright modern office interior",
    "office,interior",
    1600
  ),
  homeAboutVisual: defineImage(
    "1600880292203-757bb62b4baf",
    "Business professionals collaborating in a strategy meeting",
    "meeting,collaboration",
    700
  ),
  homeCompanies: defineImage(
    "1522071820081-009f0129c71c",
    "Diverse business team working together",
    "teamwork,collaboration",
    1600
  ),
  homeTechCard: defineImage(
    "1518770660439-4636190af475",
    "Technology circuit board close-up",
    "technology,circuit",
    900
  ),
  homeLogiCard: defineImage(
    "1586528116311-ad8dd3c8310d",
    "Shipping containers at a freight terminal",
    "shipping,containers",
    900
  ),
  homeGlobal: defineImage(
    "1449824913935-59a10b8d2000",
    "Global city skyline at night",
    "city,skyline",
    1600
  ),
  homeNews: defineImage(
    "1551288049-bebda4e38f71",
    "Business analytics dashboard on screen",
    "analytics,data",
    1600
  ),

  aboutMission: defineImage(
    "1454165804606-c3d57bc86b40",
    "Business planning and strategy session",
    "strategy,planning",
    1600
  ),
  aboutEcosystem: defineImage(
    "1600880292203-757bb62b4baf",
    "Business professionals in a collaborative meeting",
    "meeting,collaboration",
    1600
  ),
  aboutTimeline: defineImage(
    "1514565131-fce0801e5785",
    "Historic city architecture representing company heritage",
    "architecture,city",
    1600
  ),

  globalMap: defineImage(
    "1779388947941-b2e51a09285c",
    "Digital world map showing global connectivity",
    "world-map,global",
    1600
  ),
  globalOffices: defineImage(
    "1578575437130-527eed3abbec",
    "International shipping containers at a trade port",
    "shipping,trade",
    1600
  ),
  globalCorridors: defineImage(
    "1436491865332-7a61a109cc05",
    "Commercial aircraft representing air freight routes",
    "airplane,freight",
    1600
  ),

  companiesLeadership: defineImage(
    "1560472354-b33ff0c44a43",
    "Executive reviewing business performance data",
    "leadership,analytics",
    1600
  ),
  companiesPartnership: defineImage(
    "1779126317012-f17da975c792",
    "Business partners shaking hands on a deal",
    "handshake,partnership",
    1600
  ),

  contactForm: defineImage(
    "1551836022-d5d88e9218df",
    "Business professionals in a client meeting",
    "meeting,business",
    1600
  ),

  insightsGrid: defineImage(
    "1460925895917-afdab827c52f",
    "Financial analytics charts on a laptop",
    "charts,finance",
    1600
  ),

  techServices: defineImage(
    "1485827404703-89b55fcc595e",
    "Robotic automation in a technology environment",
    "automation,technology",
    1600
  ),
  techProcess: defineImage(
    "1555949963-aa79dcee981c",
    "Software developer writing code",
    "coding,software",
    1600
  ),
  techInsights: defineImage(
    "1486312338219-ce68d2c6f44d",
    "Professional working on a laptop remotely",
    "laptop,remote-work",
    1600
  ),
  techHeroVisual: defineImage(
    "1550751827-4bd374c3f58b",
    "Cybersecurity and network infrastructure concept",
    "cybersecurity,network",
    900
  ),

  logiServices: defineImage(
    "1711035412501-a2e8056e2349",
    "Large cargo ship loaded with containers in harbor",
    "cargo-ship,port",
    1600
  ),
  logiRoutes: defineImage(
    "1581091226825-a6a2a5aee158",
    "Modern warehouse with inventory operations",
    "warehouse,inventory",
    1600
  ),
  logiInsights: defineImage(
    "1778546977770-f6c609485be0",
    "Freight logistics and transportation operations",
    "freight,logistics",
    1600
  ),
  logiHeroVisual: defineImage(
    "1774929106256-b9b0eb60a733",
    "Cargo ship being loaded at an international port",
    "port,cranes",
    900
  ),

  companiesDivisions: defineImage(
    "1504384308090-c894fdcc538d",
    "Collaborative team in a modern workspace",
    "team,workspace",
    1600
  ),
  homeContact: defineImage(
    "1423666639041-f56000c27a9a",
    "Professional business communication",
    "contact,business",
    1600
  ),
  articleBody: defineImage(
    "1504711434969-e33886168f5c",
    "Editorial workspace with business news",
    "editorial,news",
    1600
  ),
  articleRelated: defineImage(
    "1551288049-bebda4e38f71",
    "Data analytics and industry insights",
    "analytics,insights",
    1600
  ),
} as const;

export const divisionImages = {
  technology: sectionImages.homeTechCard,
  logistics: sectionImages.homeLogiCard,
} as const;

export const articleImages = {
  cybersecurity: defineImage(
    "1563986768609-322da13575f3",
    "Cybersecurity dashboard on multiple screens",
    "cybersecurity,hacking",
    900
  ),
  supplyChain: defineImage(
    "1779464433263-35e2c02d1cc8",
    "Cargo containers stacked at an international port",
    "supply-chain,containers",
    600
  ),
  globalTrade: defineImage(
    "1526304640581-d334cdbbf45e",
    "Global currency and international trade concept",
    "currency,trade",
    600
  ),
  cloudInfra: defineImage(
    "1667984390538-3dea7a3fe33d",
    "Cloud computing servers and digital infrastructure",
    "cloud-server,technology",
    600
  ),
  customs: defineImage(
    "1707120507473-c4277b3134cf",
    "Cargo ship at harbor representing customs and import",
    "customs,import",
    600
  ),
  expansion: defineImage(
    "1552664730-d307ca884978",
    "Corporate team planning international expansion",
    "expansion,corporate",
    600
  ),
  automation: defineImage(
    "1773332585698-cba3c91b73e4",
    "Artificial intelligence and business automation concept",
    "ai,automation",
    600
  ),
  containerRates: defineImage(
    "1779040470142-5c8f1c8fc73a",
    "Large container ship at sea",
    "container-ship,shipping",
    600
  ),
  airFreight: defineImage(
    "1777116603323-ee9f48e5fbb7",
    "Cargo operations at an international port",
    "air-freight,port",
    600
  ),
} as const;

/** Insight preview cards on technology / logistics pages */
export const previewImages = {
  techPost1: articleImages.cybersecurity,
  techPost2: articleImages.cloudInfra,
  techPost3: articleImages.automation,
  logiPost1: articleImages.supplyChain,
  logiPost2: articleImages.containerRates,
  logiPost3: articleImages.customs,
} as const;

export type HeroVariant = "default" | "gold" | "tech" | "logi";

/** Pick `.src` from a SiteImage or plain string (legacy). */
export function imageSrc(image: SiteImage | string): string {
  return typeof image === "string" ? image : image.src;
}

/** Re-export for width overrides */
export { unsplashPhoto };
