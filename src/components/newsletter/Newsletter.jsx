import React from "react";
import { useRef } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import "./newsletter.css";

import phone from "../../assets/phoneicon.png";
import location from "../../assets/location.png";

import Button from "../button/Button";

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t8cwmas", "template_0uo0ck9", form.current, {
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
    <div className="newsletter-container">
      <div className="newsletter-contents">
        <div className="newsletter-contents-left">
          <h3>Newsletter</h3>
          <p>Get latest news and updates</p>
        </div>
        <div className="newsletter-contents-right">
          <form ref={form} onSubmit={sendEmail} className="right-button">
            <input
              type="email"
              placeholder="Your Email address"
              name="user_email"
              required
            ></input>
            {/* <Button content="Subscribe" /> */}
            <button type="submit" value="send" className="fill">
              Send
            </button>
          </form>
          <div className="newsletter-info">
            <div className="right-contact">
              <img src={phone} alt="phone Icon" />
              <div className="">
                <p>+(123) 456 789 0000</p>
                <p>theakwofoundation@gmail.com</p>
              </div>
            </div>

            <div className="right-location">
              <img src={location} alt="Location Icon" />
              <div>
                <p>street number, City</p>
                <p>state, Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
