import React, { Component } from "react";
import Slider from "./../components/HorizontalSlider";
import "./EventList.scss";
import codeforcrown from "./../images/code-for-crown.jpg";
import tenet from "./../images/tenet.png";

const movies = [
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
    image: codeforcrown,
    imageBg: "/images/slide3b.webp",
    title: "Code for crown",
    desc: "Online Programming Contest",
  },
  {
    id: 4,
    image: tenet,
    imageBg: "/images/slide4b.webp",
    title: "Tenet",
    desc: "A challenge where the participants have to identify and resolve bugs",
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
  {
    id: 7,
    image: tenet,
    imageBg: "/images/slide6b.webp",
    title: "Tenet",
    desc: "A challenge where the participants have to identify and resolve bugs",
  },
  {
    id: 8,
    image: tenet,
    imageBg: "/images/slide6b.webp",
    title: "Tenet",
    desc: "A challenge where the participants have to identify and resolve bugs",
  },
  {
    id: 9,
    image: tenet,
    imageBg: "/images/slide6b.webp",
    title: "Tenet",
    desc: "A challenge where the participants have to identify and resolve bugs",
  },
];

class EventList extends Component {
  render() {
    return (
      <div className="app">
        <Slider>
          {movies.map((movie) => (
            <Slider.Item movie={movie} key={movie.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }
}

export default EventList;
