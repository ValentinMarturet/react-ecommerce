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
        <h3>{name}</h3>
      </div>
      <div>
        <h3>
          $ {price} X{quantity}
        </h3>
        <button onClick={() => dispatch(deleteItem({ id: id }))}>
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
