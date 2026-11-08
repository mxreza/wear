/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain HTML site to /out,
  // which can be uploaded to any Iranian host (no Node server needed).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
