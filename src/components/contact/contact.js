import React, { useState, useEffect } from "react";
import "./contact.scss";
import locationIcon from "../../images/location.svg";
import atrateIcon from "../../images/atrate.svg";
import phoneNoIcon from "../../images/phoneNo..svg";
import tildIcon from "../../images/tild-arrow.svg";
import footerIcon from "../../images/footer-logo.png";
import $ from "jquery";
import axios from "axios";
import { navigate } from "gatsby";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [message, setMessage] = useState("");

  const emailData = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    message: message,
  };

  function currentOpening() {
    navigate("careers");
  }

  function showLoader() {
    $(".form-loader").css(
      {
        visibility: "visible",
      },
      "slow"
    );
  }

  function hideLoader() {
    $(".form-loader").css(
      {
        visibility: "hidden",
      },
      "slow"
    );
  }

  function sendForm() {
    showLoader();

    axios.post("http://172.25.33.105:8081/sendMail", emailData).then((res) => {
      hideLoader();
    });
  }
  useEffect(() => {}, []);

  return (
    <section
      id="contact_us"
      className="flex-display contact_us white-bg section"
    >
      <section id="form">
        <div>
          <form className="contact-form display">
            <div className="form-loader">
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
              <p>Loading . . .</p>
            </div>
            <input
              className="inputs gray-txt"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="inputs gray-txt"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inputs gray-txt"
              type="number"
              name="phone_no"
              placeholder="Phone#"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <textarea
              className="inputs gray-txt"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <a className="send-btn" onClick="one">
              Send
            </a>
          </form>
        </div>
      </section>
      <div>
        <div className="container cont-container">
          <div>
            <div className="technology">
              <h1 className="heading">Contact Us</h1>
              <div className="address">
                <p>
                  <img src={locationIcon} />
                  Plaza #75 2nd Floor, Taseen Complex, Bahria Town Civic Center,
                  Islamabad Pakistan
                </p>
                <p>
                  <img src={atrateIcon} />
                  info@bcdapps.io
                </p>
                <p>
                  <img src={phoneNoIcon} />
                  +92 (51) 2724268
                </p>
              </div>
            </div>
            <div className="btn-direction">
              <a
                className="bcd-btn2 bcd-btn margin"
                onClick={() => currentOpening()}
              >
                Life at BCD
              </a>
              <a className="bcd-btn" onClick={() => currentOpening()}>
                Current Opening
              </a>
              <div className="arrow-direction">
                <img className="tiled-arrow" src={tildIcon} />
              </div>
            </div>
            <div className="follow-us">
              <span className="follow yellow-txt">FOLLOW US</span>
              <a href="https://www.facebook.com/bcdapps/" target="_black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 49.652 49.652"
                >
                  <path
                    fill=""
                    d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826    C49.652,11.137,38.516,0,24.826,0z M31,25.7h-4.039c0,6.453,0,14.396,0,14.396h-5.985c0,0,0-7.866,0-14.396h-2.845v-5.088h2.845    v-3.291c0-2.357,1.12-6.04,6.04-6.04l4.435,0.017v4.939c0,0-2.695,0-3.219,0c-0.524,0-1.269,0.262-1.269,1.386v2.99h4.56L31,25.7z"
                  ></path>
                </svg>
              </a>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 49.652 49.652"
                >
                  <path d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826    C49.652,11.137,38.516,0,24.826,0z M35.901,19.144c0.011,0.246,0.017,0.494,0.017,0.742c0,7.551-5.746,16.255-16.259,16.255    c-3.227,0-6.231-0.943-8.759-2.565c0.447,0.053,0.902,0.08,1.363,0.08c2.678,0,5.141-0.914,7.097-2.446    c-2.5-0.046-4.611-1.698-5.338-3.969c0.348,0.066,0.707,0.103,1.074,0.103c0.521,0,1.027-0.068,1.506-0.199    c-2.614-0.524-4.583-2.833-4.583-5.603c0-0.024,0-0.049,0.001-0.072c0.77,0.427,1.651,0.685,2.587,0.714    c-1.532-1.023-2.541-2.773-2.541-4.755c0-1.048,0.281-2.03,0.773-2.874c2.817,3.458,7.029,5.732,11.777,5.972    c-0.098-0.419-0.147-0.854-0.147-1.303c0-3.155,2.558-5.714,5.713-5.714c1.644,0,3.127,0.694,4.171,1.804    c1.303-0.256,2.523-0.73,3.63-1.387c-0.43,1.335-1.333,2.454-2.516,3.162c1.157-0.138,2.261-0.444,3.282-0.899    C37.987,17.334,37.018,18.341,35.901,19.144z"></path>
                </svg>
              </a>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 512 512"
                >
                  <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <form className="contact-form">
              <div className="form-loader">
                <div className="lds-ripple">
                  <div></div>
                  <div></div>
                </div>
                <p>Sending . . .</p>
              </div>
              <input
                className="inputs gray-txt"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="help ">{}</div>
              <input
                className="inputs gray-txt"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="help">{}</div>
              <input
                className="inputs gray-txt"
                type="number"
                name="number"
                placeholder="Phone#"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <div class="help">{}</div>
              <textarea
                class="inputs gray-txt"
                placeholder="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="help">{}</div>
              <a class="send-btn" onClick={() => sendForm}>
                Send
              </a>
            </form>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <a href="#home">
          <img class="footer-logo" src={footerIcon} />
        </a>
        <p className="black-txt">
          &copy; <span>bcdapps</span> 2021. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
