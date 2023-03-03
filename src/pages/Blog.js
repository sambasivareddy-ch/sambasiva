import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import BlogComponent from "../components/BlogComponent";
import styles from "../styles/blog.module.css";

const DUMMY_BLOGS = [
    {
        title: "Variables in JS",
        domains: ["javascript"],
        date: "March 02 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        title: "Accessing DOM Elements",
        domains: ["javascript", "html"],
        date: "March 01 2023",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
];

const Blog = () => {
    return (
        <div className={styles["blog-wrapper"]}>
            <div className={styles["blog-main"]}>
                <button className={styles["home-btn"]}>
                    <Link
                        to="/"
                        className={styles["home-link"]}
                        fontSize="small"
                    >
                        Return to
                    </Link>
                    <HomeIcon />
                </button>
                <div className={styles["blogs"]}>
                <form className={styles['search-form']}>
                    <input type="search" placeholder="Start typing to get the blog you are looking..." />
                </form>
                    {DUMMY_BLOGS.map((blog) => {
                        return (
                            <BlogComponent
                                key={Math.random()}
                                title={blog.title}
                                domains={blog.domains}
                                date={blog.date}
                                description={blog.description}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Blog;
