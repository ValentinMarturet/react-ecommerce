import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allProducts, filterProducts } from "../../../reducers/productSlice";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts());
  }, []);

  return (
    <>
      <div className={styles.prod_container}>
        {products &&
          products.map((current) => {
            return (
              <ProductCard
                name={current.title}
                price={current.price}
                img={current.sku}
                Id={current.id}
                key={current.id}
              />
            );
          })}
      </div>
    </>
  );
};

export default ProductList;
