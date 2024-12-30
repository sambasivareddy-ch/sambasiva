import React from "react";

import styles from "../styles/page.module.css";

const Experience = (props) => {
  return (
    <div className={styles["new-experience-wrapper"]}>
      <div className={styles["experience-period"]}>
        <p>{props.exp.period}</p>
      </div>
      <div className={styles["experience-details"]}>
        <h3 className={styles["highlight_exp"]}>{props.exp.designation}</h3>
        {props.exp.prevDesignation && (
          <p>
            {props.exp.prevDesignation} | {props.exp.prevDesignationPeriod}
          </p>
        )}
        <a
          href={props.exp.companyProfileLink}
          className={styles["company"]}
          target="_blank"
          rel="noreferrer"
        >
          {props.exp.company}
        </a>
        <ol className={styles["experience-highlights"]}>
          {props.exp.highlights.map((highlight) => (
            <li>{highlight}</li>
          ))}
        </ol>
        <ol className={styles["experience-skills"]}>
          {props.exp.skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
