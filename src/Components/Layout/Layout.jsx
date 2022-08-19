import React from "react";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Cart />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
