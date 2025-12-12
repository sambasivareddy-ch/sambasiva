import React from "react";

import styles from "../styles/page.module.css";

const Intro = () => {
  return (
    <div className={styles["intro-wrapper"]} id="about">
      <p className={styles["intro-me"]}>
        <p className={styles["about-me"]}>
        I’m V N G Samba Siva Reddy, a <b style={{color: "#64FEDB"}}>Full Stack Engineer</b> and working as <b style={{color: "#64FEDB"}}>Database Researcher at Zoho Corporation</b>, specializing in building scalable, maintainable systems across the web and database layers. My expertise spans the building robust Database systems, MERN stack, Golang-based backend services, and Docker-driven containerized environments, enabling me to architect and deliver robust, production-grade solutions end-to-end.
        </p>
      </p>
      <div className={styles['info-links']}>
        <a
          href="https://www.linkedin.com/in/samba-siva-reddy-ch/"
          alt="resume"
          className={styles["linkedin-link"]}
          target="_blank"
          rel="noreferrer"
          aria-label="linkedin"
        >
          LinkedIn
        </a>
        <a
          href="https://drive.google.com/file/d/1nDr5RtHl5S5Vj-Wb2kMFd-DyLnC6IL-Z/view"
          alt="resume"
          className={styles["resume-link"]}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Intro;
