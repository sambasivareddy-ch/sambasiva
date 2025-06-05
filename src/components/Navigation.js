import React, { useState, useEffect } from "react";
import styles from "../styles/navigation.module.css";
import Logo from "./Logo";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
  let isNavOpen = false;

  const [isSticky, setIsSticky] = useState(false);
  const classes = `${styles["app-header"]} ${isSticky && styles['sticky-nav']}`

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // toggle after 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navOpenHandler = () => {
    const ele = document.getElementById("navigation-wrapper");
    if (isNavOpen) {
      ele.style.display = "none";
      isNavOpen = false;
    } else {
      ele.style.display = "block";
      isNavOpen = true;
    }
  };

  return (
    <header className={classes}>
      <div className={styles["header"]}>
        <Logo />
        <button className={styles["icon-btn"]} onClick={navOpenHandler}>
          <MenuIcon className={styles["menu-icon"]} />
        </button>
      </div>
      <nav className={styles["navigation-wrapper"]} id="navigation-wrapper">
        <ol className={styles["navigation"]}>
          <li>
            <a className={styles["nav-link"]} href="#about">
              <span className={styles["list-number"]}>01.</span>
              About
            </a>
          </li>
          <li>
            <a className={styles["nav-link"]} href="#skills">
              <span className={styles["list-number"]}>02.</span>
              Skills
            </a>
          </li>
          <li>
            <a className={styles["nav-link"]} href="#experience">
              <span className={styles["list-number"]}>03.</span>
              Work
            </a>
          </li>
          <li>
            <a className={styles["nav-link"]} href="#projects">
              <span className={styles["list-number"]}>04.</span>
              Projects
            </a>
          </li>
          <li>
            <a className={styles["nav-link"]} href="#contact">
              <span className={styles["list-number"]}>05.</span>
              Contact
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Navigation;
