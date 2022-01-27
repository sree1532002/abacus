import React, { Component } from "react";
import Slider from "../components/HorizontalSlider";
import "./EventsList.scss";
import Imagenation from "./../images/Nontech/Imagenation.png";
import Housefull from "./../images/Nontech/House full.png";
import Graphictraffic from "./../images/Nontech/Graphic traffic.png";

const events = [
  {
    id: 1,
    image: Imagenation,
    imageBg: "/images/slide1b.webp",
    title: "Imagenation",
    desc: "An online photography contest",
  },
  {
    id: 2,
    image: Housefull,
    imageBg: "/images/slide2b.webp",
    title: "House full",
    desc: "An event for all the non-technical pros out there",
  },
  {
    id: 3,
    image: Graphictraffic,
    imageBg: "/images/slide3b.webp",
    title: "Graphic Traffic",
    desc: "An online poster designing contest",
  },
  {
    id: 4,
    image: Imagenation,
    imageBg: "/images/slide1b.webp",
    title: "Imagenation",
    desc: "An online photography contest",
  },
  {
    id: 5,
    image: Housefull,
    imageBg: "/images/slide2b.webp",
    title: "House full",
    desc: "An event for all the non-technical pros out there",
  },
  {
    id: 6,
    image: Graphictraffic,
    imageBg: "/images/slide3b.webp",
    title: "Graphic Traffic",
    desc: "An online poster designing contest",
  },
];

class NonTechEventsList extends Component {
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

export default NonTechEventsList;
