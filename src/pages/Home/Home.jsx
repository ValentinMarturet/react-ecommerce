import "./Home.css";
import Layout from "../../Components/Layout/Layout";
import Banner from "../../Components/Home/Banner/Banner";
import Popular from "../../Components/Home/Popular/Popular";
import NewProducts from "../../Components/Home/NewProducts/NewProducts";
import banner from "../../assets/banner.jpg";

function Home() {
  return (
    <Layout>
      <Banner image={banner} />
      <Popular />
      <NewProducts />
    </Layout>
  );
}

export default Home;
