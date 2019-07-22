import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
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
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <textarea
            onChange={this.handleChange}
            id="message"
            name="message"
            placeholder="Message"
          />

          <button
            className="button"
            type="submit"
            style={{ margin: "0 auto", marginTop: "25px" }}
            onClick={e => this.handleFormSubmit(e)}
          >
            send
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
