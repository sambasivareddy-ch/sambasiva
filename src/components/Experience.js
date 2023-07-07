import React from "react";

import styles from "../styles/page.module.css";

const Experience = () => {
    return (
        <div id="experience" className={styles["experience-wrapper"]}>
            <h2 className={styles["title"]}>Experience</h2>
            <div className={styles["experiences"]}>
                <div className={styles["experience"]}>
                    <h3 className={styles["experience-title"]}>01. Member Technical Staff</h3>
                    <p className={styles["company"]}>
                        Company:{" "}
                        <a
                            className={styles["company-name"]}
                            href="https://www.zohocorp.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Zoho Corporation
                        </a>
                        , Chennai, Tamilnadu
                    </p>
                    <p className={styles["exp-duration"]}>June 2023 - Present</p>
                    <ul className={styles["highlights"]}>
                        <li>
                            Worked on Distributed Database, main purpose of DistDB
                            is to distribute the data along the shards by
                            partitioning the data on some partition key, which
                            further helps in easy access of data.
                        </li>
                        <li>Technologies used: C, C++, Postgresql, Git, SQL</li>
                    </ul>
                </div>
                <div className={styles["experience"]}>
                    <h3 className={styles["experience-title"]}>02. Project Trainee</h3>
                    <p className={styles["company"]}>
                        Company:{" "}
                        <a
                            className={styles["company-name"]}
                            href="https://www.zohocorp.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Zoho Corporation
                        </a>
                        , Chennai, Tamilnadu
                    </p>
                    <p className={styles["exp-duration"]}>January 2023 - June 2023</p>
                    <ul className={styles["highlights"]}>
                        <li>Technologies used: C, C++, Postgresql, Git, SQL</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
