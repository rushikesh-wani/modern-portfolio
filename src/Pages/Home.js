import Nav from "../Components/Nav";
import React from "react";
import Hero from "../ComponentsAnimated/Hero";
import AboutMe from "../ComponentsAnimated/AboutMe";
import Skills from "../ComponentsAnimated/Skills";
import Projects from "../ComponentsAnimated/Projects";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="bg-gray-100/50 text-black dark:bg-gray-900 dark:text-white">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
