export const site = {
  name: "Mahadev Enterprises",
  slogan: "Premium Pilates equipment and wellness studio solutions from Rishikesh.",
  description:
    "Mahadev Enterprises designs and supplies premium Pilates equipment, wellness products, and studio solutions for luxury yoga, fitness, hospitality, and export buyers.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahadev-enterprises.vercel.app",
  email: "indiamahadeventerprises@gmail.com",
  phone: "+91 90121 12527",
  whatsapp: "https://wa.me/919012112527",
  address: "Rishikesh, Uttarakhand, India",
  catalogueHref: "/catalogue/mahadev-enterprises-catalogue.pdf",
  socialImage: "/social/og-home.png",
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
    image: "/catalogue/m-01-maple-reformer-with-tower.png",
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
    image: "/catalogue/m-02-reformer-with-tower.png",
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
    image: "/catalogue/m-03-aluminium-reformer-with-tower.png",
  },
  {
    slug: "foldable-reformer",
    model: "M-04",
    title: "Foldable Reformer",
    category: "Space-saving Pilates",
    summary: "Compact reformer concept for smaller studios without compromise.",
    description:
      "A versatile foldable reformer with mobile cushion, adjustable column, and varied exercise accessories for efficient footprint management.",
    features: [
      "Easy-fold mechanism",
      "Jump board included",
      "Reformer box included",
      "Portable and space-aware design",
    ],
    materials: ["Maple wood", "Leather upholstery", "Steel hardware"],
    dimensions: "230 x 69 x 58 cm",
    weight: "65-85 kg",
    idealFor: ["Home studios", "Compact studios", "Temporary training spaces"],
    image: "/catalogue/m-04-foldable-reformer.png",
  },
  {
    slug: "the-cadillac",
    model: "M-05",
    title: "The Cadillac",
    category: "Trapeze Table",
    summary: "Comprehensive rehabilitation powerhouse for advanced movement education.",
    description:
      "A complete trapeze table with overhead frame and spring system designed for targeted limb work, flexibility, and studio-level rehabilitation.",
    features: [
      "Full overhead trapeze frame",
      "Extensive spring kit",
      "Stable padded platform",
      "Multi-modal exercise support",
    ],
    materials: ["Maple wood", "Stainless steel", "Antibacterial leather cover"],
    dimensions: "217 x 69 x 57 cm",
    weight: "65-85 kg",
    idealFor: ["Advanced Pilates studios", "Rehabilitation centres", "Luxury movement labs"],
    image: "/catalogue/m-05-the-cadillac.png",
  },
  {
    slug: "3-in-1-caformer",
    model: "M-06",
    title: "3-in-1 Caformer",
    category: "Hybrid Studio System",
    summary: "Reformer, Cadillac, and mat work in a single professional footprint.",
    description:
      "A hybrid training system that supports the widest range of exercises with seamless mode transitions for sophisticated studio programming.",
    features: [
      "Hybrid studio footprint",
      "Heavy-duty build",
      "Mode switching efficiency",
      "Comprehensive exercise coverage",
    ],
    materials: ["Maple wood", "Stainless steel", "Commercial upholstery"],
    dimensions: "228 x 85 x 57 cm",
    weight: "165-169 kg",
    idealFor: ["Premium studios", "Studio owners with limited space", "High-intent commercial buyers"],
    image: "/catalogue/m-06-3-in-1-caformer.png",
  },
  {
    slug: "ladder-barrel",
    model: "M-07",
    title: "Ladder Barrel",
    category: "Spinal Conditioning",
    summary: "Spinal alignment and flexibility specialist for targeted control.",
    description:
      "Designed for deep stretching, spinal decompression, and core strength with adjustable settings for a broad range of body types.",
    features: [
      "Adjustable sliding base",
      "Reinforced ladder rungs",
      "High-density foam barrel",
      "Stable and supportive geometry",
    ],
    materials: ["Maple wood", "High-density foam", "Leather upholstery"],
    dimensions: "112 x 63 x 89 cm",
    weight: "30-40 kg",
    idealFor: ["Pilates studios", "Mobility work", "Flexibility programmes"],
    image: "/catalogue/m-07-ladder-barrel.png",
  },
  {
    slug: "wunda-chair",
    model: "M-08",
    title: "Wunda Chair",
    category: "Compact Strength",
    summary: "Minimal footprint tool for balance, coordination, and lower body strength.",
    description:
      "A pedal-based Pilates system for core and lower-body work that fits elegant studio layouts without consuming valuable space.",
    features: [
      "Adjustable spring tension",
      "Compact footprint",
      "Removable stability handles",
      "Studio-friendly mobility",
    ],
    materials: ["Maple wood", "Steel spring system", "Leather cover"],
    dimensions: "79 x 65 x 60 cm",
    weight: "25-30 kg",
    idealFor: ["Small studios", "Accessory programming", "Strength and control work"],
    image: "/catalogue/m-08-wunda-chair.png",
  },
  {
    slug: "aluminium-wunda-chair",
    model: "M-09",
    title: "Aluminium Wunda Chair",
    category: "Compact Strength",
    summary: "Corrosion-resistant chair for controlled strength and posture work.",
    description:
      "A refined compact chair concept for full-body strength, coordination, and resistance-based movement in demanding studio environments.",
    features: [
      "Corrosion-resistant frame",
      "Postural control support",
      "Adaptive resistance system",
      "Durable commercial build",
    ],
    materials: ["Aluminium", "Stainless steel", "Leather cover"],
    dimensions: "80 x 70 x 130 cm",
    weight: "40-50 kg",
    idealFor: ["Premium studios", "High-turnover commercial use", "Lower maintenance environments"],
    image: "/catalogue/m-09-aluminium-wunda-chair.png",
  },
  {
    slug: "aluminium-ladder-barrel",
    model: "M-10",
    title: "Aluminium Ladder Barrel",
    category: "Spinal Flexibility",
    summary: "Premium barrel unit for extension, alignment, and controlled mobility work.",
    description:
      "A strong, refined ladder barrel for spinal extension, core strengthening, and advanced flexibility programming with a durable frame.",
    features: [
      "Sliding base adjustment",
      "Curved barrel support",
      "Multi-exercise versatility",
      "Commercial-grade durability",
    ],
    materials: ["Aluminium", "Stainless steel", "Padding and leather cover"],
    dimensions: "120 x 90 x 100 cm",
    weight: "35-50 kg",
    idealFor: ["Pilates studios", "Rehab spaces", "Commercial movement centres"],
    image: "/catalogue/m-10-aluminium-ladder-barrel.png",
  },
  {
    slug: "spine-corrector",
    model: "M-11",
    title: "Spine Corrector",
    category: "Postural Alignment",
    summary: "Compact support tool for posture, spinal flexibility, and breathing space.",
    description:
      "A compact Pilates apparatus that helps improve posture, open the chest, and support spinal relief in studio or home environments.",
    features: [
      "Portable and compact",
      "Chest-opening support",
      "Spinal flexibility work",
      "Easy to store and move",
    ],
    materials: ["Maple wood", "Foam padding", "Leather cover"],
    dimensions: "95 x 45 x 34 cm",
    weight: "10-12 kg",
    idealFor: ["Mobile trainers", "Smaller studios", "Postural education"],
    image: "/catalogue/m-11-spine-corrector.png",
  },
] as const;

