import React from "react";
import EmblaMeritCarousel from "./EmblaMeritCarousel";
import "../../styles/skills.css";

const CERTIFICATE_ITEMS = [
  {
    src: "/images/CS50x.png",
    title: "CS50x: Introduction to Computer Science",
    desc: "Completed Harvard’s flagship computer science course covering foundational and advanced topics including C, Python, data structures, algorithms, memory management, SQL, web development, and Flask.",
    issuer: "edX, Harvard University",
    year: "2026",
  },
  {
    src: "/images/mozilla-js-cert.jpg",
    title: "JavaScript Foundations Professional Certificate",
    desc: "Learned the fundamentals of JavaScript, including the concepts of the core syntax, functions, DOM model, etc. This training has served as my foundation for building interactive frontend components and full-stack web apps.",
    issuer: "Mozilla",
    year: "2025",
  },
  {
    src: "images/stanford-cert-3.png",
    title: "Machine Learning Specialization",
    desc: "Completed a comprehensive 3 course specialization covering supervised learning (linear & logistic regression), neural networks, unspervised learning (clustering, anomaly detection), recommender systems, and reinforcement learning. Gained appreciation for practical applications and real-world problem solving.",
    issuer: "DeepLearning.AI, Stanford",
    year: "2026",
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
    desc: "Developed skills in manipulating, cleaning, and analyzing real-world datasets with Python and the Pandas library. Learned how to generate meaningful insights and create effective visualizations, skills that I look forward to applying in automation projects.",
    issuer: "LinkedIn Learning",
    year: "2025",
  },

  {
    src: "/images/ms-gen-ai-cert.jpg",
    title: "Career Essentials in Generative AI",
    desc: "Learned the fundamentals of GenAI, including core models, tools, and ethical considerations. This program introduced me to practical applications of AI in problem-solving and creative innovation, broadening my perspective on the future of technology.",
    issuer: "Microsoft",
    year: "2025",
  },
  {
    src: "/images/oop_in_c_cert.png",
    title: "Object Oriented Programming with C++",
    desc: "Developed a stronger understanding of the OOP paradigm and the core concepts of inheritance, encapsulation, polymorphism, as well as the basic principles of OOP design",
    issuer: "LinkedIn Learning",
    year: "2026",
  },
  {
    src: "/images/css-cert.jpg",
    title: "CSS Essential Training",
    desc: "Learned the principles of styling modern web pages with CSS, from advanced selectors and properties to responsive design techniques. This training sharpened my ability to craft clean, user-friendly, and adaptive front-end interfaces.",
    issuer: "LinkedIn Learning",
    year: "2025",
  },
];

export default function SkillsCerts() {
  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <h2 className="section-heading">Skills & Certifications</h2>

      <EmblaMeritCarousel
        items={CERTIFICATE_ITEMS}
        variant="certificates"
        lightbox={true}
        options={{ loop: false, align: "start", skipSnaps: false }}
      />
    </section>
  );
}
