import React, { useEffect, useState } from "react";
import styles from "../styles/navigation.module.css";
import Logo from "./Logo";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from 'react-router-dom'; 

const Navigation = () => {
  let isNavOpen = false;

  const [isSticky, setIsSticky] = useState(false);
  const classes = `${styles["app-header"]} ${isSticky && styles['sticky-nav']}`

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10); 
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
        <button className={styles["icon-btn"]} onClick={navOpenHandler} aria-label="page navigation">
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
            <a className={styles["nav-link"]} href="#skills" aria-label="skill section">
              <span className={styles["list-number"]}>02.</span>
              Skills
            </a>
          </li>
          <li>
            <a className={styles["nav-link"]} href="#experience" aria-label="experience section">
              <span className={styles["list-number"]}>03.</span>
              Work
            </a>
          </li>
          <li>
            <a className={styles["nav-link"]} href="#projects" aria-label="projects section">
              <span className={styles["list-number"]}>04.</span>
              Projects
            </a>
          </li>
          <li>
            <a className={styles["nav-link"]} href="#contact" aria-label="contact section">
              <span className={styles["list-number"]}>05.</span>
              Contact
            </a>
          </li>
          <li className={styles['blog-btn']}>
            <Link className={styles["nav-link"]} to="/blog">
              My Writes
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/sambasivareddy-ch"
              rel="noreferrer"
              target="_blank"
              aria-label="github"
            >
              <GitHubIcon />
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Navigation;
