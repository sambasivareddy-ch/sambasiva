import React from "react";

import styles from "../styles/page.module.css";

const Experience = (props) => {
  return (
    <div className={styles["new-experience-wrapper"]}>
      <p>{props.exp.period}</p>
      <p>{props.exp.designation}</p>
      <p>{props.exp.company}</p>
    </div>
  );
};

export default Experience;
