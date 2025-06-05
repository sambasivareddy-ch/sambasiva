import React from "react";
import styles from "../styles/navigation.module.css";
import Logo from "./Logo";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
  let isNavOpen = false;

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
    <header className={styles["app-header"]}>
      <div className={styles["header"]}>
        <Logo />
        <button className={styles["icon-btn"]} onClick={navOpenHandler}>
          <MenuIcon className={styles["menu-icon"]} />
        </button>
      </div>
      <nav className={styles["navigation-wrapper"]} id="navigation-wrapper">
        <ol className={styles["navigation"]}>
          <li>
            <a className={styles["nav-link"]} href="#skills">
              <span className={styles["list-number"]}>01.</span>
              Skills
            </a>
          </li>
          {/* <li>
                        <a className={styles["nav-link"]} href="#education">
                            <span className={styles["list-number"]}>02.</span>
                            Education
                        </a>
                    </li> */}
          <li>
            <a className={styles["nav-link"]} href="#experience">
              <span className={styles["list-number"]}>02.</span>
              Work
            </a>
          </li>
          <li>
            <a className={styles["nav-link"]} href="#projects">
              <span className={styles["list-number"]}>03.</span>
              Projects
            </a>
          </li>
          <li>
            <a className={styles["nav-link"]} href="#contact">
              <span className={styles["list-number"]}>04.</span>
              Contact
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default Navigation;
