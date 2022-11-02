import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import Data from "./Data";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import ProtectedLayout from "./ProtectedLayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <ProtectedLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
      { path: "/data", element: <Data /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
