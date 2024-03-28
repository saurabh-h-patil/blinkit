import { useEffect, useState } from "react";

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
