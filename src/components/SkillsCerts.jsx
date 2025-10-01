import React from "react";
import "../../styles/skills.css";

// ⬇️ shared lightbox pieces you added
import { useLightbox } from "./lightbox/useLightbox";
import LightboxOverlay from "./lightbox/LightboxOverlay";

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

export default function SkillsCerts() {
  // list of image URLs for the overlay
  const images = SKILLS_CERTS.map((s) => s.img);
  const { openIdx, setOpenIdx, close, prev, next } = useLightbox(images.length);

  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <h2 className="section-heading">Skills & Certifications</h2>

      <div className="skills-list">
        {SKILLS_CERTS.map((item, idx) => (
          <div key={idx} className="skill-row">
            <div className="skill-img">
              {/* keep your existing layout; just make the image open the lightbox */}
              <button
                type="button"
                className="skill-thumb"
                onClick={() => setOpenIdx(idx)}
                aria-label={`Open ${item.title}`}
                style={{ cursor: "zoom-in" }}
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

      {/* Same overlay UI & behavior as Projects (uses .pg-lb__* classes) */}
      <LightboxOverlay
        images={images}
        openIdx={openIdx}
        close={close}
        prev={prev}
        next={next}
      />
    </section>
  );
}
