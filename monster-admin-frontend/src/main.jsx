import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ConfigProvider, theme } from "antd";
import './assets/reset.less';

const router = createBrowserRouter([{ path: "/", element: <App /> }]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "blue",
        },
      }}
    >
      <BrowserRouter basename="monster-admin-frontend">
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
