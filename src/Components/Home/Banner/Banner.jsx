import React from "react";

import styles from "./Banner.module.css";

const Banner = ({ image }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default Banner;
