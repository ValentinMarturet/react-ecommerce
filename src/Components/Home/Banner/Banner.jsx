import React from "react";
import image from "../../../assets/banner.jpg";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default Banner;
