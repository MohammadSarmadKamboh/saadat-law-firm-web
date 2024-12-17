import { createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "@/views/Home";
import RoutingErrorsPage from "@/components/custom/RoutingErrorsPage";

const routes = createBrowserRouter([
  {
    path: paths.root,
    element: <DefaultLayout />,
    errorElement: <RoutingErrorsPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      //  include more nested routes as written below

      //   {
      //     path: paths.productsFromApi,
      //     element: <ProductsListPage />,
      //   },

      //   {
      //     path: "/products/category/:category", // Dynamic category page
      //     element: <ProductsCategoryPage />, // You will render products of a specific category here
      //   },
    ],
  },
  // ... other top-level routes
]);

export default routes;
