import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import EventList from "./../src/EventPages/EventList.js";

ReactDOM.render(
  <React.StrictMode>
    <EventList />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
