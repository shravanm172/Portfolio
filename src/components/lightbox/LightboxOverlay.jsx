import React from "react";
import { createPortal } from "react-dom";

function Portal({ children }) {
  if (typeof document === "undefined") return null;
  return createPortal(children, document.body);
}

export default function LightboxOverlay({ images, openIdx, close, prev, next }) {
  if (openIdx == null) return null;

  return (
    <Portal>
      <div className="pg-lb__backdrop" onClick={close} role="dialog" aria-modal="true">
        <div className="pg-lb__frame" onClick={(e) => e.stopPropagation()}>
          <img
            className="pg-lb__img"
            src={images[openIdx]}
            alt={`Image ${openIdx + 1}`}
          />
          <div className="pg-lb__caption">Image {openIdx + 1}</div>

          <button className="pg-lb__close" onClick={close} aria-label="Close">×</button>

          {images.length > 1 && (
            <>
              <button
                className="pg-lb__nav pg-lb__prev"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous"
              >‹</button>
              <button
                className="pg-lb__nav pg-lb__next"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next"
              >›</button>
            </>
          )}
        </div>
      </div>
    </Portal>
  );
}
