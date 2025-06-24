import styles from "../styles/app.module.css";

import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
// import BlogSection from "../components/BlogSection";

const Main = () => {
  return (
    <div className={styles["app"]}>
      <Navigation />
      {/* <hr/> */}
      <About />
      <Intro />
      <Skills />
      <Experiences />
      {/* <BlogSection /> */}
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
