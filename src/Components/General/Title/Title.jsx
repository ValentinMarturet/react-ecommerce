import React from "react";
import styles from "./Title.module.css";

const Title = ({ children }) => {
  return (
    <div className={styles.title_container}>
      <span className={styles.title_line} />
      <h1 className={styles.title}>{children}</h1>
      <span className={styles.title_line} />
    </div>
  );
};

export default Title;
