import { useEffect, useState } from "react";
import { downloadResumePdf } from "../lib/resume";
import "../../styles/resumeToast.css";

export default function ResumeWidget({ delayMs = 2500 }) {
  const STORAGE_COLLAPSED = "resumeWidgetCollapsed";

  const [collapsed, setCollapsed] = useState(true);
  const [attention, setAttention] = useState(false);

  // Restore open/collapsed preference
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_COLLAPSED);
    if (saved === "false") setCollapsed(false);
  }, []);

  // Delayed “hey look here” animation (does NOT hide/show)
  useEffect(() => {
    const t = window.setTimeout(() => {
      setAttention(true);
      window.setTimeout(() => setAttention(false), 1200);
    }, delayMs);

    return () => window.clearTimeout(t);
  }, [delayMs]);

  function open() {
    setCollapsed(false);
    localStorage.setItem(STORAGE_COLLAPSED, "false");
  }

  function close() {
    setCollapsed(true);
    localStorage.setItem(STORAGE_COLLAPSED, "true");
  }

  return (
    <div className={`resume-widget ${attention ? "attention" : ""}`}>
      {collapsed ? (
        <button
          className="resume-launcher"
          onClick={open}
          title="Download resume"
        >
          Resume <span className="resume-dot" aria-hidden="true" />
        </button>
      ) : (
        <div className="resume-panel">
          <div className="resume-title">Download my resume?</div>
          <div className="resume-subtitle">One-click PDF download.</div>

          <div className="resume-actions">
            <button className="resume-primary" onClick={downloadResumePdf}>
              Download PDF
            </button>
            <button className="resume-secondary" onClick={close}>
              Minimize
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
