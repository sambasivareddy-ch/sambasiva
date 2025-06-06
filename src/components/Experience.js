import React from "react";

import styles from "../styles/page.module.css";

const Experience = (props) => {
  return (
    <div className={styles["new-experience-wrapper"]}>
      <h3>{props.exp.designation}</h3>
      <p className={styles['period']}>{props.exp.period}</p>
      <ul>
        Key KPIs:
        {props.exp.description.map((kpi) => {
          return <li key={Math.random()}>
            {kpi}
          </li>
        })}
      </ul>
    </div>
  );
};

export default Experience;
