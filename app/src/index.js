import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
// import TechEventsList from "./Events/TechEventsList.js";
// import NonTechEventsList from "./Events/NonTechEventsList.js";
// import WorkshopList from "./Workshops/WorkshopList";

ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
