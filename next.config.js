/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GITHUB_TOKEN: "#PERSONAL_ACCESS_TOKEN",
    GITHUB_USERNAME: "redianmf",
  },
  swcMinify: true,
};

module.exports = nextConfig;
