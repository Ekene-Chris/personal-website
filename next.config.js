/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove this line:
  // output: "export",

  // Keep the rest of your configuration:
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "",
};

module.exports = nextConfig;
