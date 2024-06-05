import RootLayout from "./layouts/Root";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("./pages/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
  //   {
  //     path: "/saloon",
  //     element: <SaloonLayout />,
  //     children: [
  //       { path: "/", element: <Home /> },
  //       { path: "/contact", element: <ContactPage /> },
  //     ],
  //   },
  //   {
  //     path: "/customer",
  //     element: <CustomerLayout />,
  //     children: [
  //       { path: "/", element: <Home /> },
  //       { path: "/contact", element: <ContactPage /> },
  //     ],
  //   },
]);

export default router;
