import React from "react";

export default function ProjectGallery({ images = [] }) {
  if (!images.length) return null;
  return (
    <div className="gallery-masonry" aria-label="Project screenshots">
      {images.map((src, i) => (
        <a key={i} className="gallery-item" href={src} target="_blank" rel="noreferrer">
          <img src={src} alt={`Screenshot ${i + 1}`} loading="lazy" />
        </a>
      ))}
    </div>
  );
}
