// components/TypingTitles.jsx
import { useState, useEffect } from "react";
import styles from "../styles/typingtitles.module.css";

export default function TypingTitles() {
  const titles = ["Software Developer", "Database Researcher"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];
    const speed = isDeleting ? 50 : 120;

    const handler = setTimeout(() => {
      setDisplayText(prev =>
        isDeleting ? current.substring(0, prev.length - 1)
                   : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === current) {
        // start deleting after a pause
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(handler);
  }, [displayText, isDeleting, index, titles]);

  return (
    <div className={styles.titleWrapper}>
      <h1 className={styles["my-role"]} aria-live="polite">
        {displayText}
        <span className={styles.cursor} aria-hidden="true">|</span>
      </h1>
    </div>
  );
}
