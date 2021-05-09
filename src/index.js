import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/reducer";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
