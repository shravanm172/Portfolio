import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../../styles/emblaCarousel.css";

export default function EmblaMeritCarousel({
  items = [], // [{ src, title, desc, href }]
  options = { loop: true, align: "center", skipSnaps: false },
  variant = "merit", // "merit" or "certificates"
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  if (!items.length) return null;

  return (
    <section
      className={`embla embla--${variant}`}
      aria-roledescription="carousel"
      aria-label={
        variant === "certificates"
          ? "Professional certifications"
          : "CXC Regional Merit List placements"
      }
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {items.map((it, idx) => (
            <div className="embla__slide" key={idx}>
              <article className="merit-slide">
                <div className="merit-media">
                  <img
                    src={it.src}
                    alt={it.title || `Merit list ${idx + 1}`}
                    loading="lazy"
                  />
                </div>

                <div className="merit-body">
                  {it.title && <h3>{it.title}</h3>}
                  {(it.issuer || it.year) && (
                    <div className="merit-meta">
                      {/* {it.issuer && (
                        <span className="merit-issuer">{it.issuer}</span>
                      )} */}
                      {it.year && <span className="merit-year">{it.year}</span>}
                    </div>
                  )}
                  {it.desc && <p className="muted">{it.desc}</p>}
                  {it.href && (
                    <a
                      className="btn"
                      href={it.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Merit Lists
                    </a>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="embla__controls">
        <div className="embla__buttons">
          <button
            className={`embla__button embla__button--prev${!canPrev ? " embla__button--disabled" : ""}`}
            onClick={scrollPrev}
            disabled={!canPrev}
            aria-label="Previous slide"
            type="button"
          >
            ‹
          </button>

          <button
            className={`embla__button embla__button--next${!canNext ? " embla__button--disabled" : ""}`}
            onClick={scrollNext}
            disabled={!canNext}
            aria-label="Next slide"
            type="button"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="embla__dots" role="tablist" aria-label="Slide selector">
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`embla__dot${idx === selectedIndex ? " is-selected" : ""}`}
              onClick={() => scrollTo(idx)}
              type="button"
              role="tab"
              aria-selected={idx === selectedIndex}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
