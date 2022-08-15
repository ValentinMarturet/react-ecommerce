import React from "react";
import Cart from "./Cart/Cart";
import Navigation from "./Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Cart />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