export const solutions = [
  {
    slug: "pilates-studios",
    title: "Pilates Studios",
    summary: "Premium studio apparatus, spatial coherence, and commercial-grade reliability.",
    benefits: ["Studio-grade equipment", "Consistent material language", "Professional enquiry handling"],
  },
  {
    slug: "yoga-studios",
    title: "Yoga Studios",
    summary: "Calm, durable wellness equipment that supports teaching and client trust.",
    benefits: ["Premium support products", "Bulk ordering options", "Calm brand alignment"],
  },
  {
    slug: "yoga-schools",
    title: "Yoga Schools",
    summary: "Reliable supply for training spaces, workshops, and teacher development environments.",
    benefits: ["Training-friendly support", "Repeat procurement", "Scalable supply logic"],
  },
  {
    slug: "hotels-and-resorts",
    title: "Hotels and Resorts",
    summary: "Elevated wellness furnishing for guest-facing experiences and signature spaces.",
    benefits: ["Elegant guest perception", "Procurement confidence", "Commercial suitability"],
  },
  {
    slug: "retreat-centres",
    title: "Retreat Centres",
    summary: "Refined, calming equipment that supports immersive and premium retreat programming.",
    benefits: ["Atmospheric alignment", "Bulk supply support", "International buyer trust"],
  },
  {
    slug: "wellness-brands",
    title: "Wellness Brands",
    summary: "Consistent, design-led product supply for branded wellness ecosystems.",
    benefits: ["Brand coherence", "Repeatable supply", "Premium visual language"],
  },
  {
    slug: "interior-designers",
    title: "Interior Designers",
    summary: "Specification-ready equipment and material clarity for commercial wellness spaces.",
    benefits: ["Finish clarity", "Styling context", "Specification support"],
  },
  {
    slug: "international-buyers",
    title: "International Buyers",
    summary: "Export-ready communication for partners evaluating premium Indian wellness supply.",
    benefits: ["Clear export path", "Fast response", "Brand trust signals"],
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
] as const;
