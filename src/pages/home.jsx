// src/pages/Home.jsx
import React from "react";
import Hero from "../sections/HeroSections";
import About from "../sections/AboutSection";
import Portfolio from "../sections/PorfolioSection";
import Contact from "../sections/ContactSection";
import OurTeam from "../sections/OurTeam";

const Home = () => {
  return (
    <div className="pt-20"> {/* padding top untuk kasih jarak dari navbar */}
      <Hero />
      <About />
      <OurTeam />
      <Portfolio />
      <Contact />

    </div>
  );
};

export default Home;
