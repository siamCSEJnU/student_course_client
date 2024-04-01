import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Edit from "./pages/Edit/Edit.jsx";
import Delete from "./pages/Delete/Delete.jsx";
import Create from "./pages/Create/Create.jsx";
import Details from "./pages/Details/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/create",
    element: <Create></Create>,
  },
  {
    path: "/details",
    element: <Details></Details>,
  },
  {
    path: "/edit/:Id",
    element: <Edit></Edit>,
  },
  {
    path: "/delete",
    element: <Delete></Delete>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
