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
//
// Paths are resolved against Vite's `base` (import.meta.env.BASE_URL) so they work
// in dev, at the domain root, opened via file://, and under a subpath deploy alike.
// Just give the filename that lives in `public/images/`.
// ────────────────────────────────────────────────────────────────────────────

const img = (file) => `${import.meta.env.BASE_URL}images/${file}`

export const IMAGES = {
  hero: {
    src: img("hero-beach.jpg"),
    alt: "Turquoise water and white sand beach at golden hour on Mactan Island, Cebu",
  },
  livingRoom: {
    src: img("living-room.png"),
    alt: "Sunlit open-plan living room with sea views",
  },
  primaryBedroom: {
    src: img("primary-bedroom.png"),
    alt: "Serene primary bedroom with natural light",
  },
  balcony: {
    src: img("balcony.png"),
    alt: "Private balcony overlooking the sea",
  },
  ensuite: {
    src: img("bathroom.png"),
    alt: "Stone-clad ensuite bathroom",
  },
  kitchen: {
    src: img("kitchen.png"),
    alt: "Chef's kitchen with island",
  },
  secondBedroom: {
    src: img("sedondary-bedroom.png"),
    alt: "Second bedroom with garden view",
  },
  locationAerial: {
    src: img("location-aerial.jpg"),
    alt: "Aerial view of the turquoise coast around Mactan Island, Cebu",
  },
};
