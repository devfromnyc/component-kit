import path from "node:path";
import { fileURLToPath } from "node:url";

const templateRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: templateRoot,
  },
};

export default nextConfig;
