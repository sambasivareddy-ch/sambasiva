import React from "react";

import styles from "../styles/page.module.css";
import samba from "../assests/samba.jpg";

const About = () => {
    return (
        <div className={styles["about-div__wrapper"]} id="about">
            <img src={samba} alt="Samba" className={styles["my-img"]} />
            <div className={styles["about-wrapper"]}>
                <h2 className={styles["title"]}>About Me</h2>
                <p className={styles["about-me"]}>
                    Hello There! I'm V N G Samba Siva Reddy Chinta. Currenly, I
                    am working as 'Member Technical Staff' in Zoho Corporation, Chennai.
                    And I also have Computer Science undergraduate degree from
                    GVPCE (2019 - 2023) with CGPA 9.05.
                </p>
                <p className={styles["my-skills"]}>
                    Here are the skills and technologies I'm working on:
                </p>
                <ul className={styles["skills-list"]}>
                    <li>HTML, CSS</li>
                    <li>JavaScript (ES6)</li>
                    <li>React.js</li>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C, C++</li>
                    <li>MongoDB</li>
                    <li>postgreSQL</li>
                    <li>Go language</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
