import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// Vite configuration with PWA support.
// This configuration registers the service worker automatically and
// defines a basic manifest for the app. It also includes sensible
// defaults for offline navigation and asset caching.
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icons/pwa-192.png", "icons/pwa-512.png"],
      manifest: {
        name: "My React PWA",
        short_name: "MyPWA",
        description: "A basic installable PWA with header + footer menu",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#111827",
        icons: [
          { src: "icons/pwa-192.png", sizes: "192x192", type: "image/png" },
          { src: "icons/pwa-512.png", sizes: "512x512", type: "image/png" },
          {
            src: "icons/pwa-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        // Fallback to index.html for SPA routes when offline.
        navigateFallback: "/index.html",
        // Cache static assets by extension. This can be adjusted as needed.
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff2}"]
      },
    }),
  ],
});