import { Carousel } from "3d-react-carousal";
import React from "react";
import background from "./images/bg1.jpg";
function Example() {
  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
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
      <Carousel
        style={{ paddingTop: "400px" }}
        slides={slides}
        interval={2000}
      />
    </div>
  );
}
export default Example;
