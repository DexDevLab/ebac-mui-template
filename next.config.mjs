/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  basePath: "/ebac-mui-template",
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true
  },
  assetPrefix: "./"
};

export default nextConfig;
