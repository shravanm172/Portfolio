import React from "react";
import ProjectGallery from "./ProjectGallery";
import "../../styles/experience.css";

const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    org: "Avidyne Corporation",
    period: "May 2026 - Present",
    desc: "Developing real-time, embedded software for avionics flight displays and instrumentation in a safety-critical, FAA-aligned engineering environment.",
    projects: [
      {
        title: "Integrated Flight Display Software",
        images: ["/images/avi_logo.png", "/images/ifds.png"],
        details: [
          "Developed and debugged real-time, embedded software for avionics flight displays in a safety-critical environment.",
          "Wrote automated and manual test scripts to verify compliance with FAA-aligned testing standards.",
          "Proposed and implemented code enhancements through a formal, multi-engineer review process, contributing to shipped product releases.",
          "Contributed to requirements traceability, linking test cases to documented software requirements.",
        ],
        skills: [
          "C++",
          "Embedded Systems",
          "Real-Time Systems",
          "Software Verification",
          "Requirements Traceability",
        ],
      },
    ],
  },
  {
    role: "Freelance Web Developer",
    org: "Self-Employed",
    period: "June 2024 – May 2026",
    desc: "Designed and deployed full-stack web solutions with custom-built admin dashboards for various small-business clients, replacing generic, cluttered third-party platforms with tools tailored to each client's actual workflow, giving non-technical users direct control over their own content and supporting their organizational growth through better online visibility",
    projects: [
      {
        title: "Homerun Diesel Engine and Emissions Repair",
        images: ["/images/homerun1.png", "/images/homerun2.png"],
        details: [
          "Designed and developed a professional business website",
          "Built a custom admin dashboard allowing the owner to manage service listing and apply promos and discounts without technical assistance",
          "Integrated Calendly for appointment scheduling and synchronized bookings with Google Calendar.",
          "Streamlined business operations by setting up professional email accounts and calendar workflows.",
          "Translated customer requirements into clearly defined service descriptions aligned with real-world engineering needs.",
        ],
        skills: ["React", "Calendly", "PostgreSQL", "CSS", "JavaScript"],
        link: "https://www.homerundiesel.com/",
      },
      {
        title: "El Dorado South Hindu School Website & Database",
        images: [
          "/images/edshs1.png",
          "/images/edshs2.png",
          "/images/edshs3.png",
          "/images/edshs4.png",
        ],
        details: [
          "Built custom event calendar with add/edit/delete capabilities for admin users.",
          "Designed admin dashboard for managing school events, news, and announcements with minimal technical experience required",
          "Created Student Record Management System for storing and manipulating biodata, grades, guardians, and medical information.",
          "Implemented role-based access with authentication: admin vs public read-only views.",
        ],
        skills: [
          "React",
          "Flask",
          "PostgreSQL",
          "CSS",
          "JavaScript",
          "RestAPI",
        ],
        link: "https://www.eldoradosouthhindu.org/",
      },
      {
        title: "My Place Real Estate Website",
        images: ["/images/myplace1.png", "/images/myplace3.png"],
        details: [
          "Built a multi-page property listing website with structured property views and basic filtering.",
          "Engineered a custom admin dashboard letting the client create, edit, and delete listings directly",
          "Implemented individual property pages using template-based rendering and dynamic data injection.",
          "Developed custom slideshow and image gallery components to showcase property listings.",
        ],
        skills: ["Flask", "HTML", "CSS", "JavaScript", "React"],
        link: "https://www.myplace-realestate.com/desktop_index",
      },
    ],
  },
  {
    role: "Private Tutor",
    org: "Personal startup Business",
    period: "September 2023 – June 2024",
    desc: "Provided one-on-one tutoring in Applied Mathematics for high school students at an affordable price.",
    projects: [
      {
        title: "Shravan's Applied Math Tutoring",
        details: [
          "Helped students improve grades and exam readiness in CAPE Applied Mathematics U1 & U2.",
          "Created personalized lesson plans and exercises.",
          "Successfully tutored 6 students, all of whom went on to achieve Grade 1s and 2s in their final exams.",
          "Deepened my own understanding and appreciation of statistics, probability, and discrete math.",
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
