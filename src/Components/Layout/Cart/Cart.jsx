import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../CartCard/CartCard";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { toggle } from "../../../reducers/cartSlice";

const Cart = () => {
  const { isShowing, cartItems } = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products.products);
  const showCart = () => {
    if (isShowing) {
      return styles.cart_on;
    } else {
      return "";
    }
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className={`${styles.cart} ${showCart()}`}>
      <div className={styles.card_container}>
        {!cartItems[0] && (
          <h1 className={styles.empty_text}>
            Aun no has agregado nada al carrito
          </h1>
        )}
        {cartItems &&
          cartItems.map((element) => {
            const index = products.map((item) => item.id).indexOf(element.id);
            return (
              <CartCard
                name={products[index].title}
                img={products[index].sku}
                id={element.id}
                cant={element.quantity}
              />
            );
          })}
        <div style={{ width: "350px", height: "70px" }}></div>
      </div>
      <div className={styles.btn_container}>
        <button
          className={styles.checkout_btn}
          onClick={() => {
            navigate("/checkout");
            dispatch(toggle());
          }}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Cart;

{
  /*  */
}
