import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.link_container}>
        <a
          className={styles.links}
          href="https://www.freepik.com/photos/closet"
        >
          Closet photo created by lookstudio - www.freepik.com
        </a>
      </div>
      <div className={styles.contact_container}>LinkedIn github</div>
    </div>
  );
};

export default Footer;
