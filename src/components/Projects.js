import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/page.module.css";
import Project from "./Project";

const projects_arr = [
    {
        project_name: "Bloggie",
        link: "https://testflight.apple.com/join/fEEEqPXk",
        gitlink: "https://github.com/sambasivareddy-ch/Bloggie",
        description:
            "An mobile application which helps the users to kickstart their blogging journey by allowing them to write blogs and journals",
        skills: ["React-Native", "Firebase Authentication", "Firebase RealTime DB"],
        status: "Completed",
        preview: true,
    },
    {
        project_name: "Spotify Profile",
        link: "https://spotify-profile-dashboard.vercel.app/",
        gitlink: "https://github.com/sambasivareddy-ch/spotify-profile-client",
        description:
            "A sleek and responsive frontend application that integrates with the Spotify Web API to deliver a personalized music dashboard.",
        skills: ["React (TS)", "Express.js", "Spotify API"],
        status: "Completed",
        preview: false,
    },
    {
        project_name: "NextBuy",
        link: "https://e-nextbuy.vercel.app/",
        gitlink: "https://github.com/sambasivareddy-ch/nextbuy",
        description:
            "A Single Page E-Commerce Application which allows the users perform adding products to cart, wishlist and checkout the products. (Currenly It's static one with some statically generated data)",
        skills: ["React (TS)", "Redux", "Router", "MockApI"],
        status: "Completed",
        preview: true,
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
            <Link to={"/projects"}>More Projects</Link>
        </div>
    );
};

export default Projects;
