import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import BlogComponent from "../components/BlogComponent";
import styles from "../styles/blog.module.css";

import blogs from "../blogsInfo";

const Blog = () => {
    const [blogTags, setBlogTags] = useState([]);


    useEffect(() => {
        // Initialize blogTags with all unique tags from blogs
        const initialTags = Array.from(new Set(blogs.flatMap(blog => blog.domains)));
        setBlogTags(initialTags);
    }, []);

    const handleTagClick = (tag) => {
        if (blogTags.includes(tag)) {
            setBlogTags(blogTags.filter((t) => t === tag));
        } else {
            setBlogTags([...blogTags, tag]);
        }
    }

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
                <div className={styles['blog-tags']}>
                    {blogTags.map((tag) => (
                        <button
                            key={tag}
                            className={`${styles["blog-tag"]} ${blogTags.includes(tag) ? styles["active"] : ""}`}
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <div className={styles["blogs"]}>
                    {blogs.map((blog) => {
                        const isTagActive = blogTags.length === 0 || blogTags.some(tag => blog.domains.includes(tag));
                        return (
                            isTagActive && (
                                <BlogComponent
                                    key={blog.id}
                                    title={blog.title}
                                    description={blog.description}
                                    domains={blog.domains}
                                    slug={blog.slug}
                                    date={blog.date}
                                />
                            )
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Blog;
