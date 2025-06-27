import type { NextConfig } from "next";

import "@/config/env.server"; // validates environment variables

const nextConfig: NextConfig = {
  serverExternalPackages: ["pino", "pino-pretty"],
};

export default nextConfig;
