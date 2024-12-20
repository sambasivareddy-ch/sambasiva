import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/page.module.css";
import Project from "./Project";

const projects_arr = [
    {
        project_name: "Meeting Notes",
        gitlink: "https://github.com/sambasivareddy-ch/meeting_notes_app",
        description:
            "An Application which helps to take notes on various scheduled meeting in your google calender.",
        skills: ["React.js", "Go", "REST", "PostgreSQL", "Redis", "Gin"],
        status: "In Progress",
    },
    {
        project_name: "Event Management REST API",
        gitlink: "https://github.com/sambasivareddy-ch/rest_api_go",
        description: "An Event Management API helps in creating, deleting and updating an event. And supports user registration to the events",
        skills: ['Go', 'Gin ', 'REST API', 'SQLite3'],
        status: "Completed"
    },
    {
        project_name: "Exam Planner for Edu Institutes",
        gitlink: "https://github.com/sambasivareddy-ch/exam_planner",
        description: "A Exam Planner which helps the education institutes to schedule/plan their examinations and students/invigilators can get their schedule",
        skills: ['React.JS', 'PostgreSQL', 'Node.JS', 'Express', 'Client-Server'],
        status: "Completed"
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
