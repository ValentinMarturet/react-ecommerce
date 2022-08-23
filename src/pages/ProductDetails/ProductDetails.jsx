import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import Popular from "../../Components/Home/Popular/Popular";
import useImage from "../../Hooks/useImage";
import styles from "./ProductDetails.module.css";
import Slider from "react-slick";
import { addItem } from "../../reducers/cartSlice";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((item) => item.id === parseInt(productId))
  );
  const dispatch = useDispatch();
  const { loading, error, image } = useImage(product.sku);
  const {
    loading: loading2,
    error: error2,
    image: image2,
  } = useImage(product.sku, "product", 2);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.slider}>
          <Slider
            dots={true}
            infinite={true}
            speed={1000}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
            autoplay={true}
            autoplaySpeed={5000}
          >
            <div>
              <img src={image} />
            </div>
            <div>
              <img src={image2} />
            </div>
          </Slider>
        </div>
        <div className={styles.info}>
          <h1 className={styles.name}>{product.title}</h1>
          <hr />
          <h3>{product.description}</h3>
          <h3>
            Tamaños disponibles:{" "}
            {product.availableSizes.map((item) => (
              <p className={styles.sizes}> {item} </p>
            ))}
          </h3>
          <h3 className={styles.price}>${product.price}</h3>
          <button
            className={`${styles.btn} ${styles.add_item}`}
            onClick={() => dispatch(addItem({ id: product.id, quantity: 1 }))}
          >
            Comprar
          </button>
          <button onClick={() => console.log(product)}>Test</button>
        </div>
      </div>
      <Popular />
    </Layout>
  );
};

export default ProductDetails;
