import React from "react";
import ContactForm from "../../Components/Contact/ContactForm/ContactForm";
import Layout from "../../Components/Layout/Layout";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <Layout>
      <h1 className={styles.title}>
        Envianos un mensaje y nos pondremos en contacto lo mas pronto posible
      </h1>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
