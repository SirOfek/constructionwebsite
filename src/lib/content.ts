export const business = {
  name: "TripleM Remodeling and Landscaping",
  shortName: "TripleM",
  phoneDisplay: "(205) 299-3791",
  phoneTel: "+12052993791",
  phoneSms: "+12052993791",
  area: "Greater Birmingham, Alabama",
  tagline: "Home repair, remodeling & landscaping done right.",
  heroLine: "Reliable remodeling and outdoor work across Alabama.",
} as const;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;

export const serviceGroups = [
  {
    id: "construction",
    title: "Construction & Home Improvement",
    blurb: "Repairs, upgrades, and finish work inside and out.",
    items: [
      "Home Repairs and Renovations",
      "Kitchen and Bathroom Upgrades",
      "Interior Remodeling",
      "Drywall Installation and Patching",
      "Interior and Exterior Painting",
      "Flooring Installation and Repairs",
      "Trim, Molding, and Baseboard Installation",
      "Custom Carpentry",
      "Door Installation and Repairs",
      "Window Installation and Repairs",
      "Deck and Porch Construction",
      "Deck and Porch Repairs",
      "Fence and Gate Installation",
      "Fence and Gate Repairs",
      "Handrail Installation",
      "Cabinet and Countertop Installation",
      "Shelving and Storage Installation",
      "Demolition and Removal",
      "Fire and Smoke Damage Repairs",
      "General Handyman Work",
    ],
  },
  {
    id: "lawn",
    title: "Lawn & Landscaping",
    blurb: "Keep your property sharp season after season.",
    items: [
      "Lawn Mowing and Edging",
      "Weed Eating",
      "Hedge and Shrub Trimming",
      "Tree Trimming and Tree Work",
      "Limb and Storm-Damage Cleanup",
      "Brush and Overgrowth Clearing",
      "Leaf and Yard Debris Removal",
      "Seasonal Property Cleanups",
      "Mulch and Pine Straw Installation",
      "Flower Bed Design and Maintenance",
      "Plant and Shrub Installation",
      "Weed Removal and Prevention",
      "Garden Bed Installation",
      "Landscape Edging and Borders",
      "Irrigation Installation and Repairs",
      "Drainage Improvements",
      "Gutter and Downspout Cleaning",
      "Pressure Washing",
    ],
  },
  {
    id: "hardscape",
    title: "Hardscaping & Outdoor Projects",
    blurb: "Patios, paths, walls, and outdoor upgrades that last.",
    items: [
      "Patio Installation and Repairs",
      "Walkways and Stepping-Stone Paths",
      "Retaining Wall Installation and Repairs",
      "Decorative Rock and Gravel Installation",
      "Pond Installation and Maintenance",
      "Fire Pit Installation",
      "Outdoor Steps and Handrails",
      "Deck and Porch Staining",
      "Exterior Wood Repairs",
      "Outdoor Furniture and Structure Assembly",
      "Concrete Patching and Repairs",
      "Property Cleanup and Exterior Maintenance",
    ],
  },
] as const;

export const galleryItems = [
  {
    src: "/gallery/kitchen.jpg",
    alt: "Updated kitchen remodel with wood cabinets",
    caption: "Kitchen upgrades",
  },
  {
    src: "/gallery/bathroom.jpg",
    alt: "Modern bathroom renovation",
    caption: "Bathroom remodels",
  },
  {
    src: "/gallery/deck.jpg",
    alt: "Wooden deck overlooking a backyard",
    caption: "Deck construction",
  },
  {
    src: "/gallery/lawn.jpg",
    alt: "Freshly cut residential lawn",
    caption: "Lawn care",
  },
  {
    src: "/gallery/patio.jpg",
    alt: "Stone patio with outdoor seating",
    caption: "Patio hardscaping",
  },
  {
    src: "/gallery/fence.jpg",
    alt: "New wooden privacy fence",
    caption: "Fence installation",
  },
] as const;

export const serviceOptions = [
  "Construction & Home Improvement",
  "Lawn & Landscaping",
  "Hardscaping & Outdoor Projects",
  "General Handyman Work",
  "Not sure — describe below",
] as const;
