import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HOTMESS London",
    short_name: "HOTMESS",
    description: "Men-only queer ecosystem — fashion, radio, records, and HNH MESS (lube with real aftercare).",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#FF5300",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-256.png", sizes: "256x256", type: "image/png" },
      { src: "/icon-384.png", sizes: "384x384", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any maskable" },
    ],
  };
}
