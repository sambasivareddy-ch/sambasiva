import React from "react";

import styles from "../styles/page.module.css";
import Experience from "./Experience";

const experiences = [
  {
    period: "June 2023 - Present",
    designation: "Member Technical Staff",
    company: "Zoho Corporation",
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
      <div className={styles["experiences"]}>
        {experiences.map((experience) => (
          <Experience exp={experience} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
