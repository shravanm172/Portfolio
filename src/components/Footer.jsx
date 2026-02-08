import { FaInstagram, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="site-footer" role="contentinfo">
      <div className="container footer-wrap">
        <div>
          <a href="tel:+13213432156" aria-label="Call (321) 343-2156">
            <span>
              <FaPhone />
            </span>{" "}
            (321) 343-2156
          </a>
        </div>
        <div>
          <a href="tel:+18687263435" aria-label="Call (1) 868-726-3435">
            <span>
              <FaPhone />
            </span>{" "}
            +1 (868) 726-3435
          </a>
        </div>

        {/* Email */}
        <div>
          <a
            href="mailto:shravanmaharaj1505@gmail.com"
            aria-label="shravanmaharaj1505@gmail.com"
          >
            <span>
              <MdEmail />
            </span>{" "}
            shravanmaharaj1505@gmail.com
          </a>
        </div>

        {/* Socials */}
        <div>
          <a
            href="https://github.com/shravanm172"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <span>
              <FaGithub />
            </span>{" "}
            shravanm172
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/shrayvan"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <span>
              <FaInstagram />
            </span>{" "}
            shrayvan
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/shravan-maharaj-840057349"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <span>
              <FaLinkedin />
            </span>{" "}
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-wrap-mobile">
        <div className="contact-column">
          <div>
            <a href="tel:+13213432156" aria-label="Call (321) 343-2156">
              <span>
                <FaPhone />
              </span>{" "}
              (321) 343-2156
            </a>
          </div>
          <div>
            <a href="tel:+18687263435" aria-label="Call (1) 868-726-3435">
              <span>
                <FaPhone />
              </span>{" "}
              +1 (868) 726-3435
            </a>
          </div>

          {/* Email */}
          <div>
            <a
              href="mailto:shravanmaharaj1505@gmail.com"
              aria-label="shravanmaharaj1505@gmail.com"
            >
              <span>
                <MdEmail />
              </span>{" "}
              shravanmaharaj1505@gmail.com
            </a>
          </div>
        </div>
        <div className="social-column">
          {/* Socials */}
          <div>
            <a
              href="https://github.com/shravanm172"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <span>
                <FaGithub />
              </span>{" "}
              shravanm172
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/shrayvan"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <span>
                <FaInstagram />
              </span>{" "}
              shrayvan
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/shravan-maharaj-840057349"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <span>
                <FaLinkedin />
              </span>{" "}
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <small className="muted">
          © {year} Shravan Maharaj. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
