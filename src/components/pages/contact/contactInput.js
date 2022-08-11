import React from "react";

function ContactInput(props) {
  const { handleChange, label, name, type, value } = props;
  return (
    <div>
      <div className="w-full h-28 bg-white">
        <p htmlFor={name} className="pl-2 pt-8 text-2xl font-bold uppercase">
          {label}
        </p>
        <input
          type={type}
          onChange={handleChange}
          value={value}
          name={name}
          required
          className="w-full h-12 pl-2 border-b-4 border-white outline-none text-xl text-white"
        ></input>
      </div>
      {/* <div className="w-full h-28">
        <p className="pl-2 pt-8 text-2xl font-bold uppercase">Email</p>
        <input className="w-full h-12 pl-2 border-b-4 border-white outline-none text-xl text-white"></input>
      </div>
      <div className="w-full h-28">
        <p className="pl-2 pt-8 text-2xl font-bold uppercase">Phone</p>
        <input className="w-full h-12 pl-2 border-b-4 border-white outline-none text-xl text-white"></input>
      </div> */}
    </div>
  );
}

export default ContactInput;
