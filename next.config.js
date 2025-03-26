/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Add this for static export
  distDir: ".next", // Specify the build output directory
  images: {
    unoptimized: true, // Required for static export with images
  },
  // Keep any other options you had before
};

module.exports = nextConfig;
