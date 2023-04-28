import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import gh from "../../assets/gh.svg";
import lin from "../../assets/linkedin.svg";
import envelope from "../../assets/envelope.svg";

export const Contact = () => {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log();

    emailjs
      .sendForm(
        "service_xhsgq0a",
        "template_2mtjcga",
        e.currentTarget,
        "lymDkvpIdrVC_6jxk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <>
      <div id="contact">
        <div className="contact-container">
          <h1>Contact</h1>
          <p>I am open for job opportunities. Send me a message.</p>
          <form className="contact-form" onSubmit={(e) => submit(e)}>
            <label htmlFor="name">
              First Name:
              <input type="text" name="from_name" />
            </label>
            <label htmlFor="last-name">
              Last Name:
              <input type="text" name="last-name" />
            </label>
            <label htmlFor="email">
              Email:
              <input type="text" name="from_email" />
            </label>
            <label htmlFor="message">
              Message:
              <textarea id="message" name="message" />
            </label>
            <button type="submit">Submit</button>
          </form>
          <div className="contact-socials">
            <a href="#asd">
              <img src={gh} alt="" />
            </a>
            <a href="#asd">
              <img src={lin} alt="" />
            </a>
            <a href="#asd">
              <img src={envelope} alt="" />
            </a>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
