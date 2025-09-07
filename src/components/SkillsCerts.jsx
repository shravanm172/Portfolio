import React from "react";
import "../../styles/skills.css";

const SKILLS_CERTS = [
  {
    img: "/images/mozilla-js-cert.jpg",
    title: "JavaScript Foundations Professional Certificate by Mozilla",
    desc: "Covers the fundamentals of JavaScript, including syntax, data types, functions, and control flow."
  },
  {
    img: "/images/postgres-cert.jpg",
    title: "PostgreSQL Essential Training",
    desc: "Covers database design, querying with SQL, and managing PostgreSQL databases."
  },
  {
    img: "/images/pandas-cert.jpg",
    title: "Data Analysis with Python and Pandas",
    desc: "Covers data manipulation, analysis, and visualization using Python and the Pandas library."
  },
  {
    img: "/images/ms-gen-ai-cert.jpg",
    title: "Career Essentials in Generative AI by Microsoft and Linkedin",
    desc: "Covers the fundamentals of generative AI, including key concepts, tools, and techniques."
  },
  {
    img: "/images/css-cert.jpg",
    title: "CSS Essential Training",
    desc: "Covers the basics of CSS, including selectors, properties, and responsive design techniques."
  }
];

export default function SkillsCerts() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-heading">Skills & Certifications</h2>
      <div className="skills-list">
        {SKILLS_CERTS.map((item, idx) => (
          <div key={idx} className="skill-row">
            <div className="skill-img">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="skill-desc">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
