"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../css/nav.css";
import homeContent from "../data/home_content.json";

const NAV_LINKS = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Projects", href: "#projects" },
  { num: "03", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { Socials } = homeContent;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const renderLinks = (onNavigate) => (
    <ul>
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <a href={link.href} onClick={onNavigate}>
            <span className="navNum">{link.num}.</span> {link.label}
          </a>
        </li>
      ))}
      <li>
        <a
          className="resumebutton"
          href={Socials.Resume}
          target="_blank"
          rel="noreferrer noopener"
        >
          Resume
        </a>
      </li>
    </ul>
  );

  return (
    <header>
      <nav className="nav" aria-label="Primary">
        <a href="#hero" className="navLogo" aria-label="Nishant Joshi — home">
          <Image
            src="/icons8-n-100.png"
            alt="Nishant Joshi logo"
            width={100}
            height={100}
            priority
          />
        </a>
        {renderLinks()}
      </nav>

      <button
        type="button"
        className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="hamMenu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {menuOpen && (
        <div className="navOverlay" aria-hidden="true" onClick={closeMenu} />
      )}

      <div
        id="hamMenu"
        ref={menuRef}
        className={`hamMenu${menuOpen ? " hamMenu--open" : ""}`}
      >
        {renderLinks(closeMenu)}
      </div>
    </header>
  );
}
