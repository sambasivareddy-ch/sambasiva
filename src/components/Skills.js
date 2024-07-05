import React from "react";

import styles from "../styles/page.module.css";

const Skills = (props) => {
  return (
    <div className={styles["skills-wrapper"]} id="skills">
      <h2 className={styles["title"]}>Skills</h2>
      <ol className={styles["skills-list"]}>
        <li className={styles["skill"]}>C language</li>
        <li className={styles["skill"]}>C++</li>
        <li className={styles["skill"]}>Java</li>
        <li className={styles["skill"]}>Python</li>
        <li className={styles["skill"]}>JavaScript</li>
        <li className={styles["skill"]}>HTML5</li>
        <li className={styles["skill"]}>CSS</li>
        <li className={styles["skill"]}>React.js</li>
        <li className={styles["skill"]}>Express.js</li>
        <li className={styles["skill"]}>Node.js</li>
        <li className={styles["skill"]}>GoLang</li>
        <li className={styles["skill"]}>Docker</li>
        <li className={styles["skill"]}>PostgreSQL</li>
        <li className={styles["skill"]}>MongoDB</li>
      </ol>
    </div>
  );
};

export default Skills;
