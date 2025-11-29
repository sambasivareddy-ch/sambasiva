import React from "react";

import styles from "../styles/page.module.css";

const Skills = (props) => {
  return (
    <div className={styles["skills-wrapper"]} id="skills">
      <p className={styles['caption']}>Skill I possess</p>
      <h2 className={styles["title"]}>Skills</h2>
      <ol className={styles["skills-list"]}>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=postgres"} alt="postgres"/>
          PostgreSQL
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=nodejs"} alt="node"/>
          Node.js
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=expressjs"} alt="express"/>
          Express.js
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=react"} alt="react"/>
          React.js
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=typescript"} alt="ts"/>
          Typescript
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=docker"} alt="dockers"/>
          Docker
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=kubernetes"} alt="k8s"/>
          Kubernetes
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=javascript"} alt="js"/>
          Javascript
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=go"} alt="go"/>
          Go Lang
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=python"} alt="python3"/>
          Python
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=java"} alt="java-programing"/>
          Java
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=html"} alt="html"/>
          HTML5
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=css"} alt="css"/>
          CSS3
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=mongodb"} alt="mongo"/>
          MongoDB
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=git"} alt="version-control"/>
          Git
        </li>
      </ol>
    </div>
  );
};

export default Skills;
