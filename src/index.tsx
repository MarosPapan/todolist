import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Store from "./services/store/index";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById("root")
);
