import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Next.js configuration.
 * Enables strict mode for highlighting potential issues during development.
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // Allow additional dev origins for HMR when accessing the dev server
  // from other devices on the LAN (e.g., 192.168.1.148:3001).
  allowedDevOrigins: ["192.168.1.77", "192.168.1.148", "192.168.1.148:3001"],
  turbopack: {
    root: __dirname,
    resolveAlias: {
      tailwindcss: path.resolve(__dirname, "node_modules/tailwindcss"),
    },
  },
};

export default nextConfig;