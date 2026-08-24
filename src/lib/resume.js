export const RESUME_PDF_URL =
  "https://drive.google.com/file/d/1IQF34lIy0daVN3dhziD9Qo0vwZBIMVx4";
  

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
