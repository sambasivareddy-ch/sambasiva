import React from "react";
import { motion } from "motion/react"

import styles from "../styles/page.module.css";
import samba from "../assests/samba.jpg";

const About = () => {
  return (
    <div className={styles["about-div__wrapper"]}>
      {/* <img src={samba} alt="Samba" className={styles["my-img"]} /> */}
      <div className={styles["about-wrapper"]}>
        <p className={styles["welcome-msg"]}>
          <h3 className={styles["wishes"]}>Namaste! I'm<p className={styles['my-name']}>Samba Siva Reddy</p></h3>
        </p>
        <h1 className={styles["my-role"]}> Software Developer</h1>
        <p><b>I build scalable applications for Web & Mobile.</b></p>
      </div>
    </div>
  );
};

export default About;
