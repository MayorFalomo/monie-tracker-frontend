/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "www.pngitem.com"], // Specify the domains for images

    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pngitem.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
