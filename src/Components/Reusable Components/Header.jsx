import { useState } from "react";
import logo from "../../assets/Logo/Logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-[9999] bg-white shadow-lg h-[70px]">
      <div className="h-full flex items-center justify-between px-4 sm:px-8 lg:px-10">
        <Link className="flex items-center gap-2" to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-auto h-16 object-contain"
          />
        </Link>
        <button className="md:hidden" onClick={() => setMenu(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="gap-8 text-3xl bebas-font hidden md:flex">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/course">COURSE</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
      {menu && (
        <div
          onClick={() => setMenu(false)}
          className="fixed inset-0 bg-black/30 z-10 md:hidden"
        />
      )}
      <section
        className={`flex flex-col items-center gap-10 text-3xl bebas-font bg-white shadow-md fixed h-screen w-[80%] sm:w-[60%] md:w-[40%] z-20 top-0 transition-all duration-300 ${
          menu ? "right-0" : "-right-full"
        }`}
      >
        <button onClick={() => setMenu(false)} className="self-end p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <Link onClick={() => setMenu(false)} to="/">HOME</Link>
        <Link onClick={() => setMenu(false)} to="/about">ABOUT US</Link>
        <Link onClick={() => setMenu(false)} to="/course">COURSE</Link>
        <Link onClick={() => setMenu(false)} to="/gallery">GALLERY</Link>
        <Link onClick={() => setMenu(false)} to="/contact">CONTACT</Link>
      </section>
    </header>
  );
}
