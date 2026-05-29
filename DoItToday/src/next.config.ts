import type { NextConfig } from "next";
import next from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./dist", // Changes the build output directory to `./dist/`.
};

export default nextConfig;
