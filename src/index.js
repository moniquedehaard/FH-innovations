// PACKAGES
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// APP
import { App } from "./app";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
