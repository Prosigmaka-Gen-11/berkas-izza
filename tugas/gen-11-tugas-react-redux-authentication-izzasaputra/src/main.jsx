import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./Home";
import Login from "./Login";
import ProtectedLayout from "./ProtectedLayout";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "",
    element: <ProtectedLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
