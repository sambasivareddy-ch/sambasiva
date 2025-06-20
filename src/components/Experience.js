import React from "react";

import styles from "../styles/page.module.css";

const Experience = (props) => {
  return (
    <div className={styles["new-experience-wrapper"]}>
      <p className={styles['designation']}>{props.exp.designation}</p>
      <p className={styles['company']}>{props.exp.company}</p>
      <p className={styles['period']}>{props.exp.period}</p>
    </div>
  );
};

export default Experience;
