import { Carousel } from "3d-react-carousal";
import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import TechEventsList from "./TechEventsList";
import background from "./../images/bg1.jpg";
import tech from "./../images/tech.jpeg";
import nontech from "./../images/nontech.jpeg";
import hack from "./../images/hack.jpeg";
import "./eventsHome.css";
function EventsHome() {
  let slides = [
    <div>
      <img src={tech} alt="1" />
      <h1 class="neon">
        <Link to="/techevents">Tech Events</Link>
      </h1>
      <Route path="/techevents" component={TechEventsList}></Route>
    </div>,
    <div>
      <img src={nontech} alt="2" />
      <h1 class="neon">Non-Tech Events</h1>
    </div>,
    <div>
      <img src={hack} alt="3" />
      <h1 class="neon">Hackathon</h1>
    </div>,
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <div class="displaylist">
        <Carousel
          style={{ paddingTop: "400px" }}
          slides={slides}
          interval={2000}
        />
      </div>
    </div>
  );
}
export default EventsHome;
