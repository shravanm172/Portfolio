import React from "react";
import EmblaMeritCarousel from "./EmblaMeritCarousel";
import "../../styles/skills.css";

const CERTIFICATE_ITEMS = [
  {
    src: "/images/mozilla-js-cert.jpg",
    title: "JavaScript Foundations Professional Certificate",
    desc: "Built a strong foundation in JavaScript by mastering core concepts such as syntax, data types, functions, and control flow. This certification strengthened my ability to write clean, efficient code and laid the groundwork for more advanced front-end and full-stack development.",
    issuer: "Mozilla",
    year: "2024",
  },
  {
    src: "/images/postgres-cert.jpg",
    title: "PostgreSQL Essential Training",
    desc: "Gained hands-on experience with relational database design, SQL querying, and database management using PostgreSQL. This training equipped me with the skills to build and maintain robust, scalable backends for real-world applications.",
    issuer: "LinkedIn Learning",
    year: "2024",
  },
  {
    src: "/images/pandas-cert.jpg",
    title: "Data Analysis with Python and Pandas",
    desc: "Developed skills in manipulating, cleaning, and analyzing datasets with Python and Pandas. Learned how to generate meaningful insights and create effective visualizations, skills that are critical for data-driven decision-making and automation projects.",
    issuer: "LinkedIn Learning",
    year: "2024",
  },
  {
    src: "/images/ms-gen-ai-cert.jpg",
    title: "Career Essentials in Generative AI",
    desc: "Explored the fundamentals of generative AI, including key models, tools, and ethical considerations. This program introduced me to practical applications of AI in problem-solving and creative innovation, broadening my perspective on the future of technology.",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
  },
  {
    src: "/images/css-cert.jpg",
    title: "CSS Essential Training",
    desc: "Learned the principles of styling modern web pages with CSS, from advanced selectors and properties to responsive design techniques. This training sharpened my ability to craft clean, user-friendly, and adaptive front-end interfaces.",
    issuer: "LinkedIn Learning",
    year: "2024",
  },
];

export default function SkillsCerts() {
  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <h2 className="section-heading">Skills & Certifications</h2>

      <EmblaMeritCarousel
        items={CERTIFICATE_ITEMS}
        variant="certificates"
        options={{ loop: false, align: "start", skipSnaps: false }}
      />
    </section>
  );
}
