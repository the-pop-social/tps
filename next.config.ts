/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/tps",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
