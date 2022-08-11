import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 bg-white">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto bg-white text-[#490B3D] ">
        <Link to="hero" spy={true} smooth={true}>
          <h1 className="w-full text-2xl sm:text-3xl font-bold bg-white cursor-pointer">
            Kyrola Consulting
          </h1>
        </Link>

        <ul className="hidden md:flex bg-white">
          <Link
            className="p-4 text-xl font-bold uppercase hover:border-b-2 hover:border-b-black bg-white"
            to="about"
            spy={true}
            smooth={true}
          >
            <li className="p-4 text-xl font-bold uppercase bg-white cursor-pointer">
              About
            </li>
          </Link>
          <Link
            className="p-4 text-xl font-bold uppercase hover:border-b-2 hover:border-b-black bg-white"
            to="contact"
            spy={true}
            smooth={true}
          >
            <li className="p-4 text-xl font-bold uppercase bg-white cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden bg-white">
          {!nav ? (
            <AiOutlineClose size={40} style={{ background: "transparent" }} />
          ) : (
            <HiOutlineMenuAlt3 size={40} style={{ background: "white" }} />
          )}
        </div>

        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[80%] h-full border-r-2 border-r-[#490B3D] ease-in-out duration-700 md:hidden bg-white"
              : "fixed left-[-100%] ease-out duration-700 md:hidden bg-white"
          }
        >
          <ul className="p-4 bg-white">
            <Link to="about" spy={true} smooth={true}>
              <li className="p-4 text-xl font-bold uppercase border-b-2 border-[#490B3D] bg-white">
                About
              </li>
            </Link>
            <Link to="contact" spy={true} smooth={true}>
              <li className="p-4 text-xl font-bold uppercase bg-white">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
