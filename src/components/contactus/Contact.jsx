import React from "react";
import { useRef } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("-service_t8cwmas", "template_8gijxwf", form.current, {
        publicKey: "qsSJ0RNlzuH6NU9ZX",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent Successfully");
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
        <textarea name="message" placeholder="What would you like to share with us today?" />
        <input type="submit" value="Send" className="button" />
      </form>
    </div>
  );
};

export default Contact;
