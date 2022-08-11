import React from "react";

function ContactInfo() {
  const title = "Let`s talk!";
  const info =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  return (
    <div>
      <h1 className="flex justify-center items-center h-24 sm:h-48 text-5xl sm:text-6xl font-bold pt-2 pb-2 bg-transparent text-[#BD1E51]">
        {title}
      </h1>
      <p className="flex items-center text-xl sm:text-3xl text-white pb-8">
        {info}
      </p>
    </div>
  );
}

export default ContactInfo;
