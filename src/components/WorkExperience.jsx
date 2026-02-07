import React from "react";
import ProjectGallery from "./ProjectGallery";
import "../../styles/experience.css";

const EXPERIENCE = [
  {
    role: "Web Developer (Self-Employed)",
    org: "Startup Business",
    period: "June 2024 – Present",
    desc: "Designed and deployed full-stack web solutions for schools and small businesses.",
    projects: [
      {
        title: "El Dorado South Hindu School Website & Database",
        images: [
          "/images/edshs1.png",
          "/images/edshs2.png",
          "/images/edshs3.png",
          "/images/edshs4.png",
        ],
        details: [
          "Built event calendar with add/edit/delete capabilities for admin users.",
          "Developed photo gallery with category filters and lightbox viewer.",
          "Created Student Record Management System (React + Flask + PostgreSQL) for storing and manipulating biodata, grades, guardians, and medical information.",
          "Implemented role-based access with authentication: admin vs public read-only views.",
        ],
        skills: ["React", "Flask", "PostgreSQL", "CSS", "JavaScript"],
        link: "https://www.eldoradosouthhindu.org/",
      },
      {
        title: "My Place Real Estate Website",
        images: ["/images/myplace1.png", "/images/myplace3.png"],
        details: [
          "Created property listing site with separate mobile/desktop templates.",
          "Implemented dynamic Flask routes for individual property pages.",
          "Built reusable slideshow and image gallery components.",
        ],
        skills: ["Flask", "HTML", "CSS", "JavaScript", "Bootstrap"],
        link: "https://www.myplace-realestate.com/desktop_index",
      },
    ],
  },
  {
    role: "Private Tutor",
    org: "Self-Employed",
    period: "September 2023 – June 2024",
    desc: "Provided one-on-one tutoring in Applied Mathematics for high school students at an affordable price.",
    projects: [
      {
        title: "Shravan's Applied Math Tutoring",
        details: [
          "Helped students improve grades and exam readiness in CAPE Applied Mathematics U1 & U2.",
          "Created personalized lesson plans and exercises.",
          "Successfully tutored 6 students, all of whom went on to achieve Grade 1s and 2s in their final exams.",
          "Deepened my own understanding of statistics, probability, and discrete math.",
        ],
        skills: [
          "Teaching",
          "Communication",
          "Statistics",
          "Probability",
          "Discrete Math",
        ],
      },
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="experience" data-aos="fade-up">
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
                  <div className="project-link">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {proj.link}
                    </a>
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
