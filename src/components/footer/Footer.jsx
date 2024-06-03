import React from "react";
import logo from "../../images/logo.svg";
import mail from "../../images/Frame.png";
import call from "../../images/call.png";

const Footer = () => {
  return (
    <footer className="capitalize sm:text-sm sm:text-center ">
      {/* top */}

      <div className=" flex mb-10 sm:flex sm:flex-col sm:gap-6 sm:items-center">
        <div className=" w-2/3 flex gap-6 sm:w-full sm:flex-col sm:items-center sm:gap-6">
          <div className="flex flex-col gap-6">
            <div className="w-[100px] h-[24px] sm:w-full sm:flex sm:items-center sm:justify-center -m-1 ">
              <img src={logo} className="sm:size-16" alt="" />
            </div>
            <ul className="list-none m-0 flex flex-col gap-3 sm:justify-center">
              <li>
                <a className="font-medium flex gap-2 sm:items-center" href="#">
                  <img src={mail} className="size-4 sm:size-2" alt="" />
                  <span>help@frybix.com</span>
                </a>
              </li>
              <li>
                <a className="font-medium flex gap-2 sm:items-center" href="#">
                  <img src={call} className="size-4 sm:size-2" alt="" />
                  <span>+1 234 456 678 89</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 sm:items-center">
            <h5 className=" font-medium text-3xl">About</h5>
            <ul className="list-none m-0 font-medium flex flex-col gap-4">
              <li>
                <a className="" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="" href="#">
                  Booking
                </a>
              </li>
              <li>
                <a className="" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 sm:items-center">
            <h5 className=" font-medium text-3xl">Legal</h5>
            <ul className="list-none m-0 font-medium flex flex-col gap-4">
              <li>
                <a className="" href="#">
                  Terms of policy
                </a>
              </li>
              <li>
                <a className="" href="#">
                  privacy policy
                </a>
              </li>
              <li>
                <a className="" href="#">
                  cookie policy
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 sm:items-center">
            <h5 className=" font-medium text-3xl">Product</h5>
            <ul className="list-none m-0 font-medium flex flex-col gap-4">
              <li>
                <a className="" href="#">
                  take tour
                </a>
              </li>
              <li>
                <a className="" href="#">
                  live chat
                </a>
              </li>
              <li>
                <a className="" href="#">
                  reviews
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:items-center">
          <h5 className=" font-medium text-3xl">Newsletter</h5>
          <span className="font-medium">Stay up to date</span>
          <div className="mt-2">
            <form className="flex">
              <input type="email" className="w-1/2" placeholder="Your Email" />
              <button className="btn dark" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className=" bg-gradient-to-r from-bg via-black to-bg h-[1px]"></div>

      {/* bottom */}
      <div className=" text-center mt-4 mb-10 font-medium">
        Copyright 2022 uifry.com all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
