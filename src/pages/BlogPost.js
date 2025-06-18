import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
// import matter from "gray-matter/dist/gray-matter.browser.js";

import blogs from "../blogsInfo";
import styles from "../styles/blog.module.css";

const BlogPost = () => {
    const { slug } = useParams();
    const [content, setContent] = useState("");
    const [meta, setMeta] = useState({});

    console.log("BlogPost component rendered with slug:", slug);

    useEffect(() => {
        const post = blogs.find((p) => p.slug === slug);
        console.log("Post found:", post);
        if (!post) return;

        fetch(`/posts/${post.filename}`)
        .then((res) => res.text())
        .then((text) => {
            setContent(text);
        });
    }, [slug]);

    if (!content) {
        return <div className={styles["blog-not-found"]}>Blog not found</div>;
    }
    
    return (
        <div className={styles["blog-post-wrapper"]}>
            <Link to={'/blog'}>/ Blogs</Link>
            <ReactMarkdown>
                {content}
            </ReactMarkdown>
        </div>
    );
}   

export default BlogPost;