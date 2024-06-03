import React from "react";
import phone4Image from "../../images/phone4.png";
import star1Image from "../../images/star1.svg";

const Features = ({
  heading,
  subheading,
  intervalSection,
  image,
  intervals,
  singleRowSection = true,
  singleRowHeading,
  singleRowContent,
  iconImage,
  colReverse,
}) => {
  return (
    <section
      className={`flex h-[620px] sm:h-full sm:mb-16 sm:flex-col-reverse ${
        colReverse ? "flex-row-reverse sm:flex-col-reverse" : ""
      } items-center`}
    >
      {/* left part */}
      <div className="flex-1 h-full sm:flex sm:justify-center ">
        <div className="w-full h-full sm:w-1/2 sm:h-1/2">
          <img src={image} alt="Phone4" />
        </div>
      </div>

      {/* right part */}
      <div className="flex-1 flex flex-col gap-4">
        {heading && (
          <div>
            <div className="text-pink text-lg sm:text-sm sm:text-center">
              {heading}
            </div>
            <h2 className="text-4xl sm:text-3xl sm:text-center">
              {subheading}
            </h2>
          </div>
        )}
        {intervalSection && (
          <div className="flex flex-col gap-4">
            {intervals?.map((interval) => (
              <div className="flex flex-col gap-3">
                <div className="flex gap-1">
                  <div className="size-6 ">
                    <img src={interval.iconImage} alt="" />
                  </div>
                  <div className="text-lg sm:text-sm font-semibold">
                    {interval.heading}
                  </div>
                </div>
                <p className="text-lg sm:text-sm font-normal opacity-70">
                  {interval.content}
                </p>
              </div>
            ))}
          </div>
        )}
        {singleRowSection && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={iconImage} className="size-12 sm:size-9" alt="" />
              <h3 className="text-2xl sm:text-lg font-semibold">
                {singleRowHeading}
              </h3>
            </div>
            <p className="text-lg sm:text-sm font-medium opacity-70 capitalize">
              {singleRowContent}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
