import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import { Home } from "../pages/home/Home";
import CustomerUtil from "../components/customers/customerUtil/CustomerUtil";

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
            {
                path: "customers/create",
                element: <CustomerUtil />,
            },
            {
                path: "customers/edit/:id",
                element: <CustomerUtil />,
            },
            {
                path: "customers/view/:id",
                element: <CustomerUtil />,
            },
        ],
    },
]);