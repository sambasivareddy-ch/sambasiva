import React from "react";

import styles from "../styles/blog.module.css";

const BlogComponent = (props) => {
    return (
        <div className={styles["blog-comp__wrapper"]}>
            <div className={styles['blog-comp__highlighter']}>
                <h1>{props.title[0].toUpperCase()}</h1>
            </div>
            <div>
                <div className={styles["blog-comp__meta_wrapper"]}>
                    <div className={styles["blog-comp__meta"]}>
                        <h3>{props.title}</h3>
                        <p>{props.date}</p>
                    </div>
                    <button className={styles['open__btn']} onClick={() => alert("Not yet defined!") }>Open</button>
                </div>
                <div className={styles["blog-comp__details"]}>
                    <div className={styles['blog-description']}>{props.description}</div>
                    <div>
                        {props.domains.map((domain) => {
                            return <span key={Math.random()}>{domain}</span>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogComponent;
