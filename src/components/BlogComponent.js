import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/blog.module.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const BlogComponent = (props) => {
    return (
        <Link to={`/blog/${props.slug}`} className={styles["blog-comp__link"]}>
            <div className={styles["blog-comp__wrapper"]}>
                <div className={styles["blog-comp__meta_wrapper"]}>
                    <div className={styles["blog-comp__meta"]}>
                        <h3>
                            <Link to={`/blog/${props.slug}`}>
                                {props.title}
                            </Link>
                        </h3>
                        <p>{props.date}</p>
                    </div>
                </div>
                {/* <div className={styles["blog-comp__details"]}>
                    <div className={styles['blog-description']}>{props.description}</div>
                </div> */}
                <div className={styles["blog-comp__domains"]}>
                    {props.domains.map((domain) => {
                        return <span key={Math.random()}>{domain}</span>;
                    })}
                </div>
            </div>
        </Link>
    );
};

export default BlogComponent;
