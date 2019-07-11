import React from "react";

const ContactForm = () => {
  return (
    <div
      className="contact-form"
      style={{
        maxWidth: "340px",
        width: "100%",
        padding: "0 10px",
        margin: "0 auto"
      }}
    >
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />

        <button
          className="button"
          type="submit"
          style={{ margin: "0 auto", marginTop: "25px" }}
        >
          send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
