import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import BlogComponent from "../components/BlogComponent";
import styles from "../styles/blog.module.css";

import blogs from "../blogsInfo";

const Blog = () => {
    return (
        <div className={styles["blog-wrapper"]}>
            <div className={styles["blog-main"]}>
                <button className={styles["home-btn"]}>
                    <Link
                        to="/"
                        className={styles["home-link"]}
                        fontSize="large"
                    >
                        / Home
                    </Link>
                </button>
                <div className={styles["blogs"]}>
                    {blogs.map((blog) => {
                        return (
                            <BlogComponent
                                key={Math.random()}
                                title={blog.title}
                                domains={blog.domains}
                                date={blog.date}
                                description={blog.description}
                                slug={blog.slug}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Blog;
