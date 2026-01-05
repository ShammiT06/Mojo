import React from "react";
import Review from "/src/assets/Home/Review.png";
import RectangleImage from "/src/assets/Home/Person.png";
import Ellipse from "/src/assets/Home/Ellipse 5.png";

const FeedBack = () => {
  return (
    <section
      className="w-full min-h-[600px] bg-cover bg-center bg-no-repeat flex flex-col items-center py-12 md:py-20"
      style={{ backgroundImage: `url(${Review})` }}
    >
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 text-center">
        What Our Client Says
      </h1>
      <div className="relative w-full flex justify-center px-4">

        <div
          className="w-full max-w-[900px] h-[260px] sm:h-[300px] md:h-[400px] rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${RectangleImage})` }}
        />
        <div
          className="
            relative md:absolute
            md:-bottom-14 md:left-1/2 md:-translate-x-1/2
            w-full max-w-[700px]
            flex flex-col md:flex-row
            items-center md:items-end
            gap-6
            mt-6 md:mt-0
            px-6
          "
        >
          <div className="flex flex-col items-center shrink-0">
            <div
              className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full bg-cover bg-center border-2 border-white"
              style={{ backgroundImage: `url(${Ellipse})` }}
            />
            <p className="text-white mt-3 font-medium text-sm sm:text-base">
              Client Name
            </p>
          </div>
          <p className="text-white text-sm sm:text-base leading-relaxed text-center md:text-left max-w-[520px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
