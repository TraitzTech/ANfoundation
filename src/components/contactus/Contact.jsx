import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";

import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3v5pe3o", "template_6anvm8r", form.current, {
        publicKey: "6-yM-cUuVbvNhbtcx",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="form-container">
        <div className="input-form-g1">
          <label></label>
          <input type="text" name="user_name" placeholder="Your Name" />
          <label></label>
          <input type="email" name="user_email" placeholder="Your email" />
        </div>

        <label></label>
        <textarea name="message" placeholder="Tell us more about yourself" />
        <input type="submit" value="Send" className="button"/>
      </form>
    </div>
  );
};

export default Contact;
