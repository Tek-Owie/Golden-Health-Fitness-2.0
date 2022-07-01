import * as React from "react";
import { Link } from "gatsby";
import Main from "../img/Main.png";
import instagram from "../img/social/instagram.svg";
import facebook from "../img/social/facebook.svg";
import whatsapp from "../img/social/whatsapp.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={Main}
            alt="Golden Health & Fitness Logo"
            style={{ width: "10em", height: "5em" }}
          />
        </div>
        <hr className="hr"/>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/merch">
                        Merch
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="whatsapp" target= "_blank" rel="noreferrer" 
                  href="https://api.whatsapp.com/send?phone=2348119094844&
                    text=Hi,%20I'm%20interested%20in%20Golden%20Health%20and%20Fitness">
                  <img
                    src={whatsapp}
                    alt="WhatsApp"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="facebook" target= "_blank" rel="noreferrer" href="https://www.facebook.com/Golden-Health-Fitness-100386248882137">
                  <img
                    className="fas fa-lg"
                    src={facebook}
                    alt="Facebook logo"
                    style={{ width: "1em", 
                    height: "1em" }}
                  />
                </a>
                <a title="instagram" target= "_blank" rel="noreferrer" href="https://instagram.com/gh_fitnessworld/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
