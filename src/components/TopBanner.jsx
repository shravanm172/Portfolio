import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";

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

  // --- swipe state (drawer comes from RIGHT, swipe RIGHT to close)
  const drawerRef = useRef(null);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const startTRef = useRef(0);
  const draggingRef = useRef(false);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") closeMenu();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent background scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  // Helper to set drawer translate while dragging
  function setDrawerDragPx(px) {
    const el = drawerRef.current;
    if (!el) return;
    el.style.setProperty("--drawer-drag", `${px}px`);
  }

  function resetDrawerDrag() {
    const el = drawerRef.current;
    if (!el) return;
    el.style.removeProperty("--drawer-drag");
  }

  function onTouchStart(e) {
    if (!menuOpen) return;
    const x = e.touches[0].clientX;
    startXRef.current = x;
    lastXRef.current = x;
    startTRef.current = performance.now();
    draggingRef.current = true;
    setDrawerDragPx(0);
  }

  function onTouchMove(e) {
    if (!menuOpen || !draggingRef.current) return;

    const x = e.touches[0].clientX;
    lastXRef.current = x;

    // dx > 0 means swipe RIGHT (close direction)
    let dx = x - startXRef.current;
    if (dx < 0) dx = 0; // don't allow dragging left (would "over-open")

    // Keep it reasonable
    const MAX_DRAG = 240;
    const clamped = Math.min(dx, MAX_DRAG);

    // visually drag drawer
    setDrawerDragPx(clamped);

    // If you want to block page scrolling while dragging:
    e.preventDefault();
  }

  function onTouchEnd() {
    if (!menuOpen || !draggingRef.current) return;
    draggingRef.current = false;

    const dx = lastXRef.current - startXRef.current; // right swipe = +
    const dt = Math.max(performance.now() - startTRef.current, 1);
    const velocity = dx / dt; // px per ms

    // Tune these
    const CLOSE_DISTANCE = 90; // swipe far enough
    const CLOSE_VELOCITY = 0.55; // or flick fast enough

    resetDrawerDrag();

    if (dx > CLOSE_DISTANCE || velocity > CLOSE_VELOCITY) {
      closeMenu();
    }
    // else: snaps back via CSS transition (no state change needed)
  }

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

          {/* Mobile drawer */}
          <div
            id="mobile-nav"
            ref={drawerRef}
            className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
            role="dialog"
            aria-modal="true"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
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

          {/* Backdrop */}
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
