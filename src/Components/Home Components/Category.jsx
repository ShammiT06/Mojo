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
      {/* Heading */}
      <div className="px-6 md:px-10">
        <h1 className="bebas-font text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px]">
          CATEGORY
        </h1>
      </div>

      {/* Slider */}
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
              className="
                flex-shrink-0
                w-[66.666%]        /* Mobile: 1.5 items */
                md:w-1/2          /* Tablet: 2 items */
                lg:w-1/5          /* Laptop: 5 items */
                xl:w-1/6          /* Big screen: 6 items */
                flex flex-col items-center
                mb-16
              "
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



// import { useRef, useEffect } from "react";
// import BgImage from "../../assets/Home/Category.png";
// import image2 from "../../assets/Home/Image2.png";
// import image3 from "../../assets/Home/Image3.png";
// import image4 from "../../assets/Home/Image4.png";

// export default function Category() {
//   const sliderRef = useRef(null);
//   const isDown = useRef(false);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);
//   const marqueeRef = useRef(null);
//   const isPaused = useRef(false);

//   const imageData = [
//     { id: 1, image: image2, name: "PORTRAIT" },
//     { id: 2, image: image2, name: "REALISM" },
//     { id: 3, image: image3, name: "ANIMAL" },
//     { id: 4, image: image4, name: "DOG PET" },
//     { id: 5, image: image4, name: "GEOMETRIC" },
//     { id: 6, image: image4, name: "HYPER REALISTIC" },
//     { id: 7, image: image4, name: "SMALL & MEDIUM" },
//     { id: 8, image: image4, name: "COLOUR" },
//     { id: 9, image: image4, name: "MINIMALIST" },
//     { id: 10, image: image4, name: "RELIGIOUS" },
//     { id: 11, image: image4, name: "COVERUPS" },
//     { id: 12, image: image4, name: "HEALED RESULTS" },
//     { id: 13, image: image4, name: "SMALL TATTOO" },
//   ];

//   /* ================= Marquee ================= */
//   useEffect(() => {
//     const slider = sliderRef.current;
//     let speed = 0.5;

//     const animate = () => {
//       if (!isPaused.current) {
//         slider.scrollLeft += speed;
//         if (slider.scrollLeft >= slider.scrollWidth / 2) {
//           slider.scrollLeft = 0;
//         }
//       }
//       marqueeRef.current = requestAnimationFrame(animate);
//     };

//     marqueeRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(marqueeRef.current);
//   }, []);

//   /* ================= Mouse ================= */
//   const mouseDown = (e) => {
//     isDown.current = true;
//     isPaused.current = true;
//     startX.current = e.pageX - sliderRef.current.offsetLeft;
//     scrollLeft.current = sliderRef.current.scrollLeft;
//   };

//   const mouseMove = (e) => {
//     if (!isDown.current) return;
//     e.preventDefault();
//     const x = e.pageX - sliderRef.current.offsetLeft;
//     const walk = (x - startX.current) * 1.5;
//     sliderRef.current.scrollLeft = scrollLeft.current - walk;
//   };

//   const stopDrag = () => {
//     isDown.current = false;
//     isPaused.current = false;
//   };

//   /* ================= Touch ================= */
//   const touchStart = (e) => {
//     isPaused.current = true;
//     startX.current = e.touches[0].pageX;
//     scrollLeft.current = sliderRef.current.scrollLeft;
//   };

//   const touchMove = (e) => {
//     const x = e.touches[0].pageX;
//     const walk = (x - startX.current) * 1.5;
//     sliderRef.current.scrollLeft = scrollLeft.current - walk;
//   };

//   const touchEnd = () => {
//     isPaused.current = false;
//   };

//   return (
//     <section
//       className="w-full min-h-[500px] bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${BgImage})` }}
//     >
//       {/* Title */}
//       <div className="px-6 md:px-10">
//         <h1 className="bebas-font text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px]">
//           CATEGORY
//         </h1>
//       </div>

//       {/* Slider */}
//       <div className="w-full px-6 md:px-10">
//         <div
//           ref={sliderRef}
//           className="flex gap-6 overflow-x-hidden select-none cursor-grab active:cursor-grabbing"
//           onMouseDown={mouseDown}
//           onMouseMove={mouseMove}
//           onMouseUp={stopDrag}
//           onMouseLeave={stopDrag}
//           onTouchStart={touchStart}
//           onTouchMove={touchMove}
//           onTouchEnd={touchEnd}
//         >
//           {[...imageData, ...imageData].map((item, index) => (
//             <div
//               key={`${item.id}-${index}`}
//               className="
//                 flex-shrink-0
//                 w-[66.666%]      /* Mobile: 1.5 */
//                 sm:w-1/3        /* Tablet: 3 */
//                 lg:w-1/5        /* Laptop: 5 */
//                 xl:w-1/6        /* Big screen: 6 */
//                 flex flex-col items-center
//                 mb-16
//               "
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-auto object-contain pointer-events-none"
//               />
//               <p className="mt-2 text-center text-lg font-medium urbanist">
//                 {item.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
