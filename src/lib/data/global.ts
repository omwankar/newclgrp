export type GlobalOffice = {
  flag: string;
  country: string;
  city: string;
  role: string;
  address: string;
  phone: string;
  email: string;
  services: string[];
  employees: string;
  established: string;
};

export const globalOffices: GlobalOffice[] = [
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    city: "London",
    role: "Global Headquarters",
    address: "42 Canary Wharf, London E14 5AB",
    phone: "+44 20 7946 0958",
    email: "hq@clarusto.com",
    services: ["Group Strategy", "Technology HQ", "European Logistics Hub"],
    employees: "85",
    established: "1994",
  },
  {
    flag: "🇦🇪",
    country: "United Arab Emirates",
    city: "Dubai",
    role: "Middle East Hub",
    address: "DIFC Gate Village 3, Dubai",
    phone: "+971 4 567 8901",
    email: "uae@clarusto.com",
    services: ["Freight Forwarding", "Gulf Trade Corridors", "IT Services"],
    employees: "42",
    established: "2012",
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    city: "Frankfurt",
    role: "European Operations",
    address: "Mainzer Landstraße 50, Frankfurt",
    phone: "+49 69 1234 5678",
    email: "de@clarusto.com",
    services: ["Cross-Border Logistics", "Customs Coordination", "Cloud Services"],
    employees: "28",
    established: "2015",
  },
  {
    flag: "🇨🇳",
    country: "China",
    city: "Shanghai",
    role: "Asia Pacific Hub",
    address: "Pudong New Area, Shanghai 200120",
    phone: "+86 21 5678 9012",
    email: "cn@clarusto.com",
    services: ["Manufacturing Logistics", "Sea & Air Freight", "Supply Chain"],
    employees: "56",
    established: "2011",
  },
  {
    flag: "🇮🇳",
    country: "India",
    city: "Mumbai",
    role: "South Asia Operations",
    address: "Bandra Kurla Complex, Mumbai 400051",
    phone: "+91 22 4567 8901",
    email: "in@clarusto.com",
    services: ["Tech Development", "Port Logistics", "Digital Transformation"],
    employees: "64",
    established: "2024",
  },
  {
    flag: "🇸🇦",
    country: "Saudi Arabia",
    city: "Riyadh",
    role: "Gulf Region Hub",
    address: "King Fahd Road, Riyadh 11564",
    phone: "+966 11 234 5678",
    email: "sa@clarusto.com",
    services: ["GCC Freight", "Energy Sector Logistics", "Infrastructure IT"],
    employees: "31",
    established: "2024",
  },
];

export const regionalStats = [
  { region: "Europe", shipments: "4,200", growth: "+12%", clients: "180" },
  { region: "Middle East", shipments: "3,800", growth: "+18%", clients: "145" },
  { region: "Asia Pacific", shipments: "5,600", growth: "+22%", clients: "210" },
  { region: "South Asia", shipments: "1,400", growth: "+35%", clients: "62" },
] as const;

export const tradeCorridors = [
  { route: "UK ↔ UAE", volume: "High", mode: "Sea & Air", avgDays: "12–18" },
  { route: "UK ↔ China", volume: "Very High", mode: "Sea", avgDays: "28–35" },
  { route: "UAE ↔ India", volume: "High", mode: "Sea & Air", avgDays: "5–8" },
  { route: "Germany ↔ China", volume: "Medium", mode: "Rail & Sea", avgDays: "18–25" },
  { route: "UAE ↔ Saudi Arabia", volume: "Medium", mode: "Road & Air", avgDays: "2–4" },
  { route: "UK ↔ Germany", volume: "High", mode: "Road", avgDays: "2–3" },
] as const;
