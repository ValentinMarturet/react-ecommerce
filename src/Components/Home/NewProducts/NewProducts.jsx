import React from "react";
import { useSelector } from "react-redux";
import Title from "../../General/Title/Title.jsx";
import ProductCard from "../../Products/ProductCard/ProductCard.jsx";
import styles from "./NewProducts.module.css";

const NewProducts = () => {
  const products = useSelector((state) => state.products.products);

  const length = products[0] ? products.length : 0;

  return (
    <>
      <Title>Nuevos Productos</Title>
      <div className={styles.product_container}>
        {products[0] && (
          <>
            <ProductCard
              name={products[length - 1].title}
              price={products[length - 1].price}
              img={products[length - 1].sku}
              Id={products[length - 1].id}
              key={products[length - 1].id}
            />
            <ProductCard
              name={products[length - 2]?.title}
              price={products[length - 2]?.price}
              img={products[length - 2]?.sku}
              Id={products[length - 2]?.id}
              key={products[length - 2]?.id}
            />
            <ProductCard
              name={products[length - 3]?.title}
              price={products[length - 3]?.price}
              img={products[length - 3]?.sku}
              Id={products[length - 3]?.id}
              key={products[length - 3]?.id}
            />
          </>
        )}
      </div>
    </>
  );
};

export default NewProducts;
