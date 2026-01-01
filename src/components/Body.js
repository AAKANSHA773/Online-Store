import { createBrowserRouter, RouterProvider } from "react-router";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetails";
import FavoritesList from "../pages/FavoritesList";

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
    { 
      path: "/favorites", 
      element: <FavoritesList/>
     },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
