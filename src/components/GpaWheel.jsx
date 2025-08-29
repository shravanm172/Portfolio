// src/components/GpaWheel.jsx
import React, {
  useMemo,
  useRef,
  useEffect,
  useState,
  useId
} from "react";
import "../../styles/gpa_wheel.css";

export default function GpaWheel({
  label = "Cumulative GPA",
  value = 3.9,
  max = 4.0,
  size = 140,       // px
  stroke = 12,      // ring thickness
  decimals = 2,
  colorClass = "gpa-accent",
  animateOnView = true,
  animateOnce = true,
  durationMs = 900, // consistent name
}) {
  const rootRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const id = useId(); // unique per instance (for gradient)

  // Observe when the wheel enters the viewport
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
        else if (!animateOnce) setInView(false);
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animateOnce]);

  useEffect(() => {
    if (animateOnView && inView && !hasPlayed) setHasPlayed(true);
  }, [animateOnView, inView, hasPlayed]);

  // math
  const clamped = Math.max(0, Math.min(value, max));
  const pct = (clamped / max) * 100;
  const livePct = !animateOnView ? pct : (inView || hasPlayed ? pct : 0);

  const radius = useMemo(() => (size - stroke) / 2, [size, stroke]);
  const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);

  // animate the ring with livePct
  const dashOffset = useMemo(
    () => circumference * (1 - livePct / 100),
    [circumference, livePct]
  );

  // endcap follows the animated tip
  const angle = useMemo(
    () => Math.PI * 2 * (livePct / 100) - Math.PI / 2,
    [livePct]
  );
  const endcapX = useMemo(
    () => size / 2 + radius * Math.cos(angle),
    [size, radius, angle]
  );
  const endcapY = useMemo(
    () => size / 2 + radius * Math.sin(angle),
    [size, radius, angle]
  );

  return (
    <figure
      ref={rootRef}
      className={`gpa-wheel ${colorClass}`}
      style={{ width: size, height: size, "--gpa-duration": `${durationMs}ms` }}
    >
      <svg
        className="gpa-svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={`${label}: ${clamped.toFixed(decimals)} out of ${max}`}
      >
        <defs>
          <linearGradient id={`gpaGradient-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" />
            <stop offset="100%" />
          </linearGradient>
        </defs>

        {/* Track */}
        <circle
          className="gpa-track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          fill="none"
        />

        {/* Progress ring (starts at top due to rotation) */}
        <circle
          className="gpa-progress"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          fill="none"
          stroke={`url(#gpaGradient-${id})`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />

        {/* Animated endcap (only when > 0%) */}
        {livePct > 0 && (
          <circle className="gpa-endcap" r={stroke / 2} cx={endcapX} cy={endcapY} />
        )}
      </svg>

      <figcaption className="gpa-caption">
        <span>{clamped.toFixed(decimals)} / {max}</span>
        <span>{label}</span>
      </figcaption>
    </figure>
  );
}
