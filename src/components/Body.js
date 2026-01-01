import { createBrowserRouter, RouterProvider } from "react-router";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetails";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <ProductList/>,
    },
    {
      path: "/product/:id",
      element: <ProductDetail/>,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
