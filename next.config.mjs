/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // www → non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.visaskorea.co.kr" }],
        destination: "https://visaskorea.co.kr/:path*",
        permanent: true,
      },
      // Old WordPress category/tag pages → blog listing
      { source: "/category/:slug*", destination: "/ko/blog", permanent: true },
      { source: "/tag/:slug*", destination: "/ko/blog", permanent: true },
      // Old WP-style page slugs
      { source: "/home", destination: "/", permanent: true },
      { source: "/home/", destination: "/", permanent: true },
      // Trailing slash blog/visa slugs (old WP URLs)
      { source: "/blog/:slug/", destination: "/ko/blog/:slug", permanent: true },
      { source: "/visa/:slug/", destination: "/ko/visa/:slug", permanent: true },
    ];
  },
}

export default nextConfig
