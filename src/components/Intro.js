import React from "react";

import styles from "../styles/page.module.css";
import resume from "../assests/samba_resume.pdf";

const Intro = () => {
  return (
    <div className={styles["intro-wrapper"]}>
      <p className={styles["welcome-msg"]}>Namaste! Good Day. My name is</p>
      <h1 className={styles["my-name"]}>Samba Siva Reddy</h1>
      <p className={styles["intro-me"]}>
        I am working as{" "}
        <span className={styles["highlight"]}>Member of Technical Staff</span>{" "}
        in Zoho Corporation. I am a{" "}
        <span className={styles["dashed-highlight"]}>
          Full Stack Web Developer
        </span>{" "}
        based on MERN stack. And have some knowledge in writing server code
        using <b>Golang</b> and <b>Dockerization</b>
        <br />
      </p>
      <a
        href="https://drive.google.com/file/d/1NBU-rR74c9QTxOnF5u5cRcAZNQYeIBpS/view?usp=sharing"
        alt="resume"
        className={styles["resume-link"]}
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </div>
  );
};

export default Intro;
