import { Link } from "react-router-dom";

import Items from "./productListAtoms/items";
const ProductRow = ({ products }) => {
  console.log("products", products);
  console.log("row products", products);
  const Allproduct = products.objects[0];
  return (
    <>
      <div
        style={{
          height: "369px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "19px",
        }}
      >
        <div style={{ maxWidth: "1280px" }}>
          {<h1>{products.data.title}</h1>}
          <div
            style={{
              display: "flex",
              overflow: "scroll",
            }}
          >
            {Allproduct.data.products.map((item) => {
              return <Items item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductRow;
