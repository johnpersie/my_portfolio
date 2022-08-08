import React from "react";
import About from "../About";
import Contact from "../Contact";
import Hero from "../Hero";
import Project from "../Project";
import Service from "../Services";
import TechStack from "../TechStack";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <TechStack />
      <Project />
      <Contact />
    </>
  );
};

export default HomePage;
