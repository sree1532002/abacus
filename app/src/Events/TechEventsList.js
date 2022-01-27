import React, { Component } from "react";
import Slider from "../components/HorizontalSlider";
import "./EventsList.scss";
import codeforcrown from "./../images/Tech/code-for-crown.png";
import tenet from "./../images/Tech/tenet.png";
import Xdomain from "./../images/Tech/Xdomain.png";
import Novice from "./../images/Tech/Noviceinit.png";

const events = [
  {
    id: 1,
    image: codeforcrown,
    imageBg: "/images/slide1b.webp",
    title: "Code for crown",
    desc: "Online Programming Contest",
  },
  {
    id: 2,
    image: tenet,
    imageBg: "/images/slide2b.webp",
    title: "Tenet",
    desc: "A challenge where the participants have to identify and resolve bugs",
  },
  {
    id: 3,
    image: Xdomain,
    imageBg: "/images/slide3b.webp",
    title: "X Domain Combat",
    desc: "Explore new horizons in various technical domains",
  },
  {
    id: 4,
    image: Novice,
    imageBg: "/images/slide4b.webp",
    title: "Novice Init()",
    desc: "Exclusive event for the first year students",
  },
  {
    id: 5,
    image: codeforcrown,
    imageBg: "/images/slide5b.webp",
    title: "Code for crown",
    desc: "Online Programming Contest",
  },
  {
    id: 6,
    image: tenet,
    imageBg: "/images/slide6b.webp",
    title: "Tenet",
    desc: "A challenge where the participants have to identify and resolve bugs",
  },
];

class TechEventsList extends Component {
  render() {
    return (
      <div className="app">
        <Slider>
          {events.map((event) => (
            <Slider.Item event={event} key={event.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }
}

export default TechEventsList;
