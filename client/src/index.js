import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import App from "./App";

import DishesRoute from "./routes/dishes";
import FoodsRoute from "./routes/foods";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // Source: https://reactrouter.com/docs/en/v6/getting-started/overview
  // Source: https://reactrouter.com/docs/en/v6/getting-started/tutorial
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dishes" element={<DishesRoute />} />
      <Route path="/foods" element={<FoodsRoute />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
