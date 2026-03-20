import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

function Portal({ children }) {
  if (typeof document === "undefined") return null;
  return createPortal(children, document.body);
}

export default function LightboxOverlay({
  images,
  openIdx,
  close,
  prev,
  next,
}) {
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleTouchStart = (e) => {
    if (!e.touches?.length) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (images.length <= 1) return;
    if (touchStartX.current == null || touchStartY.current == null) return;
    if (!e.changedTouches?.length) return;

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const deltaX = endX - touchStartX.current;
    const deltaY = endY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    const SWIPE_THRESHOLD = 45;

    if (absX > SWIPE_THRESHOLD && absX > absY * 1.2) {
      if (deltaX < 0) next();
      else prev();
    }
  };

  if (openIdx == null) return null;

  return (
    <Portal>
      <div
        className="pg-lb__backdrop"
        onClick={close}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="pg-lb__frame"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            className="pg-lb__img"
            src={images[openIdx]}
            alt={`Image ${openIdx + 1}`}
          />
          <div className="pg-lb__caption">Image {openIdx + 1}</div>

          <button className="pg-lb__close" onClick={close} aria-label="Close">
            <FiX />
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
                <FiChevronLeft />
              </button>
              <button
                className="pg-lb__nav pg-lb__next"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next"
              >
                <FiChevronRight />
              </button>
            </>
          )}
        </div>
      </div>
    </Portal>
  );
}
