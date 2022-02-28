import React from "react";
import "./partners.scss";
import handShakepic from "../../images/partners-handshake.png";
import expanseLogopic from "../../images/expanse-logo.png";
import fusionLogopic from "../../images/fusion_logo.png";
import reactiveSpacepic from "../../images/reactive-space2.png";
import rnsLogopic from "../../images/RNS_logo.png";

const Partners = () => {
  return (
    <section id="partners" className="partners flex-display  white-bg section">
      <div className="container partners-container tec-container">
        <div className="partners-header">
          <div className="technology">
            <h1 className="heading main-heading">Partners</h1>
          </div>

          <div className="shake-hand"></div>
        </div>
        <img
          className="second-handshake"
          src={handShakepic}
          style={{ width: "300px" }}
        />

        <div className="partners-name">
          <div className="expanse">
            <img src={expanseLogopic} />
            <p className="content-para">
              <span className="line-txt">Expanse</span>
              <a
                style={{ textDecoration: "none" }}
                href="https://expanse.tech/"
              >
                {"Website >>"}
              </a>
            </p>
          </div>
          <div className="expanse">
            <img src={fusionLogopic} />
            <p className="content-para">
              <span className="line-txt">IdeoFusion</span>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.ideofuzion.com/"
              >
                {"Website >>"}
              </a>
            </p>
          </div>
          <div className="expanse">
            <img style={{ width: "52px" }} src={reactiveSpacepic} />
            <p className="content-para">
              <span className="line-txt">Reactive Space</span>
              <a
                style={{ textDecoration: "none" }}
                href="https://reactivespace.com/"
              >
                {"Website >>"}
              </a>
            </p>
          </div>
          <div className="expanse">
            <img src={rnsLogopic} />
            <p className="content-para">
              <span className="line-txt">RNS Solution</span>
              <a style={{ textDecoration: "none" }} href="https://rnssol.com/">
                {"Website >>"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
