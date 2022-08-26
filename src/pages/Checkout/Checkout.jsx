import React from "react";
import Layout from "../../Components/Layout/Layout";
import Title from "../../Components/General/Title/Title";
import CheckoutCard from "../../Components/Checkout/CheckoutCard/CheckoutCard";

const Checkout = () => {
  return (
    <Layout>
      <Title>Compra</Title>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CheckoutCard />
      </div>
    </Layout>
  );
};

export default Checkout;
