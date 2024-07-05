import React from "react";

import styles from "../styles/page.module.css";
import Experience from "./Experience";

const experiences = [
  {
    period: "January 2023 - Present",
    designation: "Member Technical Staff",
    company: "Zoho Corporation",
    companyProfileLink: "https://in.linkedin.com/company/zoho",
    prevDesignation: "Project Trainee",
    prevDesignationPeriod: "January 2023 - June 2023",
    highlights: [
      "Working with R&D team on developing Distributed Database environment based on PostgreSQL.",
      "Enhancing the existing Planner for faster retrieval of results from the targeted machines by replacing existing file transfer library.",
    ],
    skills: ["C++", "PostgreSQL", "C", "DBMS"],
  },
];

const Experiences = () => {
  return (
    <div id="experience" className={styles["experience-wrapper"]}>
      <h2 className={styles["title"]}>Experience</h2>
      <div className={styles["experiences"]}>
        {experiences.map((experience) => (
          <Experience exp={experience} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
