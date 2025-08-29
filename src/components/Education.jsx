import React from "react";
import GpaWheel from "./GPAWheel";
import InstagramEmbed from "./InstagramEmbed";
import "../../styles/education.css";

const MERIT_ITEMS = [
  { year: "2023", title: "CAPE Pure Mathematics – Unit 2" },
  { year: "2023", title: "CAPE Applied Mathematics – Unit 2" },
  { year: "2022", title: "CAPE Computer Science – Unit 1" },
  { year: "2022", title: "CAPE Information Technology – Unit 1" },
  { year: "2022", title: "CAPE Pure Mathematics - Unit 1" },
  { year: "2022", title: "CAPE Applied Mathematics - Unit 1" },
  { year: "2021", title: "CSEC Mathematics - Unit 1" },
  { year: "2021", title: "CSEC Physics - Unit 1" },
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
                <p>Dean's List Fall 2024 & Spring 2025</p>
              </div>
              <div>
                <img
                  className="logo"
                  style={{ height: "100px", width: "80px" }}
                  src="/images/phi-eta-sigma-logo.svg"
                  alt=""
                />
                <p>Phi Eta Sigma National Honor Society</p>
                <p className="abt-club">Inducted Spring 2025</p>
              </div>
              <div>
                <img
                  className="logo"
                  style={{ height: "100px", width: "80px" }}
                  src="/images/UPE-logo.png"
                  alt=""
                />
                <p>Upsilon Pi Epsilon Honor Society</p>
                <p className="abt-club">Inducted Fall 2025</p>
              </div>
              <div>
                <img
                  className="logo"
                  style={{ height: "100px", width: "100px" }}
                  src="/images/chi-phi-logo.png"
                  alt=""
                />
                <p>Chi Phi Fraternity</p>
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
                <p>Dean's List Fall 2023</p>
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
          </div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};
