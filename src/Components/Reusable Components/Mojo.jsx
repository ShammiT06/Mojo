import special2 from "../../assets/Home/special2.png";
import special1 from "../../assets/Home/special1.png";

export default function Mojo() {
  return (
    <div className="bg-[#F0F0F0] w-full min-h-screen overflow-hidden">

      {/* TITLE */}
      <div className="px-4 sm:px-10 pt-10">
        <h1 className="bebas-font text-[36px] sm:text-6xl md:text-8xl">
          SPECIAL ABOUT US
        </h1>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="block md:hidden px-4 pt-14 space-y-20">

        {/* -------- 01 -------- */}
        <div>
          <h1 className="bebas-font text-[96px] text-[#DDDDDD] leading-none">
            01
          </h1>

          <img
            src={special2}
            alt="Tattoo work"
            className="w-full h-[220px] object-cover rounded-2xl mt-4"
          />

          <p className="urbanist text-[15px] font-medium leading-relaxed text-[#333] mt-4">
            We provide a safe, respectful, and judgment-free environment for all
            female clients. Our studio follows strict professional and ethical
            standards to ensure every client feels confident and protected
            throughout their tattoo journey.
          </p>
        </div>

        {/* -------- 02 -------- */}
        <div>
          <h1 className="bebas-font text-[96px] text-[#DDDDDD] leading-none text-left">
            02
          </h1>

          <img
            src={special1}
            alt="Tattoo work"
            className="w-full h-[240px] object-cover rounded-2xl mt-4"
          />

          <p className="urbanist text-[15px] font-medium leading-relaxed text-[#333] mt-4">
            We proudly welcome clients from all around the world. Whether you're
            traveling, relocating, or visiting short-term, we make the tattoo
            process easy, transparent, and stress-free for international clients.
          </p>
        </div>
      </div>

      {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}

      {/* SECTION 01 */}
      <div className="hidden md:flex relative items-center justify-between px-20 py-24">
        <h1 className="absolute left-12 top-1/2 -translate-y-1/2 
          text-[400px] bebas-font text-[#DDDDDD] leading-none select-none">
          01
        </h1>

        <div className="relative z-10 w-1/2 pl-10">
          <p className="urbanist text-[22px] font-medium leading-relaxed text-[#333] max-w-[520px]">
            We provide a safe, respectful, and judgment-free environment for all
            female clients. Our studio follows strict professional and ethical
            standards to ensure every client feels confident and protected
            throughout their tattoo journey.
          </p>
        </div>

        <div className="relative z-10 w-1/2 flex justify-end">
          <img
            src={special2}
            alt="Tattoo work"
            className="w-[420px] h-[300px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* SECTION 02 */}
      <div className="hidden md:flex relative items-center px-20 pb-32">
        <h1 className="absolute right-10 top-1/2 -translate-y-1/2 
          text-[400px] bebas-font text-[#DDDDDD] leading-none select-none">
          02
        </h1>

        <div className="relative z-10 w-1/2 flex justify-start">
          <img
            src={special1}
            alt="Tattoo work"
            className="w-[440px] h-[320px] object-cover rounded-2xl"
          />
        </div>

        <div className="relative z-10 w-1/2 flex justify-end">
          <p className="urbanist text-[22px] font-medium leading-relaxed text-[#333] max-w-[520px] text-right">
            We proudly welcome clients from all around the world. Whether you're
            traveling, relocating, or visiting short-term, we make the tattoo
            process easy, transparent, and stress-free for international clients.
          </p>
        </div>
      </div>

    </div>
  );
}
