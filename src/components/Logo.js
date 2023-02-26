import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/logo.module.css";

const Logo = () => {
    return (
        <div className={styles['logo-wrapper']}>
            <Link className={styles['logo-letter']} to="/">Siva</Link>
        </div>
    )
}

export default Logo;