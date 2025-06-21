import React from "react";

import styles from "../styles/page.module.css";

const About = () => {
  return (
    <div className={styles["about-div__wrapper"]}>
      <div className={styles["about-wrapper"]}>
        <p className={styles["welcome-msg"]}>
          <h3 className={styles["wishes"]}>Namaste! I'm<p className={styles['my-name']}>Samba Siva Reddy</p></h3>
        </p>
        <h1 className={styles["my-role"]}> Software Developer</h1>
        I build scalable applications for Web & Mobile.
      </div>
    </div>
  );
};

export default About;
