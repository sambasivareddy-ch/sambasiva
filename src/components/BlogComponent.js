import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/blog.module.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const BlogComponent = (props) => {
    return (
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
                {/* <button className={styles['open__btn']} onClick={() => alert("Not yet defined!") }>Open</button> */}
                <Link to={`/blog/${props.slug}`} className={styles['open__btn']}>
                    <OpenInNewIcon />
                </Link>
            </div>
            <div className={styles["blog-comp__details"]}>
                <div className={styles['blog-description']}>{props.description}</div>
                <div className={styles["blog-comp__domains"]}>
                    {props.domains.map((domain) => {
                        return <span key={Math.random()}>{domain}</span>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogComponent;
