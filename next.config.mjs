/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
        pathname: "/dms/image/**",
      },
    ],
    domains: ["trendlyne-media-mumbai-new.s3.amazonaws.com"],
  },
};

export default nextConfig;
