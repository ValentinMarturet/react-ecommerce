import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import logo from "../../../assets/Logo/default-monochrome-black.svg";
import { CgShoppingBag } from "react-icons/cg";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import { toggle } from "../../../reducers/cartSlice";

const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt="Logo" />
      <nav className={styles.navbar}>
        <Link className={styles.nav_item} to="/">
          Home
        </Link>
        <Link className={styles.nav_item} to="/products">
          Productos
        </Link>
        <Link className={styles.nav_item} to="/">
          Sobre Nosotros
        </Link>
        <Link className={styles.nav_item} to="/">
          Contacto
        </Link>
      </nav>
      <IconContext.Provider
        value={{
          size: "1.5rem",
          style: {
            verticalAlign: "middle",
            pointerEvents: "none",
          },
        }}
      >
        <div onClick={() => dispatch(toggle())} className={styles.cart_icon}>
          <div className={`${styles.cart_dot}`}></div>
          <CgShoppingBag />
        </div>
      </IconContext.Provider>
    </header>
  );
};

export default Navigation;
