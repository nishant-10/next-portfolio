// app/Background.jsx (Client)
"use client";

import { usePathname } from "next/navigation";

export default function Background() {
  const pathname = usePathname();

  if (pathname === "/buy-me-a-coffee") return null;

  return (
    <video
      id="video-background"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/bg.mp4" type="video/mp4" />
    </video>
  );
}
