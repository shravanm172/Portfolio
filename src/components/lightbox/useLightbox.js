import { useCallback, useEffect, useState } from "react";

export function useLightbox(count) {
  const [openIdx, setOpenIdx] = useState(null);
  const isOpen = openIdx !== null;

  const close = useCallback(() => setOpenIdx(null), []);
  const prev = useCallback(() => setOpenIdx(i => (i + count - 1) % count), [count]);
  const next = useCallback(() => setOpenIdx(i => (i + 1) % count), [count]);

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
}
