import React from "react";
import Title from "../../Components/General/Title/Title";
import Layout from "../../Components/Layout/Layout";
import Banner from "../../Components/Home/Banner/Banner";
import styles from "./About.module.css";
import storeImg from "../../assets/store.jpg";
import banner from "../../assets/about.jpg";

const About = () => {
  return (
    <Layout>
      <Banner image={banner} />
      <Title>Sobre nosotros</Title>
      <div className={styles.info_block}>
        <div className={styles.info_container}>
          <h2>Quienes somos?</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            quibusdam voluptatem libero mollitia. Nisi accusamus alias,
            laboriosam atque sunt fuga iusto repellat dolore neque perspiciatis
            commodi ipsa, exercitationem obcaecati labore! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Minus maxime cupiditate mollitia
            nulla recusandae, qui perferendis quibusdam rerum possimus dolorem
            culpa, sint assumenda optio repellendus. Saepe accusantium voluptate
            fugit ullam?
          </p>
        </div>
        <img className={styles.store_img} src={storeImg} alt="StoreImage" />
      </div>
      <div className={styles.test_block}>
        <h2>Testimonios</h2>
        <div className={styles.testimonials}>
          <h3 className={styles.test_name}>Cliente 1</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            dolores reprehenderit quae illum blanditiis. Optio impedit tenetur
            repellendus libero ipsa, excepturi animi repellat facere accusamus
            exercitationem earum natus vero? Totam?
          </p>
        </div>
        <div className={styles.testimonials}>
          <h3 className={styles.test_name}>Cliente 2</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            dolores reprehenderit quae illum blanditiis. Optio impedit tenetur
            repellendus libero ipsa, excepturi animi repellat facere accusamus
            exercitationem earum natus vero? Totam?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
