import React, { useEffect, useState, useCallback } from "react";
import "../../styles/skills.css";

const SKILLS_CERTS = [
  {
    img: "/images/mozilla-js-cert.jpg",
    title: "JavaScript Foundations Professional Certificate by Mozilla",
    desc: "Built a strong foundation in JavaScript by mastering core concepts such as syntax, data types, functions, and control flow. This certification strengthened my ability to write clean, efficient code and laid the groundwork for more advanced front-end and full-stack development.",
  },
  {
    img: "/images/postgres-cert.jpg",
    title: "PostgreSQL Essential Training",
    desc: "Gained hands-on experience with relational database design, SQL querying, and database management using PostgreSQL. This training equipped me with the skills to build and maintain robust, scalable backends for real-world applications.",
  },
  {
    img: "/images/pandas-cert.jpg",
    title: "Data Analysis with Python and Pandas",
    desc: "Developed skills in manipulating, cleaning, and analyzing datasets with Python and Pandas. Learned how to generate meaningful insights and create effective visualizations, skills that are critical for data-driven decision-making and automation projects.",
  },
  {
    img: "/images/ms-gen-ai-cert.jpg",
    title: "Career Essentials in Generative AI by Microsoft and Linkedin",
    desc: "Explored the fundamentals of generative AI, including key models, tools, and ethical considerations. This program introduced me to practical applications of AI in problem-solving and creative innovation, broadening my perspective on the future of technology.",
  },
  {
    img: "/images/css-cert.jpg",
    title: "CSS Essential Training",
    desc: "Learned the principles of styling modern web pages with CSS, from advanced selectors and properties to responsive design techniques. This training sharpened my ability to craft clean, user-friendly, and adaptive front-end interfaces.",
  },
];

// --- Lightbox state (Skills-only) ---
const useSkillsLightbox = (count) => {
  const [openIdx, setOpenIdx] = useState(null);
  const isOpen = openIdx !== null;

  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(
    () => setOpenIdx((i) => (i + count - 1) % count),
    [count]
  );
  const next = useCallback(() => setOpenIdx((i) => (i + 1) % count), [count]);

  // ESC / ← / →
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, prev, next]);

  return { openIdx, setOpenIdx, isOpen, close, prev, next };
};

export default function SkillsCerts() {
  const { openIdx, setOpenIdx, isOpen, close, prev, next } = useSkillsLightbox(
    SKILLS_CERTS.length
  );
  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <h2 className="section-heading">Skills & Certifications</h2>
      <div className="skills-list">
        {SKILLS_CERTS.map((item, idx) => (
          <div key={idx} className="skill-row">
            <div className="skill-img">
              <button
                className="skill-thumb" // new class; no conflicts
                onClick={() => setOpenIdx(idx)}
                aria-label={`Open ${item.title}`}
              >
                <img src={item.img} alt={item.title} loading="lazy" />
              </button>
            </div>
            <div className="skill-desc">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <div
          className="skills-lb__backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="skills-lb__frame"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className="skills-lb__img"
              src={SKILLS_CERTS[openIdx].img}
              alt={SKILLS_CERTS[openIdx].title}
            />
            <div className="skills-lb__caption">
              {SKILLS_CERTS[openIdx].title}
            </div>

            <button
              className="skills-lb__close"
              onClick={close}
              aria-label="Close"
            >
              ×
            </button>
            <button
              className="skills-lb__nav skills-lb__prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              className="skills-lb__nav skills-lb__next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
