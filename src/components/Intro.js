import React from "react";

import styles from "../styles/page.module.css";
import resume from "../assests/Resume.pdf";

const Intro = () => {
    return (
        <div className={styles["intro-wrapper"]}>
            <p className={styles["welcome-msg"]}>Hi, my name is</p>
            <h1 className={styles["my-name"]}>Samba Siva</h1>
            <p className={styles["intro-me"]}>
                I'm working as{" "}
                <span className={styles["designation"]}>Software Developer (MTS)</span>{" "}
                in Zoho Corporation. I am a Full Stack Web Developer based on MERN stack. I am currently working on Blockchain (Web3).
                <br />
            </p>
            <a
                href={resume}
                alt="resume"
                download={true}
                className={styles["resume-link"]}
            >
                Resume
            </a>
        </div>
    );
};

export default Intro;
