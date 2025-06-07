import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/page.module.css";
import Project from "./Project";
import PROJECTS_DATA from "../projectinfo";

const Projects = () => {
    return (
        <div className={styles["projects-wrapper"]} id="projects">
            <p className={styles['caption']}>Things I Built</p>
            <h2 className={styles["title"]}>My Projects</h2>
            <div className={styles["projects-list"]}>
                {PROJECTS_DATA.slice(0,3).map((pro) => {
                    return (
                        <Project
                            className={pro.status.split(' ').join('-').toLowerCase()}
                            project_details={pro}
                            key={Math.random()}
                        />
                    );
                })}
            </div>
            <Link to={"/projects"}>More Projects</Link>
        </div>
    );
};

export default Projects;
