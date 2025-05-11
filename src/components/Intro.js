import React from "react";

import styles from "../styles/page.module.css";
// import resume from "../assests/samba_resume.pdf";

const Intro = () => {
  return (
    <div className={styles["intro-wrapper"]}>
      <p className={styles["welcome-msg"]}>
        <span className={styles["wishes"]}>Namaste! I'm <b>Samba Siva Reddy</b>.</span> 
      </p>
      <h1 className={styles["my-name"]}>Full-stack Engineer</h1>
      <p className={styles["intro-me"]}>
        <p className={styles["about-me"]}>
          I am a Full Stack Web Developer with a strong focus on building efficient and scalable web applications. With a passion for clean architecture and maintainable code, I specialize in the <span className={styles["highlight"]}>MERN stack (MongoDB, Express.js, React.js, Node.js)</span>  and possess additional backend experience in <span className={styles["highlight"]}>Go (Golang) and containerization using Docker.</span><br/><br/>
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
