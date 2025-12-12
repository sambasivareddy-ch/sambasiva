import React from "react";

import styles from "../styles/page.module.css";
import Experience from "./Experience";

const experiences = [
    {
        period: "June 2023 - Present",
        designation: "Member Technical Staff",
        company: "Zoho Corporation",
        description: [
            "Working on core components of Zoho’s in-house distributed database system, focusing on PostgreSQL internals such as the Planner, Executor, MVCC, Copy Framework and Connection Framework.",
            "Designed and implemented a pagination query system inspired by NoSQL key-value access patterns, enabling efficient product-level pagination at scale.",
            "Upgraded PostgreSQL Planner and Executor internals to newer versions, improving maintainability and ensuring alignment with future PostgreSQL releases.",
            "Optimized the Copy Framework to significantly improve data transfer throughput between distributed clusters using various protocols/tools like SCP/Netcat.",
            "Built a Python-based automated testing framework to synthesize real-world query patterns, leading to major insights and measurable performance improvements across the product.",
        ],
    },
    {
        period: "January 2023 - May 2023",
        designation: "Project Trainee",
        company: "Zoho Corporation",
    },
];

const Experiences = () => {
    return (
        <div id="experience" className={styles["experience-wrapper"]}>
            <p className={styles["caption"]}>Contributing at</p>
            <h2 className={styles["title"]}>Work</h2>
            <div className={styles["experiences_wrapper"]}>
                <div className={styles["experiences"]}>
                    {experiences.map((exp) => {
                      return <Experience exp={exp}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Experiences;
