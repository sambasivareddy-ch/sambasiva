import React from "react";
import { Link } from "react-router-dom";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BlogComponent from "../components/BlogComponent";
import styles from "../styles/blog.module.css";

const DUMMY_BLOGS = [
    {
        title: "Variables in JS",
        domains: ["javascript"],
        date: "March 02 2023",
    },
    {
        title: "Accessing DOM Elements",
        domains: ["javascript", "html"],
        date: "March 01 2023",
    },
];

const Blog = () => {
    let counter = 1;
    return (
        <div className={styles["blog-wrapper"]}>
            <div className={styles["blog-main"]}>
                <Link to="/" className={styles["home-link"]} fontSize="small">
                    <KeyboardBackspaceIcon /> Home
                </Link>
                <div className={styles["blogs"]}>
                    {DUMMY_BLOGS.map((blog) => {
                        return (
                            <BlogComponent
                                key={Math.random()}
                                id={counter++}
                                title={blog.title}
                                domains={blog.domains}
                                date={blog.date}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Blog;
