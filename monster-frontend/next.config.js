/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
     // 修改配置要重启项目，否则不生效。以下两种配置都可以
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
   
    // domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
