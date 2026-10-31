import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
