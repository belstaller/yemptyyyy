import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // The repo root has its own package-lock.json; pin the root to this app so
  // Next doesn't treat the whole repo as the workspace.
  turbopack: { root: __dirname },
  // Don't let `next dev` write AGENTS.md/CLAUDE.md into this folder.
  agentRules: false,
};

export default nextConfig;
