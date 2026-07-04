/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/service",
        destination: "/skills",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
