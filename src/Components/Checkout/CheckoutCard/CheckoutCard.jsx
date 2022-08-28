import React from "react";
import styles from "./CheckoutCard.module.css";
import { FiTrash } from "react-icons/fi";
import { IconContext } from "react-icons";
import useImage from "../../../Hooks/useImage";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../reducers/cartSlice";

const CheckoutCard = ({ img, name, price, quantity, id }) => {
  const { image } = useImage(img, "cart");
  const dispatch = useDispatch();

  return (
    <div className={styles.card_container}>
      <div>
        <img className={styles.img} src={image} />
      </div>
      <div className={styles.name}>
        <h3 className={styles.text}>{name}</h3>
      </div>
      <div className={styles.last_col}>
        <button
          className={styles.del_btn}
          onClick={() => dispatch(deleteItem({ id: id }))}
        >
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
        <h3 className={styles.price}>$ {price}</h3>
        <h3 className={styles.quantity}>X{quantity}</h3>
      </div>
    </div>
  );
};

export default CheckoutCard;
