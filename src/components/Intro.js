import React from "react";

import styles from "../styles/page.module.css";
// import resume from "../assests/samba_resume.pdf";

const Intro = () => {
  return (
    <div className={styles["intro-wrapper"]}>
      <p className={styles["welcome-msg"]}>
        <span className={styles["wishes"]}>Namaste! I'm <b>Samba Siva Reddy</b>.</span> 
      </p>
      <h1 className={styles["my-name"]}>Software Developer</h1>
      <p><b>I build applications for Web & Mobile</b></p>
      <p className={styles["intro-me"]}>
        <p className={styles["about-me"]}>
          Full Stack Web Developer specializing in the MERN stack, with backend expertise in Golang and experience in Docker-based containerization. I focus on building scalable, maintainable applications with clean architecture. Recently, I’ve expanded into cross-platform mobile development using React Native.
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
