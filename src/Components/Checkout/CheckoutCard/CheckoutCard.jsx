import React from "react";
import styles from "./CheckoutCard.module.css";
import testImg from "../../../Static/products/876661122392077-1-cart.webp";
import { FiTrash } from "react-icons/fi";
import { IconContext } from "react-icons";

const CheckoutCard = ({}) => {
  return (
    <div className={styles.card_container}>
      <div>
        <img className={styles.img} src={testImg} />
      </div>
      <div className={styles.name}>
        <h3>Nombre del Producto</h3>
      </div>
      <div>
        <h3>Precio</h3>
        <button>
          <IconContext.Provider
            value={{
              size: "1.2rem",
              style: {
                verticalAlign: "middle",
                pointerEvents: "none",
              },
            }}
          >
            <FiTrash />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default CheckoutCard;
