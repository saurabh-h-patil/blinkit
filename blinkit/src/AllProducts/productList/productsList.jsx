import { useEffect, useState } from "react";
import DairyProducts from "../productdetails/deairyProducts";
import { useDispatch } from "react-redux";
import { getProducts } from "./productListSlice";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [getProducts, dispatch]);
  return (
    <>
      <div></div>
    </>
  );
};
export default Products;
