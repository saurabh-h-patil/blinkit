import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Cart from "../pages/cart/cart";

import Header from "../componets/header/header";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <Cart />
      </>
    ),
  },
]);

const Navigator = () => {
  return <RouterProvider router={router} />;
};
export default Navigator;
