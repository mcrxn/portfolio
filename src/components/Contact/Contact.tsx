import React from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

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
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      ;
    </>
  );
};
