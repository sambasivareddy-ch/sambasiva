import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/logo.module.css";

const Logo = () => {
    return (
        <div className={styles['logo-wrapper']}>
            <Link className={styles['logo-letter']} to="/">/ Hello World</Link>
        </div>
    )
}

export default Logo;