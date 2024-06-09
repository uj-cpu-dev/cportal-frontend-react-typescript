import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import { Home } from "../pages/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
    },
]);