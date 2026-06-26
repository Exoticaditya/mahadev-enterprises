export interface LocationData {
  slug: string;
  name: string;
  type: "city" | "state";
  region: "north" | "south" | "west" | "east" | "central";
  deliveryDays: string;
  marketInsight: string;
  industryFocus: string;
  localHubs: string[];
}

export const locationCities: Record<string, Omit<LocationData, "slug" | "type">> = {
  mumbai: {
    name: "Mumbai",
    region: "west",
    deliveryDays: "4-6 days",
    marketInsight: "Mumbai's luxury fitness clubs and celebrity Pilates studios in Bandra and Juhu demand high-precision apparatus with premium wood finishes that stand up to constant commercial use.",
    industryFocus: "Bespoke studio setups, celebrity trainer collaborations, and luxury home gym integrations.",
    localHubs: ["Bandra West", "Juhu", "Colaba", "Lower Parel", "Andheri West"],
  },
  delhi: {
    name: "Delhi",
    region: "north",
    deliveryDays: "3-5 days",
    marketInsight: "Delhi's elite wellness centers in South Delhi and Vasant Vihar prioritize robust aluminium reformers and custom upholstery colors to match their high-end interior aesthetics.",
    industryFocus: "Bespoke clinical setups, high-end private residences, and hotel wellness suites.",
    localHubs: ["Vasant Vihar", "Greater Kailash", "Connaught Place", "Dwarka", "South Extension"],
  },
  bangalore: {
    name: "Bangalore",
    region: "south",
    deliveryDays: "5-7 days",
    marketInsight: "As India's tech hub, Bangalore sees high demand for corporate wellness centers and boutique fitness studios focusing on posture alignment and spine health for corporate professionals.",
    industryFocus: "Corporate fitness centers, tech park wellness lounges, and modern boutique studios.",
    localHubs: ["Indiranagar", "Koramangala", "HSR Layout", "Whitefield", "Jayanagar"],
  },
  pune: {
    name: "Pune",
    region: "west",
    deliveryDays: "4-6 days",
    marketInsight: "Pune's expanding residential townships and sports rehabilitation clinics require versatile reformer-tower combinations for comprehensive therapy programs.",
    industryFocus: "Sports rehab centers, premium township clubhouses, and wellness academy setups.",
    localHubs: ["Koregaon Park", "Kalyani Nagar", "Aundh", "Baner", "Kothrud"],
  },
  ahmedabad: {
    name: "Ahmedabad",
    region: "west",
    deliveryDays: "4-6 days",
    marketInsight: "Ahmedabad's luxury fitness market is growing rapidly, with premium residential projects demanding home-studio reformers and ladder barrels for private training.",
    industryFocus: "Luxury home installations, premium residential clubs, and corporate wellness setups.",
    localHubs: ["Satellite", "Sindhu Bhavan Road", "Bodakdev", "Bopal", "Ambawadi"],
  },
  hyderabad: {
    name: "Hyderabad",
    region: "south",
    deliveryDays: "5-7 days",
    marketInsight: "Hyderabad's premium wellness studios in Jubilee Hills and Gachibowli demand durable maple wood reformers that offer smooth carriage movement for high daily client turnovers.",
    industryFocus: "Studio chain expansion, sports physiotherapy setups, and luxury apartment clubhouses.",
    localHubs: ["Jubilee Hills", "Banjara Hills", "Gachibowli", "Madhapur", "Kondapur"],
  },
  chennai: {
    name: "Chennai",
    region: "south",
    deliveryDays: "6-8 days",
    marketInsight: "Chennai's established medical and rehabilitation centers rely on clinical-grade aluminium reformers with towers for targeted physical therapy and recovery programs.",
    industryFocus: "Physiotherapy clinics, premium hotels, and classical Pilates studios.",
    localHubs: ["Nungambakkam", "Adyar", "Mylapore", "Velachery", "Anna Nagar"],
  },
  kolkata: {
    name: "Kolkata",
    region: "east",
    deliveryDays: "6-8 days",
    marketInsight: "Kolkata's heritage properties and premium boutique fitness spaces value the timeless craftsmanship and silent mechanical performance of solid maple reformers.",
    industryFocus: "Heritage hotel wellness spaces, elite club upgrades, and home studio designs.",
    localHubs: ["Alipore", "Ballygunge", "Salt Lake", "Park Street", "New Town"],
  },
  jaipur: {
    name: "Jaipur",
    region: "north",
    deliveryDays: "4-6 days",
    marketInsight: "Jaipur's luxury heritage resorts and boutique retreat centers integrate classical Pilates reformers to offer upscale holistic health packages to international guests.",
    industryFocus: "Heritage resort wellness suites, boutique hotel fitness rooms, and royal residences.",
    localHubs: ["C-Scheme", "Malviya Nagar", "Vaishali Nagar", "Raja Park"],
  },
  rishikesh: {
    name: "Rishikesh",
    region: "north",
    deliveryDays: "1-2 days",
    marketInsight: "As our manufacturing home base, Rishikesh wellness academies and ashrams receive direct installation support and custom configurations for intensive teacher training programs.",
    industryFocus: "Yoga ashram integrations, teacher training institutes, and factory-direct local installations.",
    localHubs: ["Tapovan", "Laxman Jhula", "Ram Jhula", "Swargashram"],
  },
  gurgaon: {
    name: "Gurgaon",
    region: "north",
    deliveryDays: "3-5 days",
    marketInsight: "Gurgaon's premium high-rise penthouses and luxury fitness spaces demand space-saving foldable reformers and high-capacity studio equipment packages.",
    industryFocus: "Penthouse private studios, luxury apartment clubhouses, and corporate HQ fitness hubs.",
    localHubs: ["DLF Phase 1-5", "Golf Course Road", "Sohna Road", "Sector 56"],
  },
  chandigarh: {
    name: "Chandigarh",
    region: "north",
    deliveryDays: "3-5 days",
    marketInsight: "Chandigarh's upscale fitness communities and medical wellness centers prioritize clean designs and silent operation to create a peaceful training atmosphere.",
    industryFocus: "Executive home gyms, premium fitness centers, and rehabilitation centers.",
    localHubs: ["Sector 8", "Sector 9", "Sector 35", "Panchkula", "Mohali"],
  },
  surat: {
    name: "Surat",
    region: "west",
    deliveryDays: "4-6 days",
    marketInsight: "Surat's affluent business families install custom maple reformers in their private villas, preferring premium leather colors that match their interior decor.",
    industryFocus: "Private villa gym design, luxury commercial fitness, and premium club fit-outs.",
    localHubs: ["Dumas Road", "Vesu", "Adajan", "Piplod"],
  },
  noida: {
    name: "Noida",
    region: "north",
    deliveryDays: "3-5 days",
    marketInsight: "Noida's modern corporate complexes and growing studio networks require robust equipment bundles that are durable and easy to maintain over long periods.",
    industryFocus: "Commercial gym retrofitting, new studio launches, and corporate wellness setups.",
    localHubs: ["Sector 15", "Sector 62", "Noida Expressway", "Sector 50"],
  },
  "navi-mumbai-thane": {
    name: "Navi Mumbai & Thane",
    region: "west",
    deliveryDays: "4-6 days",
    marketInsight: "Navi Mumbai and Thane's modern high-rise clubhouses and rehabilitation studios require space-optimized reformer configurations to maximize training efficiency.",
    industryFocus: "Clubhouse gym equipment, private rehabilitation clinics, and boutique studio setups.",
    localHubs: ["Vashi", "Thane West", "Kharghar", "Nerul", "Ghodbunder Road"],
  },
};

