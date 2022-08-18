import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../CartCard/CartCard";
import styles from "./Cart.module.css";

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
  return (
    <div className={`${styles.cart} ${showCart()}`}>
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
      <button onClick={() => console.log(cartItems)}>log</button>
    </div>
  );
};

export default Cart;

{
  /*  */
}
