import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/page.module.css";
import Project from "./Project";

const projects_arr = [
    {
        project_name: "NextBuy",
        link: "https://nextbuy-five.vercel.app/",
        gitlink: "https://github.com/sambasivareddy-ch/nextbuy",
        description:
            "A Single Page E-Commerce Application which allows the users perform adding products to cart, wishlist and checkout the products. (Currenly It's static one with some statically generated data)",
        skills: ["React", "TypeScript", "Redux", "Router", "MockApI"],
        status: "Completed",
    },
    {
        project_name: "Database Backup Utility",
        link: "https://github.com/sambasivareddy-ch/db_backup_utility/releases/tag/v1.0.0",
        gitlink: "https://github.com/sambasivareddy-ch/db_backup_utility",
        description:
            "An CLI tool which helps to perform Backup, restore on database likes Postgres, SQL and also helps to automate the backup job",
        skills: ["Go", "Cobra", "CLI"],
        status: "Completed",
    },
    {
        project_name: "Meeting Notes",
        link: "https://meeting-notes-phi.vercel.app/",
        gitlink: "https://github.com/sambasivareddy-ch/meeting_notes",
        description:
            "An Application which helps to take notes on various scheduled meeting in your google calender.",
        skills: ["React.js", "Go", "REST", "Postgres", "Redis", "Gin"],
        status: "Completed",
    },
    {
        project_name: "Event Management REST API",
        link: "",
        gitlink: "https://github.com/sambasivareddy-ch/rest_api_go",
        description: "An Event Management API helps in creating, deleting and updating an event. And supports user registration to the events",
        skills: ['Go', 'Gin ', 'REST API', 'SQLite3'],
        status: "Completed"
    },
];

const Projects = () => {
    return (
        <div className={styles["projects-wrapper"]} id="projects">
            <p className={styles['caption']}>Things I Built</p>
            <h2 className={styles["title"]}>My Projects</h2>
            <div className={styles["projects-list"]}>
                {projects_arr.map((pro) => {
                    return (
                        <Project
                            className={pro.status.split(' ').join('-').toLowerCase()}
                            project_details={pro}
                            key={Math.random()}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
