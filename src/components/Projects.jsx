import React from "react";
import ProjectGallery from "./ProjectGallery";
import "../../styles/experience.css"; // same CSS base as WporkExperience

const PROJECTS = [
  {
    title: "All Fours — Multiplayer Web App",
    period: "2024 – Present",
    blurb:
      "Realtime card game with lobby, reconnect logic, and trick-taking engine. Focused on performant renders and resilient WebSocket flows.",
    bullets: [
      "Implemented game controller engine, scoring, and game state sync",
      "WebSocket-based lobby with room codes, player management, and game log",
      "Optimized design for minimal re-renders and responsive mobile play",
    ],
    skills: ["React", "JavaScript", "Node", "WebSockets", "Vite", "CSS"],
    repo: "https://github.com/shravanm172/All-Fours-Web-App.git", // ← update
    images: ["/images/a4s3.png", "/images/a4s1.png", "/images/a4s2.png"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="experience" data-aos="fade-up">
      <h2 className="section-heading">Projects</h2>
      <div className="experience-list">
        {PROJECTS.map((p, i) => (
          <article key={i} className="experience-item card">
            <h3>{p.title}</h3>
            <p className="muted">{p.period}</p>

            {/* INVERTED BLOCK: text first, gallery second */}
            <div className="project-block project-block--reverse">
              <div className="project-info">
                <p>{p.blurb}</p>
                <ul>
                  {p.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                <div className="skill-tags">
                  {p.skills.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="project-link">
                  <a
                    className="btn btn-secondary"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Repository
                  </a>
                </div>
              </div>

              <ProjectGallery images={p.images} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
