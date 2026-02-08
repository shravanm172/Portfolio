import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6"; // if you don't have fa6, use FaBars only

import "../../styles/top_banner.css";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Work Experience" },
  { href: "#skills", label: "Skills & Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function TopBanner({
  backgroundUrl = "/images/top_matriculant.jpg",
  avatarUrl = "/images/avatar.png",
  name = "Shravan Maharaj",
  email = "shravanmaharaj1505@gmail.com",
  socials = {
    github: "https://github.com/shravanm172",
    linkedin: "https://www.linkedin.com/in/shravan-maharaj-840057349",
  },
  about = "I am a passionate aspiring software engineer from Trinidad & Tobago with robust skills in application and web development and unwavering commitment to learning and growth.",
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Optional: prevent background scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <section id="home">
      <header>
        <nav className="navbar" aria-label="Primary">
          {/* Desktop nav */}
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="nav-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>

          {/* Mobile dropdown */}
          <div
            id="mobile-nav"
            className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
            role="dialog"
            aria-modal="true"
          >
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Click-away backdrop */}
          <button
            className={`nav-backdrop ${menuOpen ? "is-open" : ""}`}
            aria-label="Close menu"
            onClick={closeMenu}
            type="button"
          />
        </nav>

        <div className="main-banner-content">
          <h1>{name}</h1>
          <h2>BS Computer Science || Sophomore</h2>
          <h3>{email}</h3>

          <div className="socials">
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>

          <div className="main-about">
            <p>{about}</p>
          </div>
        </div>
      </header>
    </section>
  );
}
