// ──────────────────────────────────────────────────────────────
// SETTY MAHAL — the only file you edit to change the website.
// 1) SITE: shop details and WhatsApp number
// 2) CATEGORIES: product groups
// 3) PRODUCTS: add a product = add one { ... } block
//
// Photos: upload them into the "images" folder on GitHub and list the
// file names in `images`, e.g. images: ["images/royal-sofa-1.jpg"].
// Leave `images` empty to show a "Photo coming soon" placeholder.
// Leave `price` out to show "Price on enquiry".
// The sample products below are placeholders. Replace them with real ones.
// ──────────────────────────────────────────────────────────────

window.SITE = {
  name: "Setty Mahal",
  tagline: "Handcrafted furniture, made in Kerala",
  experienceYears: 30,

  // Country code + number, digits only, no + or spaces. Example: 919847012345
  whatsapp: "919999999999",
  phoneDisplay: "+91 99999 99999",
  email: "hello@example.com",

  address: "Setty Mahal Furniture, Main Road, Kerala",
  hours: "Mon–Sat 9:30 AM – 7:30 PM · Sunday by appointment",

  // Google Maps: open the shop > Share > Embed a map > copy the src="..." link here.
  mapEmbedUrl: "",
  mapLinkUrl: "https://maps.google.com",

  // Only used if the site is opened as a local file. Online, the real address is used automatically.
  url: "https://settymahal.example"
};

window.CATEGORIES = [
  { slug: "sofas", name: "Sofas & Seating", blurb: "Sofa sets, recliners and lounge chairs" },
  { slug: "beds", name: "Beds", blurb: "Cots and bedroom sets in solid wood" },
  { slug: "dining", name: "Dining", blurb: "Dining tables and chairs for every family size" },
  { slug: "wardrobes", name: "Wardrobes & Storage", blurb: "Wardrobes, cupboards and chests" },
  { slug: "tables", name: "Tables & Tea Poys", blurb: "Coffee tables, consoles and study tables" }
];

window.PRODUCTS = [
  {
    slug: "royal-teak-sofa-set",
    name: "Royal Teak Sofa Set (3+1+1)",
    category: "sofas",
    material: "Seasoned teak, high-density foam cushions",
    dimensions: "3-seater 210 × 85 × 90 cm",
    description: "Hand-carved teak frame with a deep-seat cushion. Fabric and finish can be chosen at the showroom.",
    images: ["images/royal-teak-sofa-set-1.jpg"],
    featured: true
  },
  {
    slug: "carved-teak-cot-queen",
    name: "Carved Teak Queen Cot",
    category: "beds",
    material: "Seasoned teak",
    dimensions: "Queen · 210 × 160 cm",
    price: 68000,
    description: "Traditional Kerala headboard carving on a sturdy teak frame. Available with or without storage.",
    images: ["images/carved-teak-cot-queen-1.jpg"],
    featured: true
  },
  {
    slug: "six-seater-dining-set",
    name: "Six-Seater Dining Set",
    category: "dining",
    material: "Rosewood-finish mango wood",
    dimensions: "Table 180 × 90 × 76 cm",
    price: 54000,
    description: "A solid six-seater with cushioned chairs. Table can be made in custom sizes on order.",
    images: ["images/six-seater-dining-set-1.jpg"],
    featured: true
  },
  {
    slug: "three-door-wardrobe",
    name: "Three-Door Wardrobe",
    category: "wardrobes",
    material: "Teak with mirror panel",
    dimensions: "180 × 55 × 210 cm",
    description: "Full-length mirror, hanging space and shelves. Made to order to fit your room.",
    images: ["images/three-door-wardrobe-1.jpg"],
    featured: true
  },
  {
    slug: "recliner-lounge-chair",
    name: "Recliner Lounge Chair",
    category: "sofas",
    material: "Hardwood frame, leatherette",
    price: 24500,
    description: "A comfortable recliner for the living room, with a smooth push-back action.",
    images: ["images/recliner-lounge-chair-1.jpg"]
  },
  {
    slug: "royal-teak-swing",
    name: "Royal Teak Swing",
    category: "sofas",
    material: "Teak",
    description: "A teak swing with a slatted seat, hung on chains from a sturdy teak frame.",
    images: ["images/royal-teak-swing-1.jpg"]
  },
  {
    slug: "teak-coffee-table",
    name: "Teak Coffee Table",
    category: "tables",
    material: "Solid teak",
    dimensions: "110 × 60 × 45 cm",
    price: 14500,
    description: "A low centre table with a lower shelf. Finish options available.",
    images: ["images/teak-coffee-table-1.jpg"]
  },
  {
    slug: "storage-cot-king",
    name: "King Storage Cot",
    category: "beds",
    material: "Mahogany",
    dimensions: "King · 210 × 180 cm",
    description: "Hydraulic-lift storage under the mattress, ideal for compact bedrooms.",
    images: ["images/storage-cot-king-1.jpg"]
  },
  {
    slug: "four-seater-dining-set",
    name: "Four-Seater Dining Set",
    category: "dining",
    material: "Mango wood",
    dimensions: "Table 120 × 80 × 76 cm",
    price: 32000,
    description: "A compact dining set for smaller homes and apartments.",
    images: ["images/four-seater-dining-set-1.jpg"]
  }
];
