import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import "../../components/all.sass";
import Seo from "../../components/SEO";

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <Seo title='Contact Us' description='Contact page of Golden Health & Fitness'/>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact Us</h1>
              <h2>Wanna get in touch?</h2>
              <p>Drop a DM on <a title="whatsapp" target= "_blank" rel="noreferrer" 
                href="https://api.whatsapp.com/send?phone=2348119094844&text=Hi,%20I'm%20interested%20in%20Golden%20Health%20and%20Fitness">WhatsApp </a>
                 Or  
                <a title="instagram" target= "_blank" rel="noreferrer" href="https://instagram.com/gh_fitnessworld/"> IG</a>              
              </p>
                <p>Alternatively, fill this form and we'll get back to you!</p>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                className="form"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"name"}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                      placeholder={"Walter White"}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                      placeholder={"abc@xyz.com"}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"message"}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                      placeholder={"How may we be of service?"}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit" style={{width: '100%'}}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
