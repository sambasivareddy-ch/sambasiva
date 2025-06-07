import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/projectpage.module.css";
import Project from "../components/Project";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PROJECTS_DATA from "../projectinfo";

const ProjectPage = (props) => {
    return (
        <div className={styles["project-page__wrapper"]}>
            <Link to="/" className={styles['home-link']} fontSize="small">
                <KeyboardBackspaceIcon /> Home
            </Link>
            <div className={styles["projects-wrapper"]} id="projects">
                <h2 className={styles["title"]}>My Projects</h2>
                <div className={styles["projects-list"]}>
                    {PROJECTS_DATA.map((pro) => {
                        return (
                            <Project
                                project_details={pro}
                                className={styles['project-page__display']}
                                key={Math.random()}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
