import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/page.module.css";
import Project from "./Project";

const projects_arr = [
    {
        project_name: "Event Management REST API",
        gitlink: "https://github.com/sambasivareddy-ch/rest_api_go",
        description: "An Event Management API helps in creating, deleting and updating an event. And supports user registration to the events",
        skills: ['Go', 'Gin Framework', 'REST API', 'SQLite3'],
        status: "Completed"
    },
    {
        project_name: "Notebook CLI",
        gitlink: "https://github.com/sambasivareddy-ch/notebook_cli",
        description: "A Notes making CLI application return in Go with support of creating, modifying, delete, viewing the notes",
        skills: ['Go', 'CLI', 'Cobra', 'PromptUI', 'SQLite3'],
        status: "Completed"
    },
    {
        project_name: "Social Clubs Event Manager",
        gitlink: "https://github.com/samba-chinta/club_manager",
        description:
            "A project which helps to integrate all the social clubs in the college & helps in scheduling their events without any conflicts with other club events.",
        skills: ["React.js", "Node.js", "Express.js", "REST", "MongoDB"],
        status: "Completed",
    }
];

const Projects = () => {
    return (
        <div className={styles["projects-wrapper"]} id="projects">
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
            <div className={styles["view-more__wrapper"]}>
                <button className={styles["view-more__btn"]}>
                    <Link to="/projects">View More</Link>
                </button>
            </div>
        </div>
    );
};

export default Projects;
