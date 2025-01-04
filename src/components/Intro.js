import React from "react";

import styles from "../styles/page.module.css";
// import resume from "../assests/samba_resume.pdf";

const Intro = () => {
  return (
    <div className={styles["intro-wrapper"]}>
      <p className={styles["welcome-msg"]}>
        <span className={styles["wishes"]}>Namaste! Good Day.</span> My name is
      </p>
      <h1 className={styles["my-name"]}>Samba Siva Reddy</h1>
      <p className={styles["intro-me"]}>
        Currently, I am working as{" "}
        <span className={styles["highlight"]}>Member of Technical Staff</span>{" "}
        in Zoho Corporation. I am a{" "}
        <span className={styles["highlight"]}>Full Stack Web Developer</span>{" "}
        based on <b>MERN</b> stack and had good hands-on experience while
        building web applications using this stack. And have some knowledge in
        writing server code using <b>Golang</b> and <b>Dockerization</b>
        <br />
      </p>
      <a
        href="https://drive.google.com/file/d/1khukl7xHTkDGm1kQdoAgyI6e9HfvcnkO/view?usp=sharing"
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
