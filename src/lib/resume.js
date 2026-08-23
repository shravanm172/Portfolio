export const RESUME_PDF_URL =
  "https://docs.google.com/document/d/1ImqRpPD1K6U-uzGjDgsoQop9B0_LfbzqUtwBXHJFZOo/edit?usp=sharing";
  

export function downloadResumePdf() {
  const a = document.createElement("a");
  a.href = RESUME_PDF_URL;

  // Keeps user on the site; also helps avoid replacing your current tab
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  document.body.appendChild(a);
  a.click();
  a.remove();
}
