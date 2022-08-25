import React from "react";
import ContactForm from "../../Components/Contact/ContactForm/ContactForm";
import Title from "../../Components/General/Title/Title";
import Banner from "../../Components/Home/Banner/Banner";
import Layout from "../../Components/Layout/Layout";
import styles from "./Contact.module.css";
import banner from "../../assets/contact.jpg";

const Contact = () => {
  return (
    <Layout>
      <Banner image={banner} />
      <Title>Contacto</Title>
      <h1 className={styles.title}>
        Envianos un mensaje y nos pondremos en contacto lo mas pronto posible
      </h1>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
