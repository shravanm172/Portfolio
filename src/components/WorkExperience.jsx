import React from "react";
import ProjectGallery from "./ProjectGallery";
import "../../styles/experience.css";

const EXPERIENCE = [
  {
    role: "Web Developer (Self-Employed)",
    org: "Startup Business",
    period: "2023 – Present",
    desc: "Designed and deployed full-stack web solutions for schools and small businesses.",
    projects: [
      {
        title: "El Dorado South Hindu School Website & Database",
        images: [
          "/images/edshs-calendar.png",
          "/images/edshs-gallery.png",
          "/images/edshs-student-records.png",
          "/images/edshs-dashboard.png",
        ],
        details: [
          "Built event calendar with add/edit/delete capabilities for admin users.",
          "Developed photo gallery with category filters and lightbox viewer.",
          "Created Student Record Management System (React + Flask + PostgreSQL) for storing biodata, grades, guardians, and medical information.",
          "Implemented role-based access: admin vs public read-only views.",
        ],
        skills: ["React", "Flask", "PostgreSQL", "CSS", "JavaScript"],
      },
      {
        title: "My Place Real Estate Website",
        images: [
          "/images/edshs-calendar.png",
          "/images/edshs-gallery.png",
          "/images/edshs-student-records.png",
          "/images/edshs-dashboard.png",
        ],
        details: [
          "Developed property listing site with separate mobile/desktop templates.",
          "Implemented dynamic Flask routes for individual property pages.",
          "Built reusable slideshow and image gallery components.",
        ],
        skills: ["Flask", "HTML", "CSS", "JavaScript", "Bootstrap"],
      },
    ],
  },
  {
    role: "Private Tutor",
    org: "Self-Employed",
    period: "2022 – Present",
    desc: "Provide one-on-one tutoring in Computer Science, Mathematics, and Physics for high school and early college students.",
    projects: [
      {
        title: "STEM Tutoring",
        details: [
          "Helped students improve grades and exam readiness in CAPE Math, Physics, and ICT.",
          "Created personalized lesson plans and coding exercises.",
          "Introduced students to Python basics and problem-solving techniques.",
        ],
        skills: [
          "Teaching",
          "Communication",
          "Python",
          "Mathematics",
          "Physics",
        ],
      },
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="experience">
      <h2 className="section-heading">Work Experience</h2>
      <div className="experience-list">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="experience-item card">
            <h3>{exp.role}</h3>
            <p className="muted">
              {exp.org} | {exp.period}
            </p>
            <p>{exp.desc}</p>

            {exp.projects.map((proj, j) => (
              <div key={j} className="project-block">
                {/* Images */}
                {proj.images && proj.images.length > 0 && (
                  <ProjectGallery images={proj.images} />
                )}
                {proj.img && (
                  <div className="project-img">
                    <img src={proj.img} alt={proj.title} />
                  </div>
                )}
                <div className="project-info">
                  <h4>{proj.title}</h4>
                  <ul>
                    {proj.details.map((d, k) => (
                      <li key={k}>{d}</li>
                    ))}
                  </ul>
                  <div className="skill-tags">
                    {proj.skills?.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
