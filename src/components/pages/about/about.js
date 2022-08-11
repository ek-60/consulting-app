import React from "react";

function About() {
  const title = "Who I`m";
  const info =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  return (
    <div
      id="about"
      className="w-full h-screen flex justify-center items-center "
    >
      <div className="w-[980px] mx-auto p-4">
        <h1 className="flex justify-center items-center h-24 sm:h-48 text-5xl sm:text-6xl font-bold pt-2 pb-2 text-[#BD1E51]">
          {title}
        </h1>
        <div className="flex justify-center">
          <p className="flex items-center text-xl sm:text-3xl text-white">
            {info}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
