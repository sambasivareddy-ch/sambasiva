import React from "react";

import styles from "../styles/page.module.css";

const Experience = (props) => {
  return (
    <div className={styles["new-experience-wrapper"]}>
      <div className={styles["new-experience"]}>
        <p className={styles['company']}>{props.exp.company}</p>
        <div className={styles['company-meta']}>
          <p className={styles['designation']}>{props.exp.designation}</p>
          <p className={styles['period']}>{props.exp.period}</p>
        </div>
      </div>
      {props.exp.description && <div className={styles['description']}>
        <ul>
          {props.exp.description.map((point) => {
            return <li key={Math.random()}>{point}</li>
          })}
        </ul>
      </div>}
    </div>
  );
};

export default Experience;
