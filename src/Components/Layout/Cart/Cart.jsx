import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../../reducers/productSlice";
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts());
  }, []);

  return (
    <div className={`${styles.cart} ${showCart()}`}>
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
    </div>
  );
};

export default Cart;

{
  /*  */
}
