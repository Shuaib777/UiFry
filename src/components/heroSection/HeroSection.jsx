// HeroSection.js
import React from "react";
import arrowIcon from "../../images/arrow.svg";
import playButtonIcon from "../../images/playButton.svg";
import zigZagImage from "../../images/zigZag.png";
import phonesLean from "../../images/phonesLean.png";
import GradientBg from "../gradientBg/GradientBg";

const HeroSection = () => {
  return (
    <div className="h-screen sm:h-full sm:mb-16 flex py-11 sm:flex-col  sm:gap-4">
      <div className="w-1/2 sm:w-full flex flex-col gap-[24px] sm:gap-3">
        <h1 className="heading text-4xl sm:text-2xl font-bold relative top">
          Make The Best <br />
          Financial Decisions
          {/* <GradientBg top={"-160"} /> */}
        </h1>
        <p className="text-lg font-medium sm:text-sm text-opacity-60">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="buttons flex gap-[20px]">
          <a href="#" className="btn dark flex items-center">
            <span>Get Started</span>
            <div className="icon">
              <img src={arrowIcon} alt="" />
            </div>
          </a>
          <a href="#" className="btn light flex items-center">
            <div className="icon">
              <img src={playButtonIcon} alt="" />
            </div>
            <span>Watch Video</span>
          </a>
        </div>
        <div className="sm:hidden">
          <img src={zigZagImage} alt="" />
        </div>
      </div>
      <div className="w-1/2 self-center">
        <img src={phonesLean} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
