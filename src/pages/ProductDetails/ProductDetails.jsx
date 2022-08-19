import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import useImage from "../../Hooks/useImage";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((item) => item.id === parseInt(productId))
  );
  const { loading, error, image } = useImage(product.sku);

  return (
    <Layout>
      <img src={image} />
      <h1>{product.title}</h1>
      <h3>{product.description}</h3>
      <h3>${product.price}</h3>
      <h3>Tamaños disponibles: {product.availableSizes}</h3>
      <button onClick={() => console.log(product)}>Test</button>
    </Layout>
  );
};

export default ProductDetails;
