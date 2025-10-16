import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

import styles from "../styles/page.module.css";

const Contact = () => {
  return (
    <div className={styles["contact-wrapper"]} id="contact">
      <h2 className={styles["contact-title"]}>Get In Touch</h2>
      <p className={styles["contact-message"]}>
        Hello There! I'm open for Opportunity. If you feel I'm eligible or just
        want to say Hi on LinkedIn. I will get back with reply. Thank You!
      </p>
      {/* <a
        href="mailto:sambasivareddychinta@gmail.com"
        className={styles["email-link"]}
        aria-label="email address"
      >
        Say Hello
      </a> */}
      <ul className={styles["contact-links"]}>
        <li>
          <a
            href="https://www.linkedin.com/in/v-n-g-samba-siva-reddy-chinta-78a9651b2/"
            rel="noreferrer"
            target="_blank"
            aria-label="linkedin"
          >
            <LinkedInIcon />
          </a>
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
      </ul>
    </div>
  );
};

export default Contact;
