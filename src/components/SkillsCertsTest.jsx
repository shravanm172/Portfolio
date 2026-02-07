import React from "react";
import CertificateCarousel from "./CertificateCarousel";
import SkillsCerts from "./SkillsCerts";

/**
 * Test component to easily switch between the original SkillsCerts
 * and the new CertificateCarousel
 *
 * To test:
 * 1. Replace SkillsCerts with SkillsCertsTest in App.jsx
 * 2. Toggle the USE_CAROUSEL constant below
 */

const USE_CAROUSEL = true; // Change to false to use original

export default function SkillsCertsTest() {
  if (USE_CAROUSEL) {
    return <CertificateCarousel />;
  }

  return <SkillsCerts />;
}
