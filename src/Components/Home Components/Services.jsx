import serviceBg from "../../assets/Home/Services.png";
import Gradlogo from "../../assets/Home/Graduate.png";
import Academy from "../../assets/Home/Academy.png";
import Tatto from "../../assets/Home/Tatto.png";
import Ear from "../../assets/Home/Ear.png";
import Hand from "../../assets/Home/Hand.png";
import Notepad from "../../assets/Home/Notepad.png";

const services = [
  { img: Gradlogo, title: "Tattoo Academy" },
  { img: Tatto, title: "Tattooing" },
  { img: Hand, title: "Tattoo cover up" },
  { img: Academy, title: "Tattoo Seminar" },
  { img: Ear, title: "Piercing" },
  { img: Notepad, title: "Custom tee design" },
];

export default function Services() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <div
        className="relative z-10 flex flex-col items-center 
                   px-4 sm:px-8 xl:px-20 2xl:px-32 
                   pt-20 xl:pt-28 2xl:pt-36"
      >
        <h1 className="bebas-font font-medium text-center
                       text-5xl sm:text-6xl md:text-7xl 
                       xl:text-8xl 2xl:text-9xl">
          Our Services
        </h1>
        <p className="urbanist text-center font-medium mt-6
                      text-base sm:text-xl md:text-2xl
                      xl:text-3xl 2xl:text-4xl
                      max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1100px]">
          Our team is a group of skilled artists dedicated to creating
          meaningful, high-quality tattoos.
        </p>
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            mt-20 sm:mt-28 md:mt-40 xl:mt-52 2xl:mt-60
            gap-y-16 xl:gap-y-24 2xl:gap-y-28
            gap-x-8 sm:gap-x-16 md:gap-x-40
            xl:gap-x-56 2xl:gap-x-72
            mb-14 xl:mb-24
          "
        >
          {services.map((service, index) => {
            const isCenterColumn = index === 1 || index === 4;

            return (
              <div
                key={index}
                className={`
                  w-full max-w-[290px] xl:max-w-[360px] 2xl:max-w-[420px]
                  mx-auto
                  flex flex-col items-center text-center
                  transition-transform duration-300
                  ${isCenterColumn ? "md:-translate-y-20 xl:-translate-y-28 2xl:-translate-y-36" : ""}
                `}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="
                    object-contain mb-4 sm:mb-6
                    w-[90px] h-[90px]
                    sm:w-[110px] sm:h-[110px]
                    md:w-[120px] md:h-[120px]
                    xl:w-[150px] xl:h-[150px]
                    2xl:w-[170px] 2xl:h-[170px]
                  "
                />

                <h3
                  className="
    font-semibold urbanist mb-2
    text-md sm:text-2xl md:text-2xl
    xl:text-4xl 2xl:text-5xl
    md:whitespace-nowrap
  "
                >
                  {service.title}
                </h3>


                <p className="
                  text-gray-600
                  text-sm sm:text-base
                  xl:text-lg 2xl:text-xl
                  max-w-[260px] xl:max-w-[320px] 2xl:max-w-[360px]
                ">
                  Our team is a group of skilled artists dedicated to creating
                  meaningful.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
