import "./Home.css";
import Layout from "../../Components/Layout/Layout";
import Banner from "../../Components/Home/Banner/Banner";
import Popular from "../../Components/Home/Popular/Popular";
import NewProducts from "../../Components/Home/NewProducts/NewProducts";

function Home() {
  return (
    <Layout>
      <Banner />
      <Popular />
      <NewProducts />
    </Layout>
  );
}

export default Home;
