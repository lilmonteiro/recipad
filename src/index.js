import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home";
import RecipePage from "./pages/RecipePage/RecipePage";
import RecipesList from "./pages/RecipesList/RecipesList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/receita/:id",
    element: <RecipePage />,
  },
  {
    path: "/receitas",
    element: <RecipesList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
