import Aboutbg from "../../assets/Home/About.png";
import Mojo from "../../assets/Home/mojo.png";

export default function About() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat 
                 -mt-[75px] md:-mt-[60px]"
      style={{ backgroundImage: `url(${Aboutbg})` }}
    >
      <div className="relative z-10 max-w-[1600px] mx-auto 
                      px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 
                      py-16 sm:py-20 md:py-24">
        <div className="flex items-end gap-3 sm:gap-6">
          <h1 className="bebas-font tracking-widest
                         text-[32px] sm:text-[52px] md:text-[68px] lg:text-[80px]">
            ABOUT
          </h1>

          <h1 className="bebas-font font-bold leading-none
                         text-[80px] sm:text-[140px] md:text-[200px] 
                         lg:text-[240px] xl:text-[280px]">
            MOJO
          </h1>
        </div>
        <div className="mt-10 sm:mt-14 
                        grid grid-cols-1 lg:grid-cols-3 
                        gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-2">
            <div
              className="w-full 
                         h-[200px] sm:h-[260px] md:h-[300px] lg:h-[340px] 
                         bg-[#D9D9D9] 
                         rounded-[20px] sm:rounded-[28px] lg:rounded-[36px]"
            />

            <p
              className="mt-6 sm:mt-8 
                         urbanist font-semibold text-black
                         text-[15px] sm:text-[18px] md:text-[20px] 
                         lg:text-[22px] xl:text-[24px]
                         leading-relaxed max-w-4xl"
            >
              Mojo, a multitalented individual, brings an electrifying energy to
              the world of tattoos. With a remarkable background in bike stunt
              championships and a talent for DJing, Mojo infuses each tattoo
              session with a thrilling blend of artistry and adrenaline. With
              over 10 Lakh+ tattoos completed, Mojo’s expertise spans a wide
              range of styles and designs.
            </p>
          </div>
          <div className="w-full max-w-[320px] sm:max-w-[360px] 
                          md:max-w-[400px] mx-auto lg:mx-0">
            <img
              src={Mojo}
              alt="Mojo"
              className="w-full object-cover rounded-[18px] sm:rounded-[24px]"
            />

            <h2
              className="mt-4 urbanist font-bold text-black
                         text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]"
            >
              Founder of Mojo Tattoo Studio & Academy
            </h2>

            <p
              className="mt-2 urbanist font-medium text-gray-700
                         text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]"
            >
              We blend art and storytelling to design tattoos that are personal,
              timeless, and unique.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
