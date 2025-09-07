// App.jsx
import { useEffect } from "react";
import "./App.css";
import TopBanner from "./components/TopBanner";
import { Education } from "./components/Education";
import SkillsCerts from "./components/SkillsCerts";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "aos/dist/aos.css";
import AOS from "aos";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
      offset: 80,
    });
    const onLoad = () => AOS.refresh();
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <>
      <TopBanner />      
      <Education />
      <SkillsCerts />
      <WorkExperience />
      <Projects />
      <Footer />
    </>
  );
}
