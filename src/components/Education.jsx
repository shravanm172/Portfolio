import React from "react";
import GpaWheel from "./GPAWheel";
import MeritCarousel from "./MeritCarousel";
import InstagramEmbed from "./InstagramEmbed";
import "../../styles/education.css";

const MERIT_ITEMS = [
  {
    src: "/images/pure-u2.png",
    title: "CAPE Pure Mathematics – Unit 2",
    year: "2023",
  },
  {
    src: "/images/applied-u2.png",
    title: "CAPE Applied Mathematics – Unit 2",
    year: "2023",
  },
  {
    src: "/images/comp-sci-u1.png",
    title: "CAPE Computer Science – Unit 1",
    year: "2022",
  },
  {
    src: "/images/info-tech-u1.png",
    title: "CAPE Information Technology – Unit 1",
    year: "2022",
  },
  {
    src: "/images/pure-u1.png",
    title: "CAPE Pure Mathematics - Unit 1",
    year: "2022",
  },
  {
    src: "/images/applied-u1.png",
    title: "CAPE Applied Mathematics - Unit 1",
    year: "2022",
  },
  { src: "/images/math.png", title: "CSEC Mathematics - Unit 1", year: "2021" },
  { src: "/images/phys.png", title: "CSEC Physics - Unit 1", year: "2021" },
];

export const Education = () => {
  return (
    <section id="education">
      <h2 className="timeline-heading">Education</h2>
      <div className="timeline">
        {/* Florida Tech */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-desc">
            <h3>Florida Institute of Technology, Melbourne, FL</h3>
            <p>B.S. Computer Science (August 2024 – May 2027)</p>
          </div>
          <div className="timeline-content">
            <div className="row">
              <GpaWheel
                label="Cumulative GPA"
                value={3.9}
                max={4.0}
                colorClass="gpa-green"
              />
              <div>
                <img
                  className="logo"
                  style={{ height: "80px", width: "80px" }}
                  src="/images/florida-tech-logo.png"
                  alt=""
                />
                <h3>Dean's List Honors</h3>
                <p>Fall 2024 & Spring 2025</p>
              </div>
              <div>
                <img
                  className="logo"
                  style={{ height: "100px", width: "80px" }}
                  src="/images/phi-eta-sigma-logo.svg"
                  alt=""
                />
                <h3>Phi Eta Sigma National Honor Society</h3>
                <p className="abt-club">Inducted Spring 2025</p>
              </div>
              <div>
                <img
                  className="logo"
                  style={{ height: "100px", width: "80px" }}
                  src="/images/UPE-logo.png"
                  alt=""
                />
                <h3>Upsilon Pi Epsilon Honor Society</h3>
                <p className="abt-club">Inducted Fall 2025</p>
              </div>
              <div>
                <img
                  className="logo"
                  style={{ height: "100px", width: "100px" }}
                  src="/images/chi-phi-logo.png"
                  alt=""
                />
                <h3>Chi Phi Fraternity</h3>
                <p className="abt-club">Initiated Spring 2025</p>
              </div>
            </div>
            <div className="row ig-row">
              <InstagramEmbed url="https://www.instagram.com/p/DFszQKkpsOf/" />
              <p className="timeline-abt">
                Here at Florida Tech, I joined the ....
              </p>
            </div>
          </div>
        </div>

        {/* UWI */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-desc">
            <h3>
              University of the West Indies, St. Augustine, Trinidad & Tobago
            </h3>
            <p>B.Sc. Computer Science (August 2023 – December 2023)</p>
          </div>
          <div className="timeline-content">
            <div className="row">
              <GpaWheel
                label="Cumulative GPA"
                value={4.12}
                max={4.3}
                colorClass="gpa-green"
              />
              <div>
                <img
                  className="logo"
                  style={{ height: "100px", width: "200px" }}
                  src="/images/uwi-logo.png"
                  alt=""
                />
                <h3>Dean's List Fall 2023</h3>
              </div>
            </div>
            <div className="row ig-row">
              <InstagramEmbed url="https://www.instagram.com/p/CxwKEnlyQOC/" />
              <p className="timeline-abt">
                Here at the University of the West Indies, I joined the ....
              </p>
            </div>
          </div>
        </div>

        {/* High School */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-desc">
            <h3>Hillview College, Tunapuna, Trinidad & Tobago</h3>
            <p>September 2016 - May 2023</p>
          </div>
        </div>
        <div className="timeline-content">
          <div className="row">
            <GpaWheel
                label="SAT Score"
                value={1550}
                max={1600}
                colorClass="gpa-royal"
              />
            <div>
              <img
                className="logo"
                style={{ height: "100px", width: "200px" }}
                src="/images/moe-logo.png"
                alt=""
              />
              <h3>Open Scholarship Recipient 2023</h3>
            </div>
            <div>
              <img
                className="logo"
                style={{ height: "100px", width: "150px" }}
                src="/images/cxc-logo.png"
                alt=""
              />
              <h3>8 CXC Regional Merit List Placements</h3>
            </div>
            <div>
              <img
                className="logo"
                style={{ height: "100px", width: "120px" }}
                src="/images/hvc-logo.png"
                alt=""
              />
              <h3>Extra-curriculars</h3>
              {/* <p>Astronomy Club, Soccer Team, Environment Club</p> */}
            </div>
          </div>
          <div className="row scholarship-row">
            <img
              style={{ height: "200px", width: "600px" }}
              src="/images/scholarship.png"
              alt=""
            />
            <a href="https://storage.moe.gov.tt/wpdevelopment/2023/12/Media-Release-Scholarships-awarded-for-2023-CAPE-2.pdf">
              Ministry of Education TT || Scholarship Recipients Media Release
              2023
            </a>
          </div>
          <div className="row merit-list-row">
            {/* Merit List Slideshow Goes Here */}
            <div className="merit-col">
              <MeritCarousel items={MERIT_ITEMS} />
            </div>
            <div className="merit-desc">
              <p>This the text that i will use to talk about my 8 merit list placements and other great stuff like that</p>
            </div>
          </div>
          <div className=""></div>
          <div className="row astro-row">
            <div className="abt-club">
              <p>
                As the Vice President of the Astronomy Club, I organized and
                led various stargazing events and educational sessions to
                promote interest in astronomy among students.
              </p>
            </div>
            <div className="club-media">
              <img
                src="/images/astro-club.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
