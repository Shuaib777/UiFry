import React from "react";
import logo from "../../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center h-16 mt-[40px] sm:justify-between sm:mt-5 ">
      <div className="mr-[40px] sm:mr-0">
        <img src={logo} alt="Logo" className="w-28 h-8 sm:w-20 sm:h-6" />
      </div>
      <ul className="flex gap-6 mr-[375px] sm:hidden">
        <li className=" font-medium [text-shadow:_0px_3px_3px_rgb(0_0_0_/_50%)] cursor-pointer active">
          Home
        </li>
        <li className=" font-medium  [text-shadow:_0px_3px_3px_rgb(0_0_0_/_50%)] cursor-pointer">
          About Us
        </li>
        <li className="font-medium [text-shadow:_0px_3px_3px_rgb(0_0_0_/_50%)] cursor-pointer">
          Pricing
        </li>
        <li className="font-medium [text-shadow:_0px_3px_3px_rgb(0_0_0_/_50%)] cursor-pointer">
          Features
        </li>
      </ul>
      <a href="#" className="btn dark">
        Download
      </a>
    </nav>
  );
};

export default Navbar;
