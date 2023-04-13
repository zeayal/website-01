import { useState } from "react";
import "./App.css";
import { Button, Layout } from "antd";
import SiteLayout from "./component/Layout";
import { Routes, Route, Outlet, Link, useRoutes } from "react-router-dom";
import Post from "./pages/post";
import User from "./pages/user";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  let element = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <SiteLayout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "user",
          element: <User />,
        },
        { path: "post", element: <Post /> },
      ],
    },
  ]);

  return element;
}

export default App;
