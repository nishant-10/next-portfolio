export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/Resume.pdf",
    },
    sitemap: "https://www.nishantjoshi.com/sitemap.xml",
    host: "https://www.nishantjoshi.com",
  };
}
