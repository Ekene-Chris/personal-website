/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static exports
  // Workaround for image optimization with static export
  images: {
    unoptimized: true,
  },
  // Fix for trailing slashes
  trailingSlash: true,
  // Ensure base path is correct for deployment
  basePath: "",
};

module.exports = nextConfig;
