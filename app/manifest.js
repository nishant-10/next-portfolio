export default function manifest() {
  return {
    name: "Nishant Joshi - Software Engineer & Web Developer",
    short_name: "Nishant Joshi",
    description:
      "Personal portfolio of Nishant Joshi, a Software Engineer specializing in web development.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a192f",
    theme_color: "#0a192f",
    icons: [
      { src: "/favicon.ico", sizes: "64x64 32x32 24x24 16x16", type: "image/x-icon" },
      { src: "/icons8-n-100.png", sizes: "100x100", type: "image/png" },
      { src: "/logo192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
      { src: "/logo512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
