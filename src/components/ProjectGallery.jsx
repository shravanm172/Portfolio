import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) =>
  typeof document === "undefined"
    ? null
    : createPortal(children, document.body);

const useProjectLightbox = (count) => {
  const [openIdx, setOpenIdx] = useState(null);
  const isOpen = openIdx !== null;

  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(
    () => setOpenIdx((i) => (i + count - 1) % count),
    [count],
  );
  const next = useCallback(() => setOpenIdx((i) => (i + 1) % count), [count]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, prev, next]);

  return { openIdx, setOpenIdx, isOpen, close, prev, next };
};

export default function ProjectGallery({ images = [] }) {
  const { openIdx, setOpenIdx, isOpen, close, prev, next } = useProjectLightbox(
    images.length,
  );

  if (!images.length) return null;

  return (
    <>
      <div className="gallery-masonry" aria-label="Project screenshots">
        {images.map((src, i) => (
          <a
            key={i}
            className="gallery-item"
            href={src}
            onClick={(e) => {
              e.preventDefault();
              setOpenIdx(i);
            }}
            aria-label={`Open screenshot ${i + 1}`}
          >
            <img src={src} alt={`Screenshot ${i + 1}`} loading="lazy" />
          </a>
        ))}
      </div>

      {isOpen && (
        <Portal>
          <div
            className="pg-lb__backdrop"
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <div className="pg-lb__frame" onClick={(e) => e.stopPropagation()}>
              <img
                className="pg-lb__img"
                src={images[openIdx]}
                alt={`Screenshot ${openIdx + 1}`}
              />
              <div className="pg-lb__caption">Screenshot {openIdx + 1}</div>

              <button
                className="pg-lb__close"
                onClick={close}
                aria-label="Close"
              >
                ×
              </button>

              {images.length > 1 && (
                <>
                  <button
                    className="pg-lb__nav pg-lb__prev"
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    aria-label="Previous"
                  >
                    ‹
                  </button>
                  <button
                    className="pg-lb__nav pg-lb__next"
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    aria-label="Next"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
