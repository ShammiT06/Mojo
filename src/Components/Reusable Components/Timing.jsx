import clock from "../../assets/Resuable/clock.png";
import { Clock } from "lucide-react";

export default function Timing() {
  return (
    <section className="w-full py-10 md:py-16">
      <h1 className="bebas-font text-[40px] sm:text-[56px] md:text-[100px] lg:text-[140px] xl:text-[160px] text-center mb-10">
        Shop Timing
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-600">
            <Clock size={26} />
            <p className="urbanist text-lg md:text-xl font-medium">
              Opening Time
            </p>
          </div>

          <h1 className="font-bold urbanist leading-none flex items-end justify-center lg:justify-start">
            <span className="text-[64px] sm:text-[80px] md:text-[100px] lg:text-[120px]">10</span>
            <span className="text-[40px] sm:text-[48px] md:text-[56px] mx-1 mb-2">:</span>
            <span className="text-[56px] sm:text-[72px] md:text-[90px] lg:text-[110px]">30</span>
            <span className="text-[20px] sm:text-[24px] md:text-[28px] ml-2 mb-2">
              am
            </span>
          </h1>
        </div>
        <div className="flex justify-center">
          <img
            src={clock}
            alt="clock"
            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px]"
          />
        </div>
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-600">
            <Clock size={26} />
            <p className="urbanist text-lg md:text-xl font-medium">
              Closing Time
            </p>
          </div>

          <h1 className="font-bold urbanist leading-none flex items-end justify-center lg:justify-start">
            <span className="text-[64px] sm:text-[80px] md:text-[100px] lg:text-[120px]">09</span>
            <span className="text-[40px] sm:text-[48px] md:text-[56px] mx-1 mb-2">:</span>
            <span className="text-[56px] sm:text-[72px] md:text-[90px] lg:text-[110px]">30</span>
            <span className="text-[20px] sm:text-[24px] md:text-[28px] ml-2 mb-2">
              pm
            </span>
          </h1>
        </div>

      </div>
    </section>
  );
}
