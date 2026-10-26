import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import App from "./App";
import ErrorBoundary from "./components/common/ErrorBoundary";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="light"
        />
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);