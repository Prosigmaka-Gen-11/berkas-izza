import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./pages/Form";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/form", element: <Form /> },
  {
    path: "/edit",
    children: [
      {
        path: ":userId",
        element: <Edit />,
      },
    ],
  },
  {
    path: "/detail",
    children: [
      {
        path: ":detailId",
        element: <Detail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
