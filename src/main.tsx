import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
