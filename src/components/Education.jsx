import React from "react";
import GpaWheel from "./GpaWheel.jsx";
import MeritCarousel from "./MeritCarousel";
import InstagramEmbed from "./InstagramEmbed";
import EmblaMeritCarousel from "./EmblaMeritCarousel.jsx";
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
    href: "https://www.cxc.org/merit-lists/",
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
      <h2 className="section-heading">Education</h2>
      <div className="timeline" data-aos="fade-up">
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
                sizeMobile={110} // 👈 mobile
                sizeDesktop={180} // 👈 desktop
                stroke={14}
              />
              <div className="item">
                <img
                  className="logo"
                  // style={{ height: "80px", width: "80px" }}
                  src="/images/florida-tech-logo.png"
                  alt=""
                />
                <h3>Dean's List Honors</h3>
                <p>Fall 2024, Spring 2025, Fall 2025</p>
              </div>
              <div className="item">
                <img
                  className="logo"
                  // style={{ height: "100px", width: "80px" }}
                  src="/images/phi-eta-sigma-logo.svg"
                  alt=""
                />
                <h3>Phi Eta Sigma National Honor Society</h3>
                <p className="abt-club">Inducted Spring 2025</p>
              </div>
              <div className="item">
                <img
                  className="logo"
                  // style={{ height: "100px", width: "80px" }}
                  src="/images/UPE-logo.png"
                  alt=""
                />
                <h3>Upsilon Pi Epsilon Honor Society</h3>
                <p className="abt-club">Inducted Fall 2025</p>
              </div>
              <div className="item">
                <img
                  className="logo"
                  // style={{ height: "100px", width: "100px" }}
                  src="/images/chi-phi-logo.png"
                  alt=""
                />
                <h3>Chi Phi Fraternity</h3>
                <p className="abt-club">Initiated Spring 2025</p>
              </div>
            </div>
            <div className="row ig-row float-wrap">
              <div className="mobile-ig">
                <a
                  className="ig-card"
                  href="https://www.instagram.com/p/DFszQKkpsOf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on Instagram"
                >
                  <img
                    className="ig-card-img"
                    src="/images/gift-of-life.PNG"
                    alt=""
                    loading="lazy"
                  />
                  <div className="ig-card-cta">View on Instagram ↗</div>
                </a>
              </div>
              <div className="ig-embed-desktop">
                <InstagramEmbed url="https://www.instagram.com/p/DFszQKkpsOf/" />
              </div>
              <p className="timeline-abt">
                At the Florida Institute of Technology, one of Florida’s premier
                STEM universities, I embarked on a new chapter both academically
                and personally. Transferring schools meant leaving behind my
                friends and family to pursue my Computer Science degree, and
                while the adjustment was challenging, it has been one of the
                most rewarding experiences of my life. I am currently a
                sophomore, making the most of every opportunity to grow. <br />
                <br />
                In Spring 2025, I rushed and was initiated into Chi Phi
                Fraternity, the nation’s oldest social fraternity. This
                brotherhood has given me the chance to form meaningful
                friendships with peers from across the country, while also
                engaging in service projects that reminded me education is not
                only about ambition, but also about purpose. I’ve had the
                privilege of supporting causes such as a local orphanage, Gift
                of Life, and Wounded Warriors—experiences that have instilled in
                me a deeper commitment to service and community. <br />
                <br />
                In August 2025, I was inducted into Upsilon Pi Epsilon (UPE),
                the international honor society for computing sciences. Joining
                this prestigious organization has allowed me to connect with the
                top students in my field and give back through tutoring at the
                Computer Science help desk. Looking ahead, I am excited to
                represent Florida Tech with the Competitive Programming Team,
                including the upcoming International Collegiate Programming
                Contest (ICPC).
                <br />
                <br />
                Academically, I have remained dedicated to excellence, earning
                Dean’s List honors in both semesters so far. This distinction
                also led to my induction into Phi Eta Sigma, a national honor
                society that recognizes first-year academic achievement. Beyond
                academics, I spent a year with the Florida Tech Club Soccer
                Team, where I trained and competed with peers across the
                division, reinforcing lessons of discipline and teamwork. My
                time at Florida Tech has been one of transformation—balancing
                scholarship, service, leadership, and personal growth.
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
              <div className="item">
                <img
                  className="logo"
                  // style={{ height: "100px", width: "200px" }}
                  src="/images/uwi-logo.png"
                  alt=""
                />
                <h3>Top Matriculant 2023/2024</h3>
                {/* <p className="abt-club">Dean's List Honors -Fall 2023</p> */}
              </div>
            </div>
            <div className="row ig-row float-wrap">
              <div className="mobile-ig">
                <a
                  className="ig-card"
                  href="https://www.instagram.com/p/CxwKEnlyQOC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on Instagram"
                >
                  <img
                    className="ig-card-img"
                    src="/images/matriculant-ig.png"
                    alt=""
                    loading="lazy"
                  />
                  <div className="ig-card-cta">View on Instagram ↗</div>
                </a>
              </div>
              <div className="ig-embed-desktop">
                <InstagramEmbed url="https://www.instagram.com/p/CxwKEnlyQOC/" />
              </div>
              <p className="timeline-abt">
                After graduating secondary school in May 2023, I began my
                tertiary journey at the University of the West Indies (UWI), the
                Caribbean’s largest and most prestigious university. Although my
                time there was brief—thanks to the tremendous fortune of winning
                an Open Scholarship that allowed me to continue my undergraduate
                studies abroad at Florida Tech—my UWI experience was both
                meaningful and memorable. <br />
                <br />
                One of the greatest honors of my life was being named the Top
                Matriculant 2023/24, an award presented to just one student out
                of hundreds in the incoming class. More than recognizing
                academic achievement, it highlighted qualities of leadership and
                well-roundedness. At the matriculation ceremony in September
                2023, I had the privilege of signing the symbolic Matriculation
                Register on behalf of my cohort—a moment that filled me with
                immense pride and gratitude. This recognition opened doors to
                further opportunities, including being interviewed and featured
                on the front cover of UWI Today, the university’s official
                publication.
                <br />
                <br /> Even within that short period, I remained committed to
                academic excellence, earning a 4.12 GPA with Dean’s List honors.
                My time at UWI reinforced my confidence in what I could achieve
                and laid the foundation for the next chapter of my education.
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
        <div className="timeline-content hvc-content">
          <div className="mobile-hvc">
            <div className="row">
              <GpaWheel
                label="SAT Score"
                value={1550}
                max={1600}
                colorClass="gpa-royal"
              />
              <div className="item">
                <img
                  className="logo"
                  // style={{ height: "100px", width: "200px" }}
                  src="/images/moe-logo.png"
                  alt=""
                />
                <h3>Open Scholarship Recipient 2023</h3>
              </div>
              <div className="item">
                <img
                  className="logo"
                  // style={{ height: "100px", width: "150px" }}
                  src="/images/cxc-logo.png"
                  alt=""
                />
                <h3>8 CXC Regional Merit List Placements</h3>
              </div>
              <div className="item">
                <img
                  className="logo"
                  // style={{ height: "100px", width: "120px" }}
                  src="/images/hvc-logo.png"
                  alt=""
                />
                <h3>Extra-curriculars</h3>
                {/* <p>Astronomy Club, Soccer Team, Environment Club</p> */}
              </div>
            </div>
            <div className="row scholarship-row">
              <h4>Open Scholarship Recipient 2023</h4>
              <a href="https://storage.moe.gov.tt/wpdevelopment/2023/12/Media-Release-Scholarships-awarded-for-2023-CAPE-2.pdf">
                Ministry of Education TT || Scholarship Recipients Media Release
                2023
              </a>
              <p>
                In 2023, the Ministry of Education TT awarded 45 open
                scholarships to the top-performing students nationally in the
                CAPE 2022/23 examinations, including 5 in the Communications and
                Information Technology Studies category. It is a highly
                competitive and prestigious honor that recognizes outstanding
                academic achievement in my field. I was privileged to be one of
                these few recipients, earning a full-ride scholarship that
                covers my tuition at any accredited university worldwide. This
                enabled me to pursue my undergraduate studies in Computer
                Science at Florida Institute of Technology.
              </p>
            </div>
          </div>
          <div className="row merit-list-row float-wrap">
            {/* Merit List Slideshow */}
            <div className="merit-col">
              <EmblaMeritCarousel
                items={MERIT_ITEMS}
                options={{
                  loop: false,
                  align: "start",
                  dragFree: true,
                  containScroll: "trimSnaps",
                }}
              />
            </div>
            <div className="merit-desc">
              <p>
                The CXC regional merit list is the pinnacle of academic prestige
                in Caribbean, with thousands of students from different
                territories competing for a spot each year. It highlights the
                top ten performers in each subject across all partcipating
                countries. <br />
                <br />
                In 2021, I wrote CSEC examinations for 9 subjects, earning 8
                Grade 1s with full distinctions and 1 Grade 2. I was also
                honored to place 4th in Mathematics and 2nd in Physics in the
                entire Caribbean.
                <br />
                <br /> The next year, in 2022, I wrote 4 CAPE Unit 1 subjects,
                earning 4 Grade 1s with full distinctions and earning a place in
                a further 4 regional merit lists. I was honored to place 9th in
                Pure Mathematics U1, 9th in Applied Mathematics U1, 7th in
                Computer Science U1 and 9th in Information Technology U1.
                <br />
                <br /> I then went on to write 4 CAPE Unit 2 subjects in
                addition to Communication Studies and Caribbean Studies the
                following year, earning 6 Grade 1s with full distinctions.
                Additionally, I placed 3rd in Pure Mathematics U2 and 3rd in
                Applied Mathematics U2. <br />
                <br />
                In total, I have earned a spot in 10 regional merit lists,
                placing me amongst the region's top performers in these
                subjects.
              </p>
            </div>
          </div>
          <div className="row astro-row float-wrap">
            <div className="club-media">
              <img src="/images/astro-club.jpg" alt="" />
            </div>
            <div className="abt-club">
              <p>
                As Vice President of the Astronomy Club, I had the opportunity
                to turn my fascination with the universe into something I could
                share with others. I organized and delivered weekly
                presentations on astronomical phenomena, and I helped lead our
                team to national success in the Trinidad & Tobago National
                Astronomy Quiz, earning 3rd place in 2021 and 2nd place in 2022.
                Beyond these achievements, what mattered most to me was sparking
                curiosity among my peers and developing leadership and
                organizational skills that I continue to use today. <br />
                <br />I also devoted time to the Hillview Environmental Action
                League, where I worked with classmates to plan school-wide
                clean-ups and promote recycling initiatives. Some of my favorite
                memories come from beach clean-up events, where the impact of
                our efforts was immediately visible and deeply rewarding.
                <br />
                <br /> Finally, I was proud to represent Hillview on the
                Spartans football team for three years. Weekly practices and
                competitive matches against other schools taught me the
                discipline, teamwork, and resilience that come from pushing
                yourself both individually and as part of a group. These lessons
                continue to influence how I approach challenges, on and off the
                field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
