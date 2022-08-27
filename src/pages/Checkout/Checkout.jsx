import React from "react";
import styles from "./Checkout.module.css";
import Layout from "../../Components/Layout/Layout";
import Title from "../../Components/General/Title/Title";
import CheckoutCard from "../../Components/Checkout/CheckoutCard/CheckoutCard";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { clearCart } from "../../reducers/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleCheckout = () => {
    console.log("funciona");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Compra registrada",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(clearCart());
    navigate("/");
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
      <div className={styles.operations_container}>
        <div className={styles.operations}>
          <button
            onClick={() => handleCheckout()}
            className={styles.checkout_btn}
          >
            Comprar
          </button>
          <h1 className={styles.price}>
            <h2 className={styles.total}>Total:</h2> $
            {getTotalPrice(products, cartItems).toFixed(2)}
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
