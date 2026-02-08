import React from "react";
import GpaWheel from "./GpaWheel.jsx";
import InstagramEmbed from "./InstagramEmbed";
import EmblaMeritCarousel from "./EmblaMeritCarousel.jsx";
import "../../styles/education.css";

const MERIT_ITEMS = [
  {
    src: "/images/pure-u2.png",
    title: "CAPE Pure Mathematics – Unit 2",
    year: "2023",
    href: "https://www.cxc.org/merit-lists/",
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
      <h2 className="section-heading">Education</h2>
      <div className="timeline" data-aos="fade-up">
        {/* University of Central Florida */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-desc">
            <h3>University of Central Florida, Orlando, FL</h3>
            <p>B.S. Computer Science (January 2026 – May 2028)</p>
          </div>
          <div className="timeline-content uni-content">
            <div className="row">
              <div className="item">
                <img
                  className="logo"
                  src="/images/UCFlogo.png"
                  alt=""
                  // style={{ height: "80px", width: "80px" }}
                />
              </div>
            </div>
            <p className="timeline-abt">
              I transferred to the University of Central Florida in Spring 2026
              to further challenge myself and to grow professionally within one
              of the strongest computer science environments in the US. The
              school’s values of Integrity, Scholarship, Community, Creativity,
              and Excellence are principles that closely align with how I
              approach my academic and personal development. <br />
              <br />
              While such a transition comes at the cost of moving away from my
              valued colleagues and community at Florida Tech, I am confident
              that it will pay off in the grand scheme of my career. The thing I
              look forward to the most is pursuing a minor in FinTech in Fall
              2026 as I explore the growing intersection of technology and the
              finance industry. I have begun engaging with the campus community
              by joining the Association for Computing Machinery where I have
              attended seminars and workshops that have broadened my perspective
              on the latest developments in the tech industry. I hope to take
              advantage of the incredible internship opportunities offered by
              this school soon. For now, I am grateful to be learning from the
              exceptional faculty at this institution as I embrace this new
              chapter of my academic journey. <br />
              <b>Go Knights!</b>
            </p>
          </div>
        </div>

        {/* Florida Tech */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-desc">
            <h3>Florida Institute of Technology, Melbourne, FL</h3>
            <p>B.S. Computer Science (August 2024 – December 2025)</p>
          </div>
          <div className="timeline-content uni-content">
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
            {/* <div className="row ig-row float-wrap"> */}

            <div className="ig-embed-desktop">
              <InstagramEmbed url="https://www.instagram.com/p/DFszQKkpsOf/" />
            </div>
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
                  src="/images/gift-of-life.png"
                  alt=""
                  loading="lazy"
                />
                <div className="ig-card-cta">View on Instagram ↗</div>
              </a>
            </div>
            <p className="timeline-abt">
              At Florida Tech, one of Florida’s finest STEM universities, I
              experienced a period of significant academic and personal growth.
              As a Computer Science major, I challenged myself to fully engage
              with the university’s rigorous curriculum while remaining active
              in campus life. What began as an adjustment to life in a new
              country quickly became one of the most rewarding chapters of my
              journey—shaping my work ethic, independence, and sense of purpose.
              <br />
              <br />
              In Spring 2025, I was initiated into Chi Phi Fraternity, the
              nation’s oldest social fraternity. Through this brotherhood, I
              formed lasting connections with peers from across the country and
              participated in service initiatives that reinforced the importance
              of leadership and community involvement beyond academics. I
              supported causes including local orphanages, Gift of Life, and
              Wounded Warriors—experiences that strengthened my commitment to
              service and community impact.
              <br />
              <br />
              In August 2025, I was honored to be inducted into Upsilon Pi
              Epsilon, the international honor society for computing sciences.
              Membership in UPE allowed me to collaborate with top-performing
              students in my field and give back through voluntary tutoring at
              the Computer Science Help Desk.
              <br />
              <br />
              Academically, I earned Dean’s List honors in all three semesters,
              leading to my induction into Phi Eta Sigma at the conclusion of my
              first year. Beyond the classroom, I spent a year competing with
              the Florida Tech Club Soccer Team, where the discipline, teamwork,
              and consistency required mirrored the mindset essential to
              engineering and software development. My time at Florida Tech
              represented a period of transformation—balancing scholarship,
              leadership, service, and personal growth.
            </p>

            {/* </div> */}
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
          <div className="timeline-content uni-content">
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
                  src="/images/top_matriculant.jpg"
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
              After graduating high school in May 2023, I began my tertiary
              education journey at the University of the West Indies (UWI), the
              Caribbean’s largest and most prestigious university. <br />
              <br />
              In my first semester, I was bestowed one of the greatest honors of
              my life, being named the Top Matriculatant 2023/24, an award
              granted to just one student out of hundreds in the incoming class.
              Beyond recognizing my lifelong academic achievement, this award
              highlighted qualities of leadership, character, and
              well-roundedness. At the matriculation ceremony in September 2023,
              I had the privilege of signing the symbolic Matriculation Register
              on behalf of my cohort—a moment that filled me with immense pride
              and gratitude. This recognition opened doors to further
              opportunities, including being interviewed and featured on the
              front cover of UWI Today, the university’s official publication.
              <br />
              <br />
              However, due to the tremendous fortune of being awarded an Open
              Scholarship, my time at UWI was cut short, as I then went on to
              continue my undergraduate studies abroad at Florida Tech. Though
              brief, my experience at this university was deeply meaningful and
              memorable, laying a strong foundation for the journey that
              followed.
            </p>
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
                In 2023, the Ministry of Education (Trinidad and Tobago) awarded
                45 Open Scholarships to the top-performing students nationwide
                in the CAPE 2022/23 examinations, including only five in the
                Communications and Information Technology Studies category. This
                highly competitive and prestigious award recognizes exceptional
                academic excellence at the national level. I was honored to be
                among this select group of recipients, earning a full-ride
                scholarship that covers tuition at any accredited university
                worldwide. I am deeply grateful for the opportunities this award
                has opened for me—it represents the culmination of years of
                dedication, discipline, and perseverance. Achieving an Open
                Scholarship was a goal I aspired to from an early age, dating
                back to my first days walking through the gates of Hillview
                College. This scholarship enabled me to pursue my undergraduate
                studies in Computer Science at the Florida Institute of
                Technology, and continues to serve as both a foundation and a
                responsibility as I advance through my academic journey.
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
                The Caribbean Examinations Council (CXC) Regional Merit List
                represents the highest level of academic distinction in the
                Caribbean at the secondary level, recognizing the top ten
                performers in each subject across all participating territories.
                Each year, thousands of students compete for a spot, making
                placement on the list a mark of exceptional academic
                achievement. <br />
                <br />
                In 2021, I completed nine CSEC subjects, earning eight Grade 1
                passes with full distinctions and one Grade 2. That year, I
                placed 4th in Mathematics and 2nd in Physics across the entire
                Caribbean. <br />
                <br />
                In 2022, I sat four CAPE Unit 1 subjects, earning four Grade 1
                passes with full distinctions and securing placement on four
                additional Regional Merit Lists. I placed 9th in Pure
                Mathematics (U1), 9th in Applied Mathematics (U1), 7th in
                Computer Science (U1), and 9th in Information Technology (U1).
                <br />
                <br />
                The following year, I completed four CAPE Unit 2 subjects, along
                with Communication Studies and Caribbean Studies, earning six
                Grade 1 passes with full distinctions. I placed 3rd in Pure
                Mathematics (U2) and 3rd in Applied Mathematics (U2) across the
                region. In total, I have earned placement on 8 CXC Regional
                Merit Lists, positioning me among the Caribbean’s top-performing
                students in mathematics, computing, and related disciplines.
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
