import React from "react";
import Footerimg from "../../assets/Home/footer.png";

const Footer = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{ backgroundImage: `url(${Footerimg})` }}
    >
      <div className="w-full px-6 sm:px-10 lg:px-20 pt-10 text-white">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-semibold">Mojo</div>

            <div className="text-sm text-gray-300 flex flex-wrap gap-2">
              <span>Home</span>
              <span>/</span>
              <span>About Us</span>
              <span>/</span>
              <span>Gallery</span>
              <span>/</span>
              <span>Contacts</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
            
            <div className="space-y-2">
              <p className="text-gray-400">Contact Us</p>
              <p className="text-lg font-medium">+1 891 989–11–91</p>
            </div>

            <div className="space-y-2">
              <p className="text-gray-400">Location</p>
              <p>
                2972 Westheimer Rd.<br />
                Santa Ana, Illinois 85486
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Email</p>
                <p>hello@logoipsum.com</p>
              </div>

              <div>
                <p className="text-gray-400">Mo – Fr</p>
                <p>9am – 6pm</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="w-full flex justify-center px-4 sm:px-0">
        <div className="w-full sm:w-[90%] lg:w-[85%] p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-white text-center">
          <p className="text-sm tracking-wide uppercase text-gray-300">
            Explore Our Success
          </p>
          <p className="text-lg sm:text-xl font-semibold mt-1">
            Our Success
          </p>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs py-6">
        © 2026 — Copyright
      </div>
    </section>
  );
};

export default Footer;
