/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GITHUB_TOKEN: "#YourGithubPersonalAccessToken",
    GITHUB_USERNAME: "#YourGithubUsername",
  },
  swcMinify: true,
};

module.exports = nextConfig;
