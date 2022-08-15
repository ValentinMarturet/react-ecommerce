import React from "react";
import { useDispatch } from "react-redux";
import useImage from "../../../Hooks/useImage";
import { addItem } from "../../../reducers/cartSlice";

const ProductCard = ({ name, price, img, Id }) => {
  const { loading, error, image } = useImage(img.toString());
  const dispatch = useDispatch();
  return (
    <div key={Id}>
      {image && <img src={image} />}
      {error && <p>{error}</p>}
      <h3>
        {name} id: {Id}
      </h3>
      <span>$ {price}</span>
      <button onClick={() => dispatch(addItem({ id: Id, quantity: 1 }))}>
        Agregar al carro
      </button>
    </div>
  );
};

export default ProductCard;
