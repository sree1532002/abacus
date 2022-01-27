import React from "react";
import cx from "classnames";
import SliderContext from "./Context";
import "./Item.scss";
import { ResponsiveFontSize } from "react-responsive-font-size";

const Item = ({ event }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === event.id;

      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--open": isActive,
          })}
        >
          <img src={event.image} alt="" />

          <div className="add">
            <ResponsiveFontSize
              ratio={1}
              optionsObject={{
                setFontSize: true,
                globalVariableName: "--my-variable",
                lockFontSize: false,
              }}
            >
              {event.title}
            </ResponsiveFontSize>
          </div>
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
