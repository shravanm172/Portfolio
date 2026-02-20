import React from "react";
import ProjectGallery from "./ProjectGallery";
import "../../styles/experience.css"; // same CSS base as WporkExperience

const PROJECTS = [
  {
    title: "EquiTrack- Portfolio Analysis Dashboard",
    blurb:
      "EquiTrack is a full-stack portfolio analytics and market simulation platform designed to analyze, stress test, and forecast equity portfolio performance across varying market regimes.",
    bullets: [
      "Built a quantitative portfolio engine computing daily returns, weighted aggregation, equity curves, and risk metrics",
      "Developed vectorized Pandas data pipelines for historical price ingestion, return calculation, and scenario transformation",
      "Implemented stress-testing transforms and a forecasting engine",
    ],
    skills: ["Python", "Pandas", "React", "Flask", "REST APIs", "SQLite"],
    repo: "https://github.com/shravanm172/EquiTrack.git",
    live_demo: "https://equi-track.vercel.app",
    images: ["/images/equitrack-demo.png"],
  },
  {
    title: "All Fours — Multiplayer Web App",
    // period: "2024 – Present",
    blurb:
      "Realtime card game with lobby, reconnect logic, and game-playing engine. Focused on performant renders and resilient WebSocket flows.",
    bullets: [
      "Implemented game controller engine, scoring, and game state sync",
      "WebSocket-based lobby with room codes, player management, and game log",
      "Optimized design for minimal re-renders and responsive mobile play",
    ],
    skills: ["React", "JavaScript", "Node", "WebSockets", "Java", "CSS"],
    repo: "https://github.com/shravanm172/All-Fours-Web-App.git",
    live_demo: "https://all-fours-app.vercel.app",
    images: ["/images/a4s1.png", "/images/a4s2.png"],
  },
  {
    title: "Study Buddy- Collaborative Study Group Platform",
    // period: "2024 – Present",
    blurb:
      "Full-stack study group matching platform that helps students connect with each based on shared courses. Features group discovery, direct requests, and real-time chat with a scalable backend architecture.",
    bullets: [
      "Engineered a full-stack React + Flask application with PostgreSQL for structured user data",
      "Implemented group matching, public group feed, and direct partner requests based on shared courses",
      "Designed a layered backend architecture (controllers, services, repositories) with instant-messaging support",
    ],
    skills: [
      "React",
      "JavaScript",
      "Flask",
      "PostgreSQL",
      "REST APIs",
      "Firebase",
    ],
    repo: "https://github.com/shravanm172/StudyBuddy.git",
    images: ["/images/studybuddy1.png", "/images/studybuddy2.png"],
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

                <div className="project-link repo">
                  <a
                    className="btn btn-secondary"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Repository
                  </a>
                </div>
                <div className="project-link demo">
                  {p.live_demo && (
                    <a
                      className="btn btn-secondary"
                      style={{ color: "var(--syntax-type)" }}
                      href={p.live_demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
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
