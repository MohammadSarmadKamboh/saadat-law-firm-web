import { createBrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import DefaultLayout from "@/layouts/DefaultLayout";
import RoutingErrorsPage from "@/components/custom/RoutingErrorsPage";
import Home from "@/views/Home";
import About from "@/views/About";
import Services from "@/views/Services";
import Lawyers from "@/views/Lawyers";
import Contact from "@/views/Contact";

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

      {
        path: paths.about,
        element: <About />,
      },

      {
        path: paths.services,
        element: <Services />,
      },

      {
        path: paths.lawyers,
        element: <Lawyers />,
      },

      {
        path: paths.contact,
        element: <Contact />,
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
