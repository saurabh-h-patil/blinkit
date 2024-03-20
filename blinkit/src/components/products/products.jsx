import { useEffect, useState } from "react";
import DairyProducts from "./productsAtom/deairyProducts";

const Products = () => {
  const [products, setProducts] = useState("");
  useEffect(() => {}, []);
  return (
    <>
      <DairyProducts />
    </>
  );
};
export default Products;
