import React from "react";
import phones from "../../images/phones.png";
import appleLogo from "../../images/appleLogo.svg";
import ellipses from "../../images/ellipses.svg";
import star1 from "../../images/Star6.png";
import star2 from "../../images/Star7.png";

const Download = () => {
  return (
    <section className="flex w-[1090px] h-[508px] sm:w-full bg-text text-bg mt-[155px] rounded-lg justify-start relative mb-[155px] ">
      <div className="flex flex-col gap-2 capitalize justify-center px-16 z-50">
        <h1 className=" text-5xl sm:text-3xl font-bold ">
          Ready to get Started?
        </h1>
        <p className="text-lg sm:text-sm  font-medium leading-7 opacity-80">
          Risus habitant leo egestas mauris diam eget morbi tempus <br />
          vulputate.
        </p>
        <a
          href="#"
          className="btn light capitalize w-[208px] sm:w-40 sm:self-center"
        >
          <span>Download App</span>
          <img src={appleLogo} alt="" />
        </a>
      </div>
      <div className="absolute bottom-0 left-0 sm:h-1/3">
        <img src={ellipses} alt="" />
      </div>
      <div className="absolute  right-0 top-4 z-40 sm:w-1/2 sm:h-1/2 sm:top-[350px] sm:opacity-10">
        <img src={phones} alt="" />
      </div>
      <div className="absolute right-0 top-0 rotate-180 sm:h-1/3">
        <img src={ellipses} alt="" />
      </div>
      <div className="absolute  left-96 bottom-20 rotate-180 sm:bottom-20 sm:left-10">
        <img src={star1} alt="" />
      </div>
      <div className="absolute right-96 top-20 rotate-180 sm:top-20 sm:right-10">
        <img src={star2} alt="" />
      </div>
    </section>
  );
};

export default Download;
