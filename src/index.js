import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={generateStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
