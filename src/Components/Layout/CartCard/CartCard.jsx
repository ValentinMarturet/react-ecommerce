import React from "react";
import useImage from "../../../Hooks/useImage";
import styles from "./CartCard.module.css";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../reducers/cartSlice";

const CartCard = ({ name, img, id, cant }) => {
  const { loading, error, image } = useImage(img.toString(), "cart");
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {image && (
        <div
          className={styles.cart_img}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}
      <div className={styles.info_container}>
        <h2 className={styles.name}>{name}</h2>
      </div>
      <div className={styles.info_end}>
        <button
          className={styles.close_btn}
          onClick={() => {
            console.log("delete");
            dispatch(deleteItem({ id: id }));
          }}
        >
          x
        </button>
        <p className={styles.quantity}>x {cant}</p>
      </div>
    </div>
  );
};

export default CartCard;
