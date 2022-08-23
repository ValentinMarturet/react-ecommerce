import React from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
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
        <span className={styles.price}>${price}</span>
        <Link
          className={`${styles.btn} ${styles.details}`}
          to={`/products/${Id}`}
        >
          Detalles
        </Link>
        <button
          className={`${styles.btn} ${styles.add_item}`}
          onClick={() => dispatch(addItem({ id: Id, quantity: 1 }))}
        >
          Comprar
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default ProductCard;
