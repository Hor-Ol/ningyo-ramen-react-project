// REACT IMPORTS:
import React from "react";
import ReactDOM from "react-dom/client";

// STYLES IMPORTS:
import "./index.css";

// COMPONENTS IMPORTS:
import App from "./App";

// IMPORTING REDUX STORE PROVIDER:
import { Provider } from "react-redux";

// IMPORTING CREATED REDUX STORE:
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
