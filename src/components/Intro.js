import React from "react";

import styles from "../styles/page.module.css";

const Intro = () => {
  return (
    <div className={styles["intro-wrapper"]} id="about">
      <p className={styles["intro-me"]}>
        <p className={styles["about-me"]}>
        I’m V N G Samba Siva Reddy, a <b>Full Stack Engineer</b> and <b>Database Engineer at Zoho Corporation</b>, specializing in building scalable, maintainable systems across the web and database layers. My expertise spans the MERN stack, Golang-based backend services, and Docker-driven containerized environments, enabling me to architect and deliver robust, production-grade solutions end-to-end.
        </p>
        <p className={styles["about-me"]}>
        At Zoho, I’ve also worked extensively on <b>database internals, contributing to core components of our distributed relational database engine. My work includes enhancements to the PostgreSQL Planner and Executor, Connection Framework, and significant contributions to the Copy Framework—experience</b> that has strengthened my understanding of low-level performance, concurrency control, and distributed data consistency.
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
