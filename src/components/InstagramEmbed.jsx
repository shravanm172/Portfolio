import { useEffect, useRef } from "react";

const SCRIPT_ID = "ig-embed-script";

export default function InstagramEmbed({ url, showCaption = false, className }) {
  const ref = useRef(null);
  const canonical = (url || "").split("?")[0].replace(/\/?$/, "/");

  useEffect(() => {
    const process = () => window.instgrm?.Embeds?.process?.();
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) { process(); return; }
    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    s.onload = process;
    document.body.appendChild(s);
  }, [canonical]);

  return (
    <div className={`ig-wrap ${className || ""}`} ref={ref}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={canonical}
        data-instgrm-version="14"
        {...(showCaption ? { "data-instgram-captioned": "" } : {})}
        style={{ margin: 0 }}
      >
        <a href={canonical} target="_blank" rel="noopener noreferrer">
          View on Instagram
        </a>
      </blockquote>
    </div>
  );
}
