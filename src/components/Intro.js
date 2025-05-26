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
      <p>I build applications for Web & Mobile</p>
      <p className={styles["intro-me"]}>
        <p className={styles["about-me"]}>
          I am a Full Stack Web Developer with a strong focus on building scalable, high-performance web applications with clean architecture and maintainable code. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and have additional backend experience in Golang, particularly for creating efficient APIs and microservices. I’m also well-versed in containerization using Docker, enabling smooth development and deployment workflows.<br/>
          Recently, I’ve expanded into mobile development with React Native, allowing me to build cross-platform applications while maintaining consistency across web and mobile platforms.<br/>
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
