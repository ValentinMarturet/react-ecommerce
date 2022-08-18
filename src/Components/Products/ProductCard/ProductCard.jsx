import React from "react";
import { useDispatch } from "react-redux";
import useImage from "../../../Hooks/useImage";
import { addItem } from "../../../reducers/cartSlice";
import styles from "./ProductCard.module.css";

const ProductCard = ({ name, price, img, Id }) => {
  const { loading, error, image } = useImage(img.toString(), "product");
  const dispatch = useDispatch();
  return (
    <div className={styles.card} key={Id}>
      {image && <img src={image} />}
      {error && <p>{error}</p>}
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.info}>
        <span>${price}</span>
        <button className={`${styles.btn} ${styles.details}`}>Detalles</button>
        <button
          className={`${styles.btn} ${styles.add_item}`}
          onClick={() => dispatch(addItem({ id: Id, quantity: 1 }))}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