export const locationStates: Record<string, Omit<LocationData, "slug" | "type">> = {
  maharashtra: {
    name: "Maharashtra",
    region: "west",
    deliveryDays: "4-6 days",
    marketInsight: "From Mumbai to Pune and Nagpur, Maharashtra is India's leading market for commercial Pilates equipment, with a high concentration of premium fitness centers requiring robust manufacturer warranties.",
    industryFocus: "State-wide studio rollouts, premium resort setups in Lonavala/Mahabaleshwar, and institutional athletic gyms.",
    localHubs: ["Mumbai", "Pune", "Thane", "Nagpur", "Nashik"],
  },
  karnataka: {
    name: "Karnataka",
    region: "south",
    deliveryDays: "5-7 days",
    marketInsight: "Karnataka's wellness market centers around Bangalore, Mysore, and coastal resorts, where eco-conscious design and natural wood finishes align with holistic wellness practices.",
    industryFocus: "Eco-resort wellness rooms, tech park fitness hubs, and studio setups in tier-1/2 cities.",
    localHubs: ["Bangalore", "Mysore", "Mangalore", "Hubli"],
  },
  "delhi-ncr": {
    name: "Delhi NCR",
    region: "north",
    deliveryDays: "3-5 days",
    marketInsight: "Delhi NCR (including Gurgaon and Noida) represents a highly dense market for luxury wellness services, where studio owners expect custom branding options and high-volume discount bundles.",
    industryFocus: "B2B chain supply, institutional fitness centers, and VIP residential installations.",
    localHubs: ["New Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"],
  },
  gujarat: {
    name: "Gujarat",
    region: "west",
    deliveryDays: "4-6 days",
    marketInsight: "Gujarat's rising health consciousness across Ahmedabad, Surat, and Vadodara drives commercial interest in high-durability reformers for premium gated communities and country clubs.",
    industryFocus: "Gated community wellness hubs, elite country clubs, and private luxury gyms.",
    localHubs: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  },
  "tamil-nadu": {
    name: "Tamil Nadu",
    region: "south",
    deliveryDays: "6-8 days",
    marketInsight: "Tamil Nadu's fitness landscape is driven by clinical physiotherapy demands in Chennai and wellness tourism along the ECR and Ooty, focusing on posture recovery and rehabilitation.",
    industryFocus: "ECR resort gym installations, clinical setups, and university sports wellness centers.",
    localHubs: ["Chennai", "Coimbatore", "Madurai", "Trichy", "Ooty"],
  },
  telangana: {
    name: "Telangana",
    region: "south",
    deliveryDays: "5-7 days",
    marketInsight: "Telangana's IT and medical sectors drive wellness demand, with Hyderabad leading in high-end studio setups that incorporate both maple wood and clinical aluminium reformer models.",
    industryFocus: "Boutique studio fit-outs, sports rehab centers, and IT corporate wellness lounges.",
    localHubs: ["Hyderabad", "Warangal", "Secunderabad"],
  },
  uttarakhand: {
    name: "Uttarakhand",
    region: "north",
    deliveryDays: "1-2 days",
    marketInsight: "As the birthplace of our brand, Uttarakhand's wellness retreats in Rishikesh and Dehradun enjoy fast delivery and direct installation support for yoga and Pilates hybrid spaces.",
    industryFocus: "Ashram fitness rooms, luxury spa resorts, and local boutique teacher training centers.",
    localHubs: ["Rishikesh", "Dehradun", "Haridwar", "Mussoorie"],
  },
  "west-bengal": {
    name: "West Bengal",
    region: "east",
    deliveryDays: "6-8 days",
    marketInsight: "West Bengal's Pilates market is growing steadily around Kolkata and Darjeeling resorts, with a preference for solid wood craftsmanship that mirrors natural, artistic studio styles.",
    industryFocus: "Hill resort spas, luxury urban wellness clubs, and private home installations.",
    localHubs: ["Kolkata", "Siliguri", "Darjeeling", "Durgapur"],
  },
  rajasthan: {
    name: "Rajasthan",
    region: "north",
    deliveryDays: "4-6 days",
    marketInsight: "Rajasthan's world-famous heritage hotel and luxury palace resort sectors require top-tier Pilates apparatus to cater to wellness tourism and international guest expectations.",
    industryFocus: "Palace resort wellness centers, heritage spa suites, and high-end residential fitness.",
    localHubs: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
  },
  "punjab-haryana": {
    name: "Punjab & Haryana",
    region: "north",
    deliveryDays: "3-5 days",
    marketInsight: "Punjab and Haryana's premium gym chains and sports training academies choose heavy-duty commercial reformers built for strength training and athletic conditioning.",
    industryFocus: "Athletic conditioning setups, large-format commercial gyms, and luxury farmhouses.",
    localHubs: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Gurgaon"],
  },
};

export function getLocationData(slug: string): LocationData | null {
  const parts = slug.split("pilates-equipment-");
  if (parts.length < 2) return null;
  const key = parts[1];

  if (locationCities[key]) {
    return {
      slug,
      type: "city",
      ...locationCities[key],
    };
  }

  if (locationStates[key]) {
    return {
      slug,
      type: "state",
      ...locationStates[key],
    };
  }

  return null;
}
