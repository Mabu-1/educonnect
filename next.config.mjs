/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com", // Updated to match the URL
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Updated to match the URL
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc", // Updated to match the URL
      },
    ],
  },
};

export default nextConfig;