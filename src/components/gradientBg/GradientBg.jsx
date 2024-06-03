import React from "react";
import gradientBg from "../../images/gradientBg.png";

const GradientBg = ({ bottom, right, top, left }) => {
  return (
    <img
      src={gradientBg}
      className={`absolute -z-10 top-[${top}px] bottom-[${bottom}px]  right-[${right}px] left-[${left}px]`}
      alt=""
    />
  );
};

export default GradientBg;
