import "./Home.css";
import Layout from "../../Components/Layout/Layout";
import Navigation from "../../Components/Layout/Navigation/Navigation";
import Banner from "../../Components/Home/Banner/Banner";
import Popular from "../../Components/Home/Popular/Popular";

function Home() {
  return (
    <Layout>
      <Banner />
      <Popular />
    </Layout>
  );
}

export default Home;
