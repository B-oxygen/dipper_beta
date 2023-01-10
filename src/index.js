import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AuthProvider from "./components/molecules/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { BrowserRouter } from "react-router-dom";
import "./global.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
    <ToastContainer theme="dark" />
  </BrowserRouter>
);
