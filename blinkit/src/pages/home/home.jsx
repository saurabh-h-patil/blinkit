import CategoriesList from "../../components/catagaries/Catagaries";
import Catagaries from "../../components/catagaries/Catagaries";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const Home = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Header />
      <CategoriesList />
      <Footer />
    </div>
  );
};
export default Home;
