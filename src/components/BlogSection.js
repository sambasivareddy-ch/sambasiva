import React from "react";
import { Link } from "react-router-dom";

import BlogComponent from "./BlogComponent";
import styles from "../styles/page.module.css";
import blogs from "../blogsInfo";

const BlogSection = () => {
    return <div className={styles['blogs-wrapper_main']}>
        <p className={styles['caption']}>My Writes</p>
        <h2 className={styles["title"]}>Blogs</h2>
        <div className={styles["blogs_wrapper"]}>
            {
                blogs.slice(0,3).map((blog) => {
                    return <BlogComponent
                        key={blog.id}
                        title={blog.title}
                        description={blog.description}
                        domains={blog.domains}
                        slug={blog.slug}
                        date={blog.date}
                    />
                })
            }
        </div>
        <Link className={styles['blog-link']} to={"/blog"}>More Blogs</Link>
    </div>
}   

export default BlogSection;