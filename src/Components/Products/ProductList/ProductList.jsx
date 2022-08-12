import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Products from "../../../Static/Products";

const ProductList = () => {
  return (
    <div>
      <ProductCard
        name={Products[0].title}
        price={Products[0].price}
        img={Products[0].sku}
      />
    </div>
  );
};

export default ProductList;
