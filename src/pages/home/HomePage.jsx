import React from "react";
import { About } from "../../components/about/About";
import { Education } from "../../components/education/Education";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Projects } from "../../components/projects/Projects";
import { Skills } from "../../components/skills/Skills";

export const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};
