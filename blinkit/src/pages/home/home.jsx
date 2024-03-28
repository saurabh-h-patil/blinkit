import CategoriesList from "../../components/catagaries/Catagaries";
import Catagaries from "../../components/catagaries/Catagaries";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Products from "../../AllProducts/productList/productsList";

const Home = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Header />
      <CategoriesList />
      <Products />
      <Footer />
    </div>
  );
};
export default Home;
