import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/page.module.css";

const Project = ({ project_details }) => {
    return (
        <div className={styles["pro-wrapper"]}>
            <div className={styles["project-header"]}>
                <FolderIcon />
                <div>
                    <span className={"status"}>{ project_details.status }</span>
                <a
                    href={project_details.gitlink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon fontSize="small"/>
                </a>
                </div>
            </div>
            <div className={styles["project-body"]}>
                <h3>{project_details.project_name}</h3>
                <p>{project_details.description}</p>
            </div>
            <div className={styles["project-footer"]}>
                <ul>
                {project_details.skills.map((skill) => {
                    return <li key={Math.random()}>{skill}</li>;
                })}
                </ul>
            </div>
        </div>
    );
};

export default Project;
