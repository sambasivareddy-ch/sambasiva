import styles from "../styles/app.module.css";

import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
// import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";

const Main = () => {
  return (
    <div className={styles["app"]}>
      <Navigation />
      <Intro />
      {/* <About /> */}
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
