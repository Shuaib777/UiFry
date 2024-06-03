import React from "react";
import usersImage from "../../images/users.png";
import userCommentImage from "../../images/users2.png";

const Users = () => {
  return (
    <section className="flex flex-col gap-6 h-screen sm:h-full sm:mb-16">
      {/* heading */}
      <div>
        <div className=" text-lg sm:text-sm font-medium text-center">
          Testimonial
        </div>
        <h2 className=" text-5xl sm:text-3xl font-bold text-center">
          What Our Users <br /> Say About Us?
        </h2>
      </div>

      <div className="flex h-full sm:flex-col">
        {/* left */}
        <div className=" w-3/5 h-full flex sm:w-full sm:justify-center">
          <div className="sm:w-1/2 sm:h-1/2">
            <img src={usersImage} alt="" />
          </div>
        </div>
        {/* right */}
        <div className="w-2/5 sm:w-full h-full flex flex-col justify-center gap-6">
          <div className="text-3xl sm:text-lg font-semibold capitalize">
            the best financial accounting app ever!
          </div>
          <p className="text-lg sm:text-sm font-normal leading-7">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <div className="w-[192px] h-[40px] sm:h-5">
            <img src={userCommentImage} alt="" />
          </div>
          <div className=" font-semibold text-lg sm:text-sm">Nick Jonas</div>
        </div>
      </div>
    </section>
  );
};

export default Users;
