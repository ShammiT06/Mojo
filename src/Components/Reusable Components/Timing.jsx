import React from "react";

export default function Timing() {
  return (
    <section className="w-full py-10 md:py-16">

      <h1 className="bebas-font text-[48px] sm:text-[64px] md:text-[120px] lg:text-[150px] text-center mb-8 md:mb-14">
        Shop Timing
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4">
        {Array(7)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="
                w-[70px] h-[70px]
                sm:w-[90px] sm:h-[90px]
                md:w-[120px] md:h-[260px]
                bg-[#D9D9D9]
                rounded-md
              "
            ></div>
          ))}
      </div>
    </section>
  );
}
