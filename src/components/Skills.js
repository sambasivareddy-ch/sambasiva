import React from "react";

import styles from "../styles/page.module.css";

const Skills = (props) => {
  return (
    <div className={styles["skills-wrapper"]} id="skills">
      <p className={styles['caption']}>Skill I possess</p>
      <h2 className={styles["title"]}>Skills</h2>
      <ol className={styles["skills-list"]}>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=nodejs"} alt="node.js"/>
          Node.js
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=expressjs"} alt="express.js"/>
          Express.js
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=react"} alt="react"/>
          React
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=typescript"} alt="typescript"/>
          Typescript
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=docker"} alt="docker"/>
          Docker
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=kubernetes"} alt="kubernetes"/>
          Kubernetes
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=javascript"} alt="javascript"/>
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
          <img src={"https://skillicons.dev/icons?i=java"} alt="java"/>
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
          <img src={"https://skillicons.dev/icons?i=postgres"} alt="postgres"/>
          Postgres
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=mongodb"} alt="mongodb"/>
          MongoDB
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=git"} alt="git"/>
          Git
        </li>
        <li className={styles["skill"]}>
          <img src={"https://skillicons.dev/icons?i=figma"} alt="figma"/>
          Figma
        </li>
      </ol>
    </div>
  );
};

export default Skills;
