import styles from "../styles/app.module.css";

import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
// import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Main = () => {
  return (
    <div className={styles["app"]}>
      <Navigation />
      <Intro />
      {/* <About /> */}
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
