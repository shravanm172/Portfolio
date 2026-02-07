export const RESUME_PDF_URL =
  "https://docs.google.com/document/d/YOUR_DOC_ID/export?format=pdf";

export function downloadResumePdf() {
  const a = document.createElement("a");
  a.href = RESUME_PDF_URL;

  // Keeps user on your site; also helps avoid replacing your current tab
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  document.body.appendChild(a);
  a.click();
  a.remove();
}
