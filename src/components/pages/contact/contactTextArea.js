import React from "react";

function ContactTextArea(props) {
  const { handleChange, label, name, type, value } = props;

  return (
    <div>
      <div className="w-full  h-28">
        <p
          htmlFor={name}
          className="pl-2 pt-8 h-12 text-2xl font-bold uppercase"
        >
          {name}
        </p>
      </div>
      <div className="w-full h-56">
        <textarea
          onChange={handleChange}
          name={name}
          value={value}
          className="w-full h-full border-4 border-white text-xl text-white bg-transparent placeholder:text-white  resize-none"
          id="message"
          rows="4"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
    </div>
  );
}

export default ContactTextArea;
