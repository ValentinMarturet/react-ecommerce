import React from "react";
import styles from "./CartCard.module.css";

const CartCard = ({ name, id, cant }) => {
  return (
    <div className={styles.container}>
      <h2>
        {name} ID:{id}
      </h2>
      <p>x {cant}</p>
    </div>
  );
};

export default CartCard;
