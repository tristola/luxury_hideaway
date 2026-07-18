# Site images

These are the photos used across the ALON site. They are currently **placeholders**
(stock beach/interior shots) and should be replaced with real photography of the
unit at **La Victoria, Mactan Newtown** when available.

## How to replace

**Easiest:** drop your photo in this folder using the **same filename** (keep it
`.jpg`). The site picks it up automatically — no code changes.

If you want a different filename or format, edit the paths in
[`../../src/assets.js`](../../src/assets.js) and remember to update each `alt`
description too (it's read by screen readers and search engines).

> Tip: export as JPEG, quality ~80, sRGB. Aim to keep each file under ~600 KB.

## What each slot should show

| File | Where it appears | Orientation | Recommended size |
|------|------------------|-------------|------------------|
| `hero-beach.jpg` | Full-screen hero background | Landscape, full-bleed | ≥ 2400 × 1600 |
| `living-room.jpg` | "The Great Room" split | **Portrait 4:5** | ≥ 1600 × 2000 |
| `primary-bedroom.jpg` | "Two Bedrooms" split | **Portrait 4:5** | ≥ 1600 × 2000 |
| `balcony.jpg` | Gallery — large tile (tall) | **Tall portrait** | ≥ 1400 × 2000 |
| `ensuite.jpg` | Gallery — wide tile | Landscape | ≥ 1600 × 1100 |
| `kitchen.jpg` | Gallery — small tile | ~Square | ≥ 1200 × 1200 |
| `second-bedroom.jpg` | Gallery — small tile | ~Square | ≥ 1200 × 1200 |
| `location-aerial.jpg` | "The Setting" background | Landscape, full-bleed | ≥ 2400 × 1600 |

Orientations come from the layout: the split-panel images are cropped to a 4:5
portrait, and the gallery tile shapes are set in `src/index.css` (`.g1`–`.g4`).
