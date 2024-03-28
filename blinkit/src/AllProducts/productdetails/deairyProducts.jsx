import { useEffect, useState } from "react";
import DairyProduct from "../../components/lib/data/products/dairyProducts.json";
const DairyProducts = () => {
  const [products, setProducts] = useState("");
  useEffect(() => {
    setProducts(DairyProduct);
  }, []);
  console.log("dairy", products);
  return (
    <>
      <div></div>
    </>
  );
};
export default DairyProducts;
