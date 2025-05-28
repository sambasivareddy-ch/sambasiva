import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import styles from "../styles/page.module.css";

const Project = (props) => {
  const classes = `${styles["pro-wrapper"]} ${props.className}`;
  return (
    <div className={classes}>
      <div className={styles["project-header"]}>
        <FolderIcon />
        <div className={styles["header-meta"]}>
          {props.project_details.preview && props.project_details.link != "" &&
            <a
              href={props.project_details.link}
              target="_blank"
              rel="noreferrer"
              className={styles["github-link"]}
            >
              <OpenInNewIcon/>
            </a>
          }
          <a
            href={props.project_details.gitlink}
            target="_blank"
            rel="noreferrer"
            className={styles["github-link"]}
          >
            <GitHubIcon fontSize="medium" />
            {/* <span>{props.project_details.status === "Completed"? "Github": "In Progress"}</span> */}
            {/* <ArrowOutwardIcon /> */}
          </a>
        </div>
      </div>
      <div className={styles["project-body"]}>
        <h3>
          <a 
            href={props.project_details.gitlink}
            target="_blank"
            rel="noreferrer"
          >{props.project_details.project_name}</a>
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
