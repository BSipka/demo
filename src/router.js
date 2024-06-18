import RootLayout from "./layouts/Root";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";
import AuthenticationPage, {
  action as authAction,
} from "./pages/auth/Authentication";

import VerifyCustomer, {
  loader as verifyCustomerLoader,
} from "./pages/auth/VerifyCustomer";

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
      { path: "/login", action: authAction, element: <AuthenticationPage /> },
    ],
  },

  {
    path: "/verify",
    loader: verifyCustomerLoader,
    element: <VerifyCustomer />,
  },

  //   {
  //     path: "/saloon",
  //     element: <SaloonLayout />,
  //     children: [
  //       { path: "/", element: <Home /> },
  //       { path: "/contact", element: <ContactPage /> },
  //     ],
  //   },
  // {
  //   path: "/customer",
  //   element: <CustomerLayout />,
  //   children: [
  //     { path: "/", element: <Home /> },
  //     { path: "/contact", element: <ContactPage /> },
  //   ],
  // },
]);

export default router;
