import React from "react";
import styles from "./Checkout.module.css";
import Layout from "../../Components/Layout/Layout";
import Title from "../../Components/General/Title/Title";
import CheckoutCard from "../../Components/Checkout/CheckoutCard/CheckoutCard";
import { useSelector, useDispatch } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const products = useSelector((state) => state.products.products);

  //   Funcion que encuentra un producto en el array de productos segun su id y devuelve el objeto producto
  const findProduct = (productArray, id) => {
    return productArray.find((item) => item.id === id);
  };
  // Funcion que suma todos los precios de los productos en sus cantidades especificas
  const getTotalPrice = (productArray, cartProducts) => {
    return cartProducts.reduce((acc, item) => {
      const product = findProduct(productArray, item.id);
      return acc + product.price * item.quantity;
    }, 0);
  };

  return (
    <Layout>
      <Title>Carrito</Title>
      <div className={styles.product_container}>
        {cartItems &&
          cartItems.map((item) => {
            const product = findProduct(products, item.id);
            return (
              <CheckoutCard
                key={item.id}
                img={product.sku}
                name={product.title}
                price={product.price}
                quantity={item.quantity}
                id={item.id}
              />
            );
          })}
      </div>
      <div>
        <h1>Total: {getTotalPrice(products, cartItems)}</h1>
      </div>
    </Layout>
  );
};

export default Checkout;
