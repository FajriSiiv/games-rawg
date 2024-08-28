import nextPWA from "next-pwa";

const nextConfig = {
  reactStrictMode: true, // Bagian dari konfigurasi Next.js, bukan bagian dari konfigurasi PWA
  swcMinify: true,
  images: {
    domains: ["fakestoreapi.com", "media.rawg.io"],
  },
  // Konfigurasi untuk PWA
  // pwa: {
  //   dest: "public", // Lokasi untuk menyimpan service worker
  //   register: true, // Daftarkan service worker secara otomatis
  //   skipWaiting: true, // Memaksa service worker untuk update tanpa menunggu reload
  //   buildExcludes: [/middleware-manifest.json$/], // Mengecualikan file manifest dari cache
  // },
};

export default nextConfig;
// const withPWA = nextPWA({
//   dest: "public",
// })(nextConfig);

// export default withPWA;
