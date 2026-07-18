// ────────────────────────────────────────────────────────────────────────────
// IMAGE MANIFEST — the single source of truth for every photo on the site.
//
// To replace a placeholder with a real photo of the unit, you have two options:
//   1. (Easiest) Drop your photo into `public/images/` using the SAME filename,
//      e.g. overwrite `public/images/hero-beach.jpg`. No code change needed.
//   2. Or change the `src` path below to point at your new file.
//
// See `public/images/README.md` for the recommended orientation and size of each
// slot. Remember to update the `alt` text to describe the real photo.
// ────────────────────────────────────────────────────────────────────────────

export const IMAGES = {
  hero: {
    src: "/images/hero-beach.jpg",
    alt: "Turquoise water and white sand beach at golden hour on Mactan Island, Cebu",
  },
  livingRoom: {
    src: "/images/living-room.png",
    alt: "Sunlit open-plan living room with sea views",
  },
  primaryBedroom: {
    src: "/images/primary-bedroom.png",
    alt: "Serene primary bedroom with natural light",
  },
  balcony: {
    src: "/images/balcony.png",
    alt: "Private balcony overlooking the sea",
  },
  ensuite: {
    src: "/images/bathroom.png",
    alt: "Stone-clad ensuite bathroom",
  },
  kitchen: {
    src: "/images/kitchen.png",
    alt: "Chef's kitchen with island",
  },
  secondBedroom: {
    src: "/images/sedondary-bedroom.png",
    alt: "Second bedroom with garden view",
  },
  locationAerial: {
    src: "/images/location-aerial.jpg",
    alt: "Aerial view of the turquoise coast around Mactan Island, Cebu",
  },
};
