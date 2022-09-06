import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../Products/ProductCard/ProductCard.jsx";
import { allProducts } from "../../../reducers/productSlice.js";
import styles from "./Popular.module.css";
import getRandomInt from "../../../utils/getRandomInt";
import Title from "../../General/Title/Title.jsx";

const Popular = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  let indexs = [];
  useEffect(() => {
    dispatch(allProducts());
  }, []);
  useEffect(() => {
    indexs = [
      getRandomInt(products.length),
      getRandomInt(products.length),
      getRandomInt(products.length),
    ];
  }, [products]);
  return (
    <>
      <Title>Productos Populares</Title>
      <div className={styles.product_container}>
        {products[0] && (
          <>
            <ProductCard
              name={products[0].title}
              price={products[0].price}
              img={products[0].sku}
              Id={products[0].id}
              key={products[0].id}
            />
            <ProductCard
              name={products[1]?.title}
              price={products[1]?.price}
              img={products[1]?.sku}
              Id={products[1]?.id}
              key={products[1]?.id}
            />
            <ProductCard
              name={products[2]?.title}
              price={products[2]?.price}
              img={products[2]?.sku}
              Id={products[2]?.id}
              key={products[2]?.id}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Popular;
