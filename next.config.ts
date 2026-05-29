import type { NextConfig } from "next";

const deployTarget = process.env.DEPLOY_TARGET;
const isGitHubPages = deployTarget === "github";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/sayuri-enka" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
