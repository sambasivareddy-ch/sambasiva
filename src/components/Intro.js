import React from "react";

import styles from "../styles/page.module.css";

const Intro = () => {
  return (
    <div className={styles["intro-wrapper"]} id="about">
      <p className={styles["intro-me"]}>
        <p className={styles["about-me"]}>
          I'm a Full Stack Web Developer specializing in the MERN stack, with backend expertise in Golang and hands-on experience with Docker-based containerization.
          I focus on delivering clean, maintainable architecture that scales well.
          Recently, I’ve expanded into cross-platform mobile development using React Native.<br />
          Currently, I serve as a Member of Technical Staff at Zoho Corporation.
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
        {/* <a
          href="https://drive.google.com/file/d/1qxnK_7-Zj3bVdxGUlGAGaZEhyG6DMhh3/view"
          alt="resume"
          className={styles["resume-link"]}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a> */}
      </div>
    </div>
  );
};

export default Intro;
