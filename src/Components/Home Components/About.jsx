import Aboutbg from "../../assets/Home/About.png";
import Mojo from "../../assets/Home/mojo.png";

export default function About() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover md:-mt-[52px] -mt-[70px]   bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Aboutbg})` }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <div className="flex items-end gap-4 sm:gap-6">
          <h1 className="bebas-font text-[36px] sm:text-[60px] md:text-[72px] tracking-widest">
            ABOUT
          </h1>
          <h1 className="bebas-font text-[90px] sm:text-[160px] md:text-[220px] leading-none font-bold">
            MOJO
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <div className="w-full h-[220px] sm:h-[280px] md:h-[310px] bg-[#D9D9D9] rounded-[24px] sm:rounded-[32px]" />
            <p className="mt-6 text-[16px] sm:text-[18px] md:text-[22px] leading-relaxed urbanist font-semibold text-black max-w-3xl">
              Mojo, a multitalented individual, brings an electrifying energy to
              the world of tattoos. With a remarkable background in bike stunt
              championships and a talent for DJing, Mojo infuses each tattoo
              session with a thrilling blend of artistry and adrenaline. With
              over 10 Lakh+ tattoos completed, Mojo’s expertise spans a wide
              range of styles and designs.
            </p>
          </div>
          <div className="w-full max-w-sm mx-auto lg:mx-0">
            <img
              src={Mojo}
              alt="Mojo"
              className="w-full rounded-[20px] object-cover"
            />

            <h2 className="mt-4 urbanist font-bold text-[18px] sm:text-[20px] text-black">
              Founder of Mojo Tattoo Studio & Academy
            </h2>

            <p className="mt-2 urbanist text-[14px] sm:text-[16px] font-medium text-gray-700">
              We blend art and storytelling to design tattoos that are personal,
              timeless, and unique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
