import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./components/redux/store.js";
import "./styles.css";

import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
