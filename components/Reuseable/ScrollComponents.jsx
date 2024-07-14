import React from "react";
import "./ScrollComponent.css";

const ScrollComponent = ({ elements, height }) => {
  return (
    <div className="flex overflow-x-auto  scrollbar-hide">
      {elements.map((element, index) => (
        <div
          key={index}
          className={
            " flex-shrink-0 md:w-auto justify-center min-h-[210px] items-center" +
            (index === 0 ? " ml-0" : " ml-2") +
            (height ? " h-[" + height + "px]" : "")
          }
        >
          {element}
        </div>
      ))}
    </div>
  );
};

export default ScrollComponent;
