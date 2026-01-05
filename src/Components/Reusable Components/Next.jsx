import { Link } from "react-router-dom";
import BgImg from "../../assets/Resuable/CTA-6.png";

export default function Next() {
  return (
    <section
      className="w-full h-[560px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="px-6 md:px-20 w-full">
        <h1 className="bebas-font text-[48px] md:text-[80px] text-white leading-tight">
          READY FOR YOUR NEXT <br /> TATTO ?
        </h1>

        <p className="urbanist text-white font-medium text-lg md:text-2xl mt-4 max-w-[720px]">
          Your idea deserves expert hands and original design.
          <br />
          Book a consultation today and let’s create something unforgettable.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center mt-8 px-8 py-4 bg-[#9A9A9A] urbanist text-white rounded-md hover:bg-[#7f7f7f] transition"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
