import "./globals.css";
export const metadata = {
  title: "Nishant Joshi | Software Engineer | Portfolio & Projects",
  description:
    "Sharing my journey, interests, and projects in software engineering, covering insights, innovations, and hands-on experiences.",
  icons: {
    icon: "icons8-n-100.png", // Path to your favicon or logo
    // apple: "/apple-touch-icon.png", // Optional, for Apple devices
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated">
      <body className="video-background">
        <video autoPlay muted loop id="video-background">
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        {children}
      </body>
    </html>
  );
}
