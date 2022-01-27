import React, { Component } from "react";
import Slider from "../components/HorizontalSlider";
import "./WorkshopList.scss";
import cloudcomputing from "./../images/Workshops/Cloud computing.png";
import jobreadiness from "./../images/Workshops/Job readiness.png";
import entrepreneurship from "./../images/Workshops/Entrepreneurship.png";

const events = [
  {
    id: 1,
    image: cloudcomputing,
    //imageBg: "/images/slide1b.webp",
    title: "Cloud Computing",
    desc: "A cloud computing workshop",
  },
  {
    id: 2,
    image: jobreadiness,
    imageBg: "/images/slide2b.webp",
    title: "Job readiness",
    desc: "A placement workshop",
  },
  {
    id: 3,
    image: entrepreneurship,
    imageBg: "/images/slide3b.webp",
    title: "Entrepreneurship",
    desc: "An entrepreneurship workshop",
  },
  {
    id: 4,
    image: cloudcomputing,
    imageBg: "/images/slide1b.webp",
    title: "Cloud Computing",
    desc: "A cloud computing workshop",
  },
  {
    id: 5,
    image: jobreadiness,
    imageBg: "/images/slide2b.webp",
    title: "Job readiness",
    desc: "A placement workshop",
  },
  {
    id: 6,
    image: entrepreneurship,
    imageBg: "/images/slide3b.webp",
    title: "Entrepreneurship",
    desc: "An entrepreneurship workshop",
  },
];

class WorkshopList extends Component {
  render() {
    return (
      <div className="app">
        <Slider>
          {events.map((event) => (
            <Slider.Item event={event} key={event.id}>
              item
            </Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }
}

export default WorkshopList;
