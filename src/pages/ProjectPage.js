import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/projectpage.module.css";
import Project from "../components/Project";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const projects_arr = [
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
        project_name: "Examination Planner for Edu Institutes",
        link: "",
        gitlink: "https://github.com/sambasivareddy-ch/exam_planner",
        description: "A Exam Planner which helps the education institutes to schedule/plan their examinations and students/invigilators can get their schedule",
        skills: ['React.JS', 'Postgres', 'Node.JS', 'Express', 'Docker'],
        status: "Completed"
    },
    {
        project_name: "Event Management REST API",
        link: "",
        gitlink: "https://github.com/sambasivareddy-ch/rest_api_go",
        description: "An Event Management API helps in creating, deleting and updating an event. And supports user registration to the events",
        skills: ['Go', 'Gin', 'REST API', 'SQLite3'],
        status: "Completed"
    },
    {
        project_name: "Notebook CLI",
        link: "",
        gitlink: "https://github.com/sambasivareddy-ch/notebook_cli",
        description: "A Notes making CLI application return in Go with support of creating, modifying, delete, viewing the notes",
        skills: ['Go', 'CLI', 'Cobra', 'PromptUI', 'SQLite3'],
        status: "Completed"
    },
    {
        project_name: "Social Clubs Event Manager",
        link: "",
        gitlink: "https://github.com/samba-chinta/club_manager",
        description: "A project which helps to integrate all the social clubs in the college & helps in scheduling their events without any conflicts with other club events.",
        skills: ['React.js', 'Node.js', 'Express.js', 'REST API', 'MongoDB'],
        status: "Completed"
    },
    {
        project_name: "Query based Application",
        link: "",
        gitlink:
            "https://github.com/samba-chinta/question_and_answer_website_client",
        description:
            "A project which helps the students to clear their doubts by posting the doubts in the form of question, and get answers from fellow students.",
        skills: ["React.js", "Node.js", "Express.js", "REST API"],
        status: "Completed",
    },
];

const ProjectPage = (props) => {
    return (
        <div className={styles["project-page__wrapper"]}>
            <Link to="/" className={styles['home-link']} fontSize="small">
                <KeyboardBackspaceIcon /> Home
            </Link>
            <div className={styles["projects-wrapper"]} id="projects">
                <h2 className={styles["title"]}>My Projects</h2>
                <div className={styles["projects-list"]}>
                    {projects_arr.map((pro) => {
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
