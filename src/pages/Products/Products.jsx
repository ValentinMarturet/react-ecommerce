import React from "react";
import Title from "../../Components/General/Title/Title";
import Layout from "../../Components/Layout/Layout";
import Navigation from "../../Components/Layout/Navigation/Navigation";
import ProductList from "../../Components/Products/ProductList/ProductList";

const Products = () => {
  return (
    <Layout>
      <Title>Productos</Title>
      <ProductList />
    </Layout>
  );
};

export default Products;
