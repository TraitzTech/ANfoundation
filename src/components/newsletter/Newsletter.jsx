import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { useRef } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import "./newsletter.css";

import phone from "../../assets/phoneicon.png";
import location from "../../assets/location.png";

import Button from "../button/Button";

const Newsletter = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_t8cwmas", "template_0uo0ck9", form.current, {
  //       publicKey: "qsSJ0RNlzuH6NU9ZX",
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //         alert("Email sent Successfully");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };

  return (
    <div className="newsletter-container">
      <div className="newsletter-contents">
        {/* <div className="newsletter-contents-left">
          <h3>Newsletter</h3>
          <p>Get latest news and updates</p>
        </div> */}
        <div className="newsletter-contents-right">
          {/* <form ref={form} onSubmit={sendEmail} className="right-button">
            <input
              type="email"
              placeholder="Your Email address"
              name="user_email"
              required
            ></input> */}
          {/* <Button content="Subscribe" /> */}
          {/* <button type="submit" value="send" className="fill">
              Send
            </button>
          </form> */}
          <div className="content-right-email">
            <FaEnvelope size={40} color="rgba(255, 115, 21, 1)" />
            <a href="mailto:theakwofoundation@gmail.com">
              theakwofoundation@gmail.com
            </a>
          </div>

          <div className="newsletter-info">
            <div className="content-right-email">
              <img className="phone-Icon" src={phone} alt="phone Icon" />
              <div className="">
                <p>+237 677 77 41 75</p>
                {/* <p>theakwofoundation@gmail.com</p> */}
              </div>
            </div>

            <div className="content-right-email">
              <img src={location} alt="Location Icon" />
              <div>
                <p>3 Corners, Bambili,</p>
                <p>North West Region, Cameroon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
