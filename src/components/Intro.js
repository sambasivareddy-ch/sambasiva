import React from "react";

import styles from "../styles/page.module.css";
import resume from "../assests/samba_resume.pdf";

const Intro = () => {
  return (
    <div className={styles["intro-wrapper"]}>
      <p className={styles["welcome-msg"]}>Hi, my name is</p>
      <h1 className={styles["my-name"]}>Samba Siva Reddy</h1>
      <p className={styles["intro-me"]}>
        I'm working as{" "}
        <span className={styles["highlight"]}>Software Developer (MTS)</span> in
        Zoho Corporation. I am a{" "}
        <span className={styles["dashed-highlight"]}>
          Full Stack Web Developer
        </span>{" "}
        based on MERN stack. I am currently working on building CLI Applications
        & Web servers using Go.
        <br />
      </p>
      <a
        href="https://drive.google.com/file/d/1NBU-rR74c9QTxOnF5u5cRcAZNQYeIBpS/view?usp=drive_link"
        alt="resume"
        className={styles["resume-link"]}
        target="_blank"
      >
        Resume
      </a>
    </div>
  );
};

export default Intro;
