import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
  return (
    <section id="home">
      {/* <div
        aria-hidden
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      />
      <div className="absolute inset-0 bg-black/60" /> */}
      <header>
        <nav className="navbar">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="main-banner-content">
          {/* <div className="avatar-container">
            <img src={avatarUrl} alt={name} className="avatar" />
          </div> */}
          <h1>{name}</h1>
          <h2>BS Computer Science || Sophomore</h2>
          <h3>{email}</h3>
          <div className="socials">
            <a href={socials.github}>
              <FaGithub /> GitHub
            </a>
            <a href={socials.linkedin}>
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
