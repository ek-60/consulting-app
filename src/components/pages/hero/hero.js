import React from "react";
import img from "../eemeli.jpg";
import SocialWidgets from "./socialWidgets";

function Hero() {
  const title = "Hello I`m EK";
  return (
    <div
      id="hero"
      className="w-full h-[80vh] sm:h-[85vh] flex justify-center items-center bg-white "
    >
      <div className="w-[980px] mx-auto grid grid-cols-1 sm:grid-cols-2 bg-white">
        <div className="grid justify-center items-center sm:items-end bg-white">
          <div className="justify-center items-center">
            <p className="h-24 lg:h-36 text-4xl sm:text-5xl lg:text-7xl font-bold flex justify-center items-center pt-2 pb-2 bg-white text-[#490B3D] ">
              {title}
            </p>
            <div className="justify-center items-center bg-white md:gap-5 hidden sm:flex">
              <SocialWidgets />
            </div>
          </div>
        </div>
        <img className="w-[780px] p-2 bg-white" src={img}></img>
      </div>
    </div>
  );
}

export default Hero;
