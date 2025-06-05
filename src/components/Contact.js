import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from '@mui/icons-material/Twitter';

import styles from "../styles/page.module.css";

const Contact = () => {
  return (
    <div className={styles["contact-wrapper"]} id="contact">
      <h2 className={styles["contact-title"]}>Get In Touch</h2>
      <p className={styles["contact-message"]}>
        Hello There! I'm open for Opportunity. If you feel I'm eligible or just
        want to say Hi, drop an email. I will get back with reply. Thank You!
      </p>
      <a
        href="mailto:sambasivareddychinta@gmail.com"
        className={styles["email-link"]}
      >
        Say Hello
      </a>
      <ul className={styles["contact-links"]}>
        <li>
          <a
            href="https://www.linkedin.com/in/v-n-g-samba-siva-reddy-chinta-78a9651b2/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/samsr.ch/"
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/sambasivadev"
            rel="noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/sambasivareddy-ch"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </li>
      </ul>
      {/* <p className={styles["attribution"]}>
        Get Inspiration from Brittany Chiang
      </p> */}
    </div>
  );
};

export default Contact;
