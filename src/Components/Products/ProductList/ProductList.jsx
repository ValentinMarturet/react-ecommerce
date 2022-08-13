import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Products from "../../../Static/Products";
import styles from "./ProductList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  allProducts,
  filterProducts,
} from "../../../reducers/slices/productSlice";

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts());
  }, []);

  return (
    <>
      <button onClick={() => dispatch(filterProducts("L"))}>
        FilterProducts
      </button>
      <div className={styles.prod_container}>
        {products &&
          products.map((current) => {
            return (
              <ProductCard
                name={current.title}
                price={current.price}
                img={current.sku}
                key={current.id}
              />
            );
          })}
      </div>
    </>
  );
};

export default ProductList;
