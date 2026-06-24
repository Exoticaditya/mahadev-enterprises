export const site = {
  name: "Mahadev Enterprises",
  slogan: "Premium Pilates equipment and wellness studio solutions from Rishikesh.",
  description:
    "Mahadev Enterprises designs and supplies premium Pilates equipment, wellness products, and studio solutions for luxury yoga, fitness, hospitality, and export buyers.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadev-enterprises.vercel.app",
  email: "indiamahadeventerprises@gmail.com",
  phone: "+91 90121 12527",
  whatsapp: "https://wa.me/919012112527",
  instagram: "https://www.instagram.com/mahadev_enterprises_india?igsh=enJqOXFhMjl5bXA=",
  address: "Rishikesh, Uttarakhand, India",
  catalogueHref: "/catalogue/mahadev-enterprises-catalogue.pdf",
  socialImage: "/social/og-home.svg",
  heroImages: {
    desktop: "/hero/hero-desktop.jpg",
    mobile: "/hero/hero-mobile.jpg",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { label: "Studio-grade models", value: "11+" },
  { label: "Material families", value: "2" },
  { label: "Buyer segments served", value: "8" },
  { label: "Commercial focus", value: "B2B" },
] as const;

export const trustSignals = [
  "Studio-grade construction",
  "Premium material palette",
  "Export-ready communication",
  "Consultative enquiry flow",
] as const;

export const products = [
  {
    slug: "maple-reformer-with-tower",
    model: "M-01",
    title: "Maple Reformer With Tower",
    category: "Pilates Reformer",
    summary: "Studio foundation piece for full-body conditioning and core stability.",
    description:
      "A premium studio-grade reformer built for fluid movement, durability, and quiet performance in high-end Pilates environments.",
    features: [
      "Maple or rubber wood frame",
      "Six-spring resistance system",
      "High-density foam padding",
      "Custom upholstery options",
    ],
    materials: ["Maple wood", "High-density foam", "Leather upholstery", "Stainless steel hardware"],
    dimensions: "228 x 73 x 34.7 cm",
    weight: "92 kg",
    idealFor: ["Pilates studios", "Luxury wellness centres", "Physiotherapy-led movement spaces"],
    image: "/catalogue/products/m-01-maple-reformer.jpg",
  },
  {
    slug: "reformer-with-tower",
    model: "M-02",
    title: "Reformer With Tower",
    category: "Pilates Reformer",
    summary: "Advanced vertical training system for comprehensive resistance work.",
    description:
      "Combines standard reformer training with tower-based resistance for 3D movement, rehab support, and advanced routines.",
    features: [
      "Stainless steel tower frame",
      "Precision-balanced pulley system",
      "Roll-up pole and straps included",
      "Multi-angle resistance",
    ],
    materials: ["Maple wood", "Stainless steel", "Leather upholstery"],
    dimensions: "230 x 75 x 34.5 cm",
    weight: "119 kg",
    idealFor: ["Boutique Pilates studios", "Rehab studios", "Performance movement spaces"],
    image: "/catalogue/products/m-02-reformer-tower.jpg",
  },
  {
    slug: "aluminium-reformer-with-tower",
    model: "M-03",
    title: "Aluminium Reformer With Tower",
    category: "Pilates Reformer",
    summary: "Lightweight, corrosion-resistant platform for postural and rehabilitation work.",
    description:
      "An ergonomic reformer designed for controlled movement, rehabilitation, and efficient studio maintenance with a durable aluminium frame.",
    features: [
      "Corrosion-resistant frame",
      "Rehabilitation-friendly geometry",
      "Low-impact strengthening support",
      "Safe and durable structure",
    ],
    materials: ["Aluminium", "Stainless steel", "Performance upholstery"],
    dimensions: "240 x 70 x 200 cm",
    weight: "65-85 kg",
    idealFor: ["Rehab clinics", "Clinical Pilates studios", "Hybrid wellness spaces"],
    image: "/catalogue/products/m-03-aluminium-reformer.jpg",
  },
  {
    slug: "classic-cadillac-frame",
    model: "M-04",
    title: "Classic Cadillac Frame",
    category: "Pilates Cadillac",
    summary: "Heavy-duty steel overhead trapeze structure for targeted B2B rehabilitation.",
    description:
      "A studio-grade overhead Cadillac frame engineered for premium spinal therapy, full-body resistance, and deep core conditioning.",
    features: [
      "Stainless steel overhead frame",
      "Comprehensive spring attachment points",
      "Stable non-slip base setup",
      "Professional safety straps included",
    ],
    materials: ["Stainless steel", "Heavy-duty steel hardware"],
    dimensions: "220 x 70 x 205 cm",
    weight: "75 kg",
    idealFor: ["Boutique Pilates studios", "Physiotherapy clinics", "Luxury retreat centers"],
    image: "/catalogue/products/m-04-cadillac-frame.jpg",
  },
  {
    slug: "caformer-cadillac-reformer",
    model: "M-05",
    title: "Caformer (Cadillac & Reformer)",
    category: "Hybrid Studio System",
    summary: "Complete 3-in-1 hybrid system combining reformer, tower, and cadillac features.",
    description:
      "Saves valuable studio floor space by integrating full Cadillac trapeze utility with a premium sliding reformer bed and spring tower setup.",
    features: [
      "Hybrid multi-mode frame",
      "Seamless carriage transitions",
      "Full spring and pulley set",
      "Reformer box and jumpboard included",
    ],
    materials: ["Maple wood", "Stainless steel", "Commercial upholstery"],
    dimensions: "230 x 75 x 205 cm",
    weight: "128 kg",
    idealFor: ["Space-constrained studios", "Private movement spaces", "Premium wellness suites"],
    image: "/catalogue/products/m-05-cadillac-with-reformer.jpg",
  },
  {
    slug: "maple-ladder-barrel",
    model: "M-06",
    title: "Maple Ladder Barrel",
    category: "Spinal Conditioning",
    summary: "Classic wood ladder barrel for active spinal alignment and core flexibility.",
    description:
      "Engineered with reinforced solid wood rungs and an adjustable sliding base to support deep stretching and abdominal conditioning for various body types.",
    features: [
      "Adjustable sliding frame base",
      "Solid maple wood ladder rungs",
      "High-density foam curved barrel",
      "Safe lock adjustment handles",
    ],
    materials: ["Maple wood", "High-density foam", "Antibacterial leather"],
    dimensions: "115 x 65 x 90 cm",
    weight: "38 kg",
    idealFor: ["Boutique Pilates studios", "Rehabilitation facilities", "Home wellness spaces"],
    image: "/catalogue/products/m-06-ladder-barrel.jpg",
  },
  {
    slug: "wunda-chair",
    model: "M-07",
    title: "Wunda Chair",
    category: "Compact Strength",
    summary: "Refined split-pedal chair for stability, posture, and localized lower-body power.",
    description:
      "A compact force-building platform featuring adjustable resistance spring hooks and removable handles designed to optimize client stability.",
    features: [
      "Split-pedal resistance setup",
      "Adjustable tension spring system",
      "Removable comfort handles",
      "Compact floor-space footprint",
    ],
    materials: ["Maple wood", "Steel springs", "Premium leather cover"],
    dimensions: "78 x 62 x 60 cm",
    weight: "28 kg",
    idealFor: ["Small group classes", "Boutique Pilates studios", "Rehabilitation spaces"],
    image: "/catalogue/products/m-07-wunda-chair.jpg",
  },
  {
    slug: "pilates-mat-system",
    model: "M-08",
    title: "Pilates Mat System",
    category: "Wall Unit & Mat Work",
    summary: "Premium wall tower unit with a comfortable folding mat setup.",
    description:
      "A space-saving wall-mounted resistance unit integrated with a padded floor mat, ideal for core posture work and rehabilitation exercises.",
    features: [
      "Wall-mounted tower layout",
      "Foldable padded floor mat",
      "Adjustable resistance bars",
      "Multi-angle spring attachments",
    ],
    materials: ["Stainless steel", "High-density foam", "Premium leather upholstery"],
    dimensions: "210 x 68 x 50 cm",
    weight: "45 kg",
    idealFor: ["Clinical movement spaces", "Boutique group studios", "Home gyms"],
    image: "/catalogue/products/m-08-mat-system.jpg",
  },
  {
    slug: "pilates-props-kit",
    model: "M-09",
    title: "Pilates Props Kit",
    category: "Studio Accessories",
    summary: "Essential accessory set for balance correction, posture support, and resistance extensions.",
    description:
      "A curated collection of professional-grade Pilates accessories including magic circles, resistance bands, and alignment rollers to expand studio programming.",
    features: [
      "Commercial-grade materials",
      "Versatile core workout extensions",
      "Lightweight and easy storage",
      "Suitable for all client levels",
    ],
    materials: ["Composite rubber", "High-density foam", "Microfiber webbing"],
    dimensions: "Various sizes",
    weight: "5 kg",
    idealFor: ["Boutique studios", "Private movement instructors", "Home practitioners"],
    image: "/catalogue/products/m-09-props-kit.jpg",
  },
  {
    slug: "pilates-ball-collection",
    model: "M-10",
    title: "Pilates Ball Collection",
    category: "Studio Accessories",
    summary: "High-durability stability and toning balls for balance and core engagement.",
    description:
      "A range of commercial-grade weighted toning balls and anti-burst stability balls designed to challenge core balance and joint stabilization.",
    features: [
      "Anti-burst safety structure",
      "Commercial B2B weight variety",
      "Non-slip grip texture",
      "Includes inflation pump kit",
    ],
    materials: ["Durable PVC", "Weighted sand filling"],
    dimensions: "Various diameters",
    weight: "8 kg",
    idealFor: ["Group Pilates classes", "Physiotherapy clinics", "Wellness retreat programming"],
    image: "/catalogue/products/m-10-ball-collection.jpg",
  },
  {
    slug: "pilates-starter-bundle",
    model: "M-11",
    title: "Pilates Starter Bundle",
    category: "Starter Bundles",
    summary: "All-in-one introductory setup containing essential blocks, mats, and bands.",
    description:
      "The perfect starter pack for new Pilates studios or private home gym installations, offering complete core accessories at package pricing.",
    features: [
      "Complete accessory assortment",
      "Premium carrying strap case",
      "Highly durable foam blocks",
      "Antibacterial alignment mat",
    ],
    materials: ["Natural cork", "TPE foam", "Woven fabric bands"],
    dimensions: "Standard package box",
    weight: "12 kg",
    idealFor: ["New wellness studios", "Home gym startups", "Yoga and Pilates schools"],
    image: "/catalogue/products/m-11-starter-bundle.jpg",
  },
] as const;

export const solutionImages = {
  pilatesStudios: "/solutions/pilates-studio.jpg",
  yogaStudios: "/solutions/yoga-studio.jpg",
  yogaSchools: "/solutions/therapy-clinic.jpg",
  hotelsAndResorts: "/solutions/hotel-wellness.jpg",
  retreatCentres: "/solutions/retreat-centre.jpg",
  wellnessBrands: "/solutions/residential-wellness.jpg",
  interiorDesigners: "/solutions/international-hospitality.jpg",
  internationalBuyers: "/solutions/corporate-wellness.jpg",
} as const;

export const solutions = [
  {
    slug: "pilates-studios",
    title: "Pilates Studios",
    summary: "Premium studio apparatus, spatial coherence, and commercial-grade reliability.",
    benefits: ["Studio-grade equipment", "Consistent material language", "Professional enquiry handling"],
    image: solutionImages.pilatesStudios,
  },
  {
    slug: "yoga-studios",
    title: "Yoga Studios",
    summary: "Calm, durable wellness equipment that supports teaching and client trust.",
    benefits: ["Premium support products", "Bulk ordering options", "Calm brand alignment"],
    image: solutionImages.yogaStudios,
  },
  {
    slug: "yoga-schools",
    title: "Yoga Schools",
    summary: "Reliable supply for training spaces, workshops, and teacher development environments.",
    benefits: ["Training-friendly support", "Repeat procurement", "Scalable supply logic"],
    image: solutionImages.yogaSchools,
  },
  {
    slug: "hotels-and-resorts",
    title: "Hotels and Resorts",
    summary: "Elevated wellness furnishing for guest-facing experiences and signature spaces.",
    benefits: ["Elegant guest perception", "Procurement confidence", "Commercial suitability"],
    image: solutionImages.hotelsAndResorts,
  },
  {
    slug: "retreat-centres",
    title: "Retreat Centres",
    summary: "Refined, calming equipment that supports immersive and premium retreat programming.",
    benefits: ["Atmospheric alignment", "Bulk supply support", "International buyer trust"],
    image: solutionImages.retreatCentres,
  },
  {
    slug: "wellness-brands",
    title: "Wellness Brands",
    summary: "Consistent, design-led product supply for branded wellness ecosystems.",
    benefits: ["Brand coherence", "Repeatable supply", "Premium visual language"],
    image: solutionImages.wellnessBrands,
  },
  {
    slug: "interior-designers",
    title: "Interior Designers",
    summary: "Specification-ready equipment and material clarity for commercial wellness spaces.",
    benefits: ["Finish clarity", "Styling context", "Specification support"],
    image: solutionImages.interiorDesigners,
  },
  {
    slug: "international-buyers",
    title: "International Buyers",
    summary: "Export-ready communication for partners evaluating premium Indian wellness supply.",
    benefits: ["Clear export path", "Fast response", "Brand trust signals"],
    image: solutionImages.internationalBuyers,
  },
] as const;

export const testimonials = [
  {
    quote:
      "The equipment quality and presentation immediately felt aligned with the kind of studio environment we wanted to create.",
    name: "Boutique Pilates Studio Owner",
    context: "Commercial Pilates rollout",
  },
  {
    quote:
      "Mahadev Enterprises understood the balance between visual refinement and practical procurement far better than most suppliers.",
    name: "Hospitality Procurement Lead",
    context: "Wellness suite sourcing",
  },
  {
    quote:
      "The communication was direct, professional, and suited to the expectations of a design-led project.",
    name: "Interior Designer",
    context: "Luxury retreat fit-out",
  },
] as const;

export const faqs = [
  {
    question: "Do you work with bulk and commercial orders?",
    answer:
      "Yes. The site is structured for studio, hospitality, retreat, and international buyers who require reliable commercial supply.",
  },
  {
    question: "Can I request a catalogue or product list?",
    answer:
      "Yes. The catalogue download is available throughout the site and the enquiry form can be used to request a curated proposal.",
  },
  {
    question: "Do you support export enquiries?",
    answer:
      "Yes. Export-facing content, contact clarity, and international buyer pathways are part of the site strategy.",
  },
  {
    question: "Are the products suitable for premium studios?",
    answer:
      "The product architecture emphasizes studio-grade reformers, compact strength tools, and commercial-quality finish options.",
  },
  {
    question: "Can designers or specifiers use the site for projects?",
    answer:
      "Yes. The product pages and solution pages are designed to support specification, material review, and project suitability checks.",
  },
] as const;

export const journalPosts = [
  {
    slug: "choosing-the-right-pilates-reformer-for-your-studio",
    title: "Choosing the Right Pilates Reformer for Your Studio",
    summary: "A practical guide to model selection, footprint, and procurement confidence.",
    date: "2026-06-24",
  },
  {
    slug: "designing-a-wellness-space-that-feels-premium",
    title: "Designing a Wellness Space That Feels Premium",
    summary: "How material tone, spatial rhythm, and equipment choice shape perception.",
    date: "2026-06-24",
  },
  {
    slug: "what-international-buyers-look-for-in-an-indian-supplier",
    title: "What International Buyers Look for in an Indian Supplier",
    summary: "The trust signals and content structure that support export conversations.",
    date: "2026-06-24",
  },
] as const;

export const seoLandingPages = [
  {
    slug: "pilates-equipment-supplier-india",
    title: "Pilates Equipment Supplier in India",
    summary: "Premium studio-grade Pilates equipment for domestic and international buyers.",
  },
  {
    slug: "yoga-props-supplier-india",
    title: "Yoga Props Supplier in India",
    summary: "Curated yoga props and wellness essentials with a premium brand presentation.",
  },
  {
    slug: "wellness-product-supplier-rishikesh",
    title: "Wellness Product Supplier in Rishikesh",
    summary: "High-trust wellness supply with a luxury positioning from Rishikesh, India.",
  },
  {
    slug: "commercial-yoga-studio-products",
    title: "Commercial Yoga Studio Products",
    summary: "Solutions for studios, schools, and retreat centres requiring dependable supply.",
  },
  {
    slug: "premium-studio-wellness-supplier",
    title: "Premium Studio Wellness Supplier",
    summary: "Design-led wellness equipment for luxury hospitality and commercial spaces.",
  },
] as const;

export const contactPoints = [
  { label: "Phone", value: site.phone, href: "tel:+919012112527" },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "WhatsApp", value: "Chat on WhatsApp", href: site.whatsapp },
  { label: "Instagram", value: "@mahadev_enterprises_india", href: site.instagram },
] as const;
