import React, { useState } from "react";

import styles from "../styles/page.module.css";
import Experience from "./Experience";
import { useScroll } from "motion/react";

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
  const [selectedCompany, setSelectedCompany] = useState(0);
  const zohoClasses = `${styles['company-btn']} ${selectedCompany === 0 && styles['selected-company']}`

  return (
    <div id="experience" className={styles["experience-wrapper"]}>
      <p className={styles['caption']}>Contributing at</p>
      <h2 className={styles["title"]}>Work</h2>
      <div className={styles["experiences_wrapper"]}>
        <div className={styles['experiences']}>
          {/* <ol className={styles["companies-list_wrapper"]}>
            <li>
              <button className={zohoClasses}>Zoho Corporation</button>
            </li>
          </ol> */}
          <Experience exp={experiences[selectedCompany]}/>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
