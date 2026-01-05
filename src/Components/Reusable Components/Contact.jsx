import { Link } from "react-router-dom";
import ContactBg from "../../assets/Home/Contact.png";
import About from "../../assets/Home/contact1.png";

export default function Contact() {
  return (
    <section
      className="relative w-full min-h-[500px] md:min-h-[650px] lg:h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${ContactBg})` }}
    >
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-4 sm:px-8 md:px-12 lg:px-20 py-10 gap-10">
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="bebas-font text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] text-black leading-tight">
            Mojo Tattoo Design
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 mt-2">
            <h1 className="bebas-font text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] text-black">
              Studio
            </h1>

            <p className="urbanist font-semibold text-base sm:text-lg md:text-xl text-black">
              We make your body modern,
              <br className="hidden sm:block" />
              comfortable and stylish.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-6 px-8 py-3 bg-black text-white rounded-lg urbanist text-base sm:text-lg hover:bg-gray-800 transition"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <img
            src={About}
            alt="About Mojo Tattoo"
            className="w-[220px] sm:w-[280px] md:w-[350px] lg:w-[420px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}
