import React from "react";

import styles from "../styles/page.module.css";
import Experience from "./Experience";

const experiences = [
  {
    period: "June 2023 - Present",
    designation: "Member Technical Staff",
    company: "Zoho Corporation",
    description: [
      'Designed a NoSQL mimiced Planner and Executor to run queries in NoSQL format in Postgres Distributed Environment',
      'Refined execution plans and resource allocation strategies to achieve 50% faster query execution within a distributed environment',
      'Achieved up to 50 % improvement in file transfer speeds by leveraging the SCP protocol for lightweight, compressed and high-speed data transmission.',
      'Skills: C, Postgres, RDBMS, C++, Postgres Internals',
    ]
  },
  {
    period: "January 2023 - May 2023",
    designation: "Project Trainee",
    company: "Zoho Corporation",
  },
];

const Experiences = () => {

  return (
    <div id="experience" className={styles["experience-wrapper"]}>
      <p className={styles['caption']}>Contributing at</p>
      <h2 className={styles["title"]}>Work</h2>
      <div className={styles["experiences_wrapper"]}>
        <div className={styles['experiences']}>
          <Experience exp={experiences[0]}/>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
