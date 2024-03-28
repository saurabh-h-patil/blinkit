import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./productListSlice";
import ProductRow from "../../../../components/productListRow/productrow";

const Products = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.productsList);
  console.log("all productssssssssssssss ", isLoading, data);
  useEffect(() => {
    dispatch(getProducts());
  }, [getProducts, dispatch]);
  return (
    <>
      <div style={{ width: "100vw", height: "305x" }}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data &&
          data.map((products) => (
            <ProductRow key={products.id} products={products} />
          ))
        )}
      </div>
    </>
  );
};
export default Products;
