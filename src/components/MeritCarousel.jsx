import { useEffect, useRef, useState } from "react";

export default function MeritCarousel({
  items = [], // [{src, title, desc, href}]
  auto = false, // set true if you want autoplay later
  interval = 5000,
}) {
  const [i, setI] = useState(0);
  const wrapRef = useRef(null);
  const touchStartX = useRef(null);

  const go = (idx) => setI((idx + items.length) % items.length);
  const next = () => go(i + 1);
  const prev = () => go(i - 1);

  // keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (!wrapRef.current) return;
      const within = wrapRef.current.contains(document.activeElement);
      if (!within) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i]);

  // autoplay (optional)
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [i, auto, interval]);

  // touch swipe
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    if (start == null) return;
    const dx = e.changedTouches[0].clientX - start;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section
      ref={wrapRef}
      className="merit-carousel"
      aria-roledescription="carousel"
      aria-label="CXC Regional Merit List placements"
    >
      <div
        className="merit-track"
        style={{ transform: `translateX(${-i * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {items.map((it, idx) => (
          <article
            className="merit-slide card"
            key={idx}
            aria-hidden={i !== idx}
          >
            <div className="merit-media">
              <img
                src={it.src}
                alt={it.title || `Merit list ${idx + 1}`}
                loading="lazy"
              />
            </div>
            <div className="merit-body">
              {it.title && <h3>{it.title}</h3>}
              {it.desc && <p className="muted">{it.desc}</p>}
              {it.href && (
                <a
                  className="btn"
                  href={it.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  View announcement
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      {/* Left / Right Arrow Buttons for Navigation */}
      {/* <button
        className="merit-nav prev"
        onClick={prev}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button className="merit-nav next" onClick={next} aria-label="Next slide">
        →
      </button> */}
      {/* Dots for navigation */}
      <div className="merit-dots" role="tablist" aria-label="Slide selector">
        {items.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${i === idx ? "active" : ""}`}
            onClick={() => go(idx)}
            role="tab"
            aria-selected={i === idx}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
