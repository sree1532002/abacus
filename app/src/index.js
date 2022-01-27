import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TechEventsList from "./Events/TechEventsList.js";
import NonTechEventsList from "./Events/NonTechEventsList.js";
import WorkshopList from "./Workshops/WorkshopList";

ReactDOM.render(
  <React.StrictMode>
    <WorkshopList />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
