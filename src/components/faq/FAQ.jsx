import React from "react";

const FAQ = () => {
  const cards1 = [1, 0, 1, 0, 1, 0];
  const cards2 = [1, 0, 0, 1, 1, 0];
  let cards = [];

  if (window.innerWidth < 768) cards = [...cards1];
  else cards = [...cards2];

  const Card = ({ bgPink }) => {
    return (
      <div
        className={`flex flex-col gap-1 bg-pink p-8 rounded-lg sm:rounded-md ${
          bgPink ? "bg-pink text-white" : "bg-white"
        }`}
      >
        <h3 className=" font-semibold sm:text-lg text-3xl">
          The Best Financial accounting App Ever!
        </h3>
        <p className=" font-medium text-lg sm:text-sm leading-7">
          “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris.
        </p>
      </div>
    );
  };
  return (
    <section className="flex flex-col gap-6">
      <div className="sm:text-center">
        <div className="text-lg sm:text-sm font-medium text-pink ">FAQ</div>
        <h2 className="text-5xl sm:text-3xl font-bold ">
          Frequently Asked <br /> Questions
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
        {cards.map((cardValue, index) => (
          <Card key={index} bgPink={cardValue} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
