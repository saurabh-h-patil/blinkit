import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";

// Create a browser router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
]);

// Define a component for providing the router
const Navigator = () => {
  // Provide the router using RouterProvider
  return <RouterProvider router={router} />;
};

// Export the Navigator component as default
export default Navigator;
