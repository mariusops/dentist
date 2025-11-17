const repoName = process.env.GITHUB_PAGES_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: repoName ? `/${repoName}/` : undefined,
  basePath: repoName ? `/${repoName}` : undefined,
  images: { unoptimized: true }
};

module.exports = nextConfig;
