import React from "react";

import styles from "../styles/blog.module.css";

const BlogComponent = (props) => {
    return (
        <div className={styles["blog-comp__wrapper"]}>
            <div className={styles["blog-comp__about"]}>
                <h3>{`${props.id}. ${props.title}`}</h3>
                <p>{props.date}</p>
            </div>
            <div className={styles["blog-comp__details"]}>
                <div>
                    {props.domains.map((domain) => {
                        return <span key={Math.random()}>{domain}</span>;
                    })}
                </div>
                <button
                    className={styles["open_btn"]}
                    onClick={() => alert("Functionality not added. Thank You!")}
                >
                    Open
                </button>
            </div>
        </div>
    );
};

export default BlogComponent;
