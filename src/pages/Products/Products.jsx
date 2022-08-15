import React from "react";
import Layout from "../../Components/Layout/Layout";
import Navigation from "../../Components/Layout/Navigation/Navigation";
import ProductList from "../../Components/Products/ProductList/ProductList";

const Products = () => {
  return (
    <Layout>
      Aqui una lista de productos
      <ProductList />
    </Layout>
  );
};

export default Products;
