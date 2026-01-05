import { useState } from "react";
import logo from "../../assets/Logo/logo.png";
import { Link } from "react-router-dom";

export default function Header() {

  const [menu, setMenu] = useState(false)



  return (
    <header className="w-full fixed top-0 left-0 z-[9999] bg-white shadow-lg h-[70px]">
      <div className="h-full flex items-center justify-between px-4 sm:px-8 lg:px-10">
        <Link className="flex items-center gap-2" to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-auto min-h-full h-28 object-fill"
          />
        </Link>
        <button className="md:hidden" onClick={() => { setMenu(!menu) }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

        </button>


        <div className="gap-8 text-3xl bebas-font hidden md:flex">
          <Link to="/" className="hover:underline">HOME</Link>
          <Link to="/about" className="hover:underline">ABOUT US</Link>
          <Link className="hover:underline">COURSE</Link>
          <Link className="hover:underline">Gallery</Link>
          <Link className="hover:underline">CONTACT</Link>
        </div>
      </div>
      <section className={`flex flex-col items-center gap-14 text-3xl bebas-font bg-white shadow-md fixed h-[150vh] w-[40%] z-20 top-0 transition-all duration-300 ${menu ? "right-0" : "-right-[50%]"}`}
      >

        <button onClick={() => { setMenu(false) }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 mt-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>

        </button>
        <Link to="/" className="hover:underline">HOME</Link>
        <Link to="/about" className="hover:underline">ABOUT US</Link>
        <Link className="hover:underline">COURSE</Link>
        <Link className="hover:underline">GALLERY</Link>
        <Link className="hover:underline">CONTACT</Link>
      </section>
    </header>
  );
}