import React from "react";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import ContactInfo from "./contactInfo";
import ContactInput from "./contactInput";
import ContactTextArea from "./contactTextArea";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const id = process.env.REACT_APP_ID;
  const template = process.env.REACT_APP_TEMPLATE;
  const key = process.env.REACT_APP_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(id, template, values, key).then(
      (response) => {
        console.log("SUCCESS!", response);
        setValues({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("SUCCESS");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      id="contact"
      className="w-full h-[125vh] md:h-screen flex md:justify-center md:items-center "
    >
      <div className="w-[980px] mx-auto p-4 bg-transparent">
        <ContactInfo />
        <div className=" bg-transparent text-[#F1B814]">
          <form onSubmit={handleSubmit} className="w-full bg-transparent">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 bg-transparent">
              <div className="w-full h-full justify-center items-center bg-transparent">
                <ContactInput
                  value={values.name}
                  handleChange={handleChange}
                  label="name"
                  name="name"
                />
                <ContactInput
                  value={values.email}
                  handleChange={handleChange}
                  label="email"
                  name="email"
                />
                <ContactInput
                  value={values.phone}
                  handleChange={handleChange}
                  label="phone"
                  name="phone"
                />
              </div>
              <ContactTextArea
                value={values.message}
                handleChange={handleChange}
                name="message"
                label="message"
              />
            </div>
            <div className="w-full flex justify-center items-center bg-transparent pt-6">
              <button
                type="submit"
                className="p-6 m-4 w-[50%] rounded-lg items-center bg-[#BD1E51] text-2xl text-bold text-white"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
