import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./productListSlice";
import ProductRow from "../../../../components/productListRow/productrow";

const Products = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.productsList);
  console.log("all productssssssssssssss", isLoading, data);
  useEffect(() => {
    dispatch(getProducts());
  }, [getProducts, dispatch]);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data &&
        data.map((product) => <ProductRow key={product.id} {...product} />)
      )}
    </>
  );
};
export default Products;
