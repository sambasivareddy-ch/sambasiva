import React from "react";

import styles from "../styles/page.module.css";
import resume from "../assests/resume.pdf";

const Intro = () => {
    return (
        <div className={styles["intro-wrapper"]}>
            <p className={styles["welcome-msg"]}>Hi, my name is</p>
            <h1 className={styles["my-name"]}>Siva Chinta</h1>
            <p className={styles["intro-me"]}>
                I'm working as{" "}
                <span className={styles["designation"]}>Project Trainee</span>{" "}
                in Zoho Corporation. Currently, I'm focused on the latest
                technologies like React.js, Express.js, Node.js, 
                JavaScript, GraphQL etc.
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
