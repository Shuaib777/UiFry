import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className=" max-w-[1090px] my-0 mx-auto p-0 relative  sm:p-5">
      {" "}
      {children}
    </div>
  );
};

export default ContentWrapper;
