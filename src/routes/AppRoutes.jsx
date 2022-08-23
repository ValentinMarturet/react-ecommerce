import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import { useDispatch } from "react-redux";
import { allProducts } from "../reducers/productSlice";
import Contact from "../pages/Contact/Contact";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
