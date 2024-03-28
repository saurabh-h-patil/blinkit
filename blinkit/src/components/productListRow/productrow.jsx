import { Link } from "react-router-dom";

import Items from "./productListAtoms/items";
const ProductRow = ({ products }) => {
  console.log("products", products);
  console.log("row products", products);
  const Allproduct = products.objects[0];
  return (
    <>
      <div style={{ height: "369px" }}>
        {<h1>{products.data.title}</h1>}
        <div style={{ display: "flex", border: "2px solid red" }}>
          {Allproduct.data.products.map((item) => {
            return <Items item={item} />;
          })}
        </div>
      </div>
    </>
  );
};
export default ProductRow;
