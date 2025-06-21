import React from "react";
import { Link } from "react-router-dom";
import FolderIcon from "@mui/icons-material/Folder";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styles from "../styles/page.module.css";

const Project = (props) => {
  const classes = `${styles["pro-wrapper"]} ${props.className}`;
  return (
    <div className={classes}>
      <div className={styles["project-header"]}>
        <FolderIcon />
        <div className={styles["header-meta"]}>
          <a
            href={props.project_details.gitlink}
            target="_blank"
            rel="noreferrer"
            className={styles["github-link"]}
            aria-label="github"
          >
            <GitHubIcon fontSize="medium" />
          </a>
        </div>
      </div>
      <div className={styles["project-body"]}>
        <h3>
          <Link
            to={`/project/${props.project_details.id}`}
          >
            {props.project_details.project_name}
          </Link>
          <OpenInNewIcon/>
        </h3>
        <p>{props.project_details.description}</p>
      </div>
      <div className={styles["project-footer"]}>
        <ul>
          {props.project_details.skills.map((skill) => {
            return <li key={Math.random()}>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Project;
