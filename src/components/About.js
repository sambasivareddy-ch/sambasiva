import React from "react";
import { ReactTyped } from "react-typed";

import styles from "../styles/page.module.css";
import samba from "../assests/samba.jpg";

const About = () => {
  return (
    <div className={styles["about-div__wrapper"]}>
      {/* <img src={samba} alt="Samba" className={styles["my-img"]} /> */}
      <div className={styles["about-wrapper"]}>
        {/* <div className={styles["welcome-msg"]}>
          <h3 className={styles["wishes"]}>
            Namaste! I'm <span className={styles["my-name"]}>Samba Siva Reddy</span>
          </h3>
        </div> */}
        <div className={styles["my-role"]}>
          <ReactTyped
            strings={[
              "Hello! I'm Samba Siva",
              'Full Stack Developer',
              'Software Developer',
              'R&D Engineer',
            ]}
            typeSpeed={90}
            backSpeed={30}
            className={styles["typed-role"]}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default About;
