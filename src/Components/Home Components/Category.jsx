import { useRef } from "react";
import BgImage from "../../assets/Home/Category.png";
import image2 from "../../assets/Home/Image2.png";
import image3 from "../../assets/Home/Image3.png";
import image4 from "../../assets/Home/Image4.png";

export default function Category() {
  const sliderRef = useRef(null);

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const imageData = [
    { id: 1, image: image2, name: "PORTRAIT" },
    { id: 2, image: image2, name: "REALISM" },
    { id: 3, image: image3, name: "ANIMAL" },
    { id: 4, image: image4, name: "DOG PET" },
    { id: 5, image: image4, name: "GEOMETRIC" },
    { id: 6, image: image4, name: "HYPER REALISTIC" },
    { id: 7, image: image4, name: "SMALL & MEDIUM" },
    { id: 8, image: image4, name: "COLOUR" },
    { id: 9, image: image4, name: "MINIMALIST" },
    { id: 10, image: image4, name: "RELIGIOUS" },
    { id: 11, image: image4, name: "COVERUPS" },
    { id: 12, image: image4, name: "HEALED RESULTS" },
    { id: 13, image: image4, name: "SMALL TATTOO" },
  ];
  const mouseDown = (e) => {
    isDown = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const mouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    isDown = false;
  };
  const touchStart = (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const touchMove = (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      className="w-full min-h-[500px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="px-6 md:px-10">
        <h1 className="bebas-font text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px]">
          CATEGORY
        </h1>
      </div>
      <div className="w-full px-6 md:px-10">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={mouseDown}
          onMouseMove={mouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={touchStart}
          onTouchMove={touchMove}
        >
          {imageData.map((item) => (
            <div
              key={item.id}
              className="mb-16 flex-shrink-0 w-[160px] sm:w-[200px] md:w-[220px] lg:w-[240px] flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto object-contain pointer-events-none"
              />
              <p className="mt-2 text-center text-lg font-medium urbanist">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
