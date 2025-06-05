import React from "react";

import styles from "../styles/page.module.css";
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
// import resume from "../assests/samba_resume.pdf";

const Intro = () => {
  return (
    <div className={styles["intro-wrapper"]} id="about">
      {/* <p className={styles["welcome-msg"]}>
        <h3 className={styles["wishes"]}>Namaste! I'm <b className={styles['my-name']}>Samba Siva Reddy</b></h3>
      </p>
      <h1 className={styles["my-role"]}> Software Developer</h1> */}
      {/* <p><b>I build scalable applications for Web & Mobile.</b></p> */}
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
