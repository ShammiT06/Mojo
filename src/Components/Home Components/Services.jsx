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
  { img: Notepad, title: "Custom tattoo design" },
];

export default function Services() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 pt-20">

        {/* Heading */}
        <h1 className="bebas-font text-5xl sm:text-6xl md:text-7xl font-medium text-center">
          Our Services
        </h1>

        <p className="urbanist text-center text-base sm:text-xl md:text-2xl font-medium max-w-[700px] mt-6">
          Our team is a group of skilled artists dedicated to creating
          meaningful, high-quality tattoos.
        </p>

        {/* Services Grid */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            gap-x-8
            sm:gap-x-16
            md:gap-x-40
            gap-y-16
            mt-20
            sm:mt-28
            md:mt-40
          "
        >
          {services.map((service, index) => {
            const isCenterColumn = index === 1 || index === 4;

            return (
              <div
                key={index}
                className={`
                  w-full max-w-[290px]
                  mx-auto
                  flex flex-col items-center text-center
                  transition-transform duration-300
                  ${isCenterColumn ? "md:-translate-y-20" : ""}
                `}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[120px] md:h-[120px] object-contain mb-4 sm:mb-6"
                />

                <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold urbanist mb-2">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 max-w-[260px]">
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
