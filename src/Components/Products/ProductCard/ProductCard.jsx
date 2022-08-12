import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useImage from "../../../Hooks/useImage";

const ProductCard = ({ name, price, img }) => {
  //   const [image, setImage] = useState("https://via.placeholder.com/120x174");
  useEffect(() => {
    console.log(img.toString());
  });
  const { loading, error, image } = useImage(img.toString());

  return (
    <div>
      {image && <img src={image} />}
      {error && <p>{error}</p>}
      <h3>{name}</h3>
      <span>$ {price}</span>
    </div>
  );
};

export default ProductCard;
