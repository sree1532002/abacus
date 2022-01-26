import React from "react";
import cx from "classnames";
import SliderContext from "./Context";
import "./Item.scss";
import { ResponsiveFontSize } from "react-responsive-font-size";

const Item = ({ movie }) => (
  <SliderContext.Consumer>
    {({ onSelectSlide, currentSlide, elementRef }) => {
      const isActive = currentSlide && currentSlide.id === movie.id;

      return (
        <div
          ref={elementRef}
          className={cx("item", {
            "item--open": isActive,
          })}
        >
          <img src={movie.image} alt="" />

          <div className="add">
            <ResponsiveFontSize
              ratio={1}
              optionsObject={{
                setFontSize: true,
                globalVariableName: "--my-variable",
                lockFontSize: false,
              }}
            >
              {movie.title}
            </ResponsiveFontSize>
          </div>

          {/* {isActive && (
            <ShowDetailsButton
              onClick={() => onSelectSlide(movie)}
              movie={movie}
            />
          )}  */}
        </div>
      );
    }}
  </SliderContext.Consumer>
);

export default Item;
