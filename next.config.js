/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exclude figma-export folder from compilation
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

module.exports = nextConfig;
