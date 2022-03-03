import React from "react";
import "./services.scss";
import bcDevelopment from "../../images/blockchain development.svg";
import exchangeDev from "../../images/exchange development.svg";
import softwareDev from "../../images/software development.svg";
import websiteDev from "../../images/website development.svg";
import appDev from "../../images/application development.svg";
import uiuxDesign from "../../images/ui-ux-designing.svg";
import itConsStrategy from "../../images/it consultation strategy.svg";
import erpSolutions from "../../images/erp software solutions.svg";

const Services = () => {
  return (
    <section id="services" className="flex-display services yellow-bg section">
      <div>
        <div style={{width:"98%",margin:"0 auto"}}>
          <div className="make-center">
            <h1 className="main-heading white-circle">Our Services</h1>
            <p className="content-para" style={{lineHeight:"17px"}}>
              Providing you the best blockchain solutions that fit your needs
            </p>
          </div>
          <div className="services-grid">
            <div className="main-box side1">
              <div className="side1shadow bottom-shadow">
                <div className="box side1">
                  <div className="img-bg">
                    <img src={bcDevelopment} alt="blockchain development" />
                  </div>
                  <h3>Blockchain Development</h3>
                  <p className="gray-txt">
                  </p>
                </div>
              </div>
            </div>
            <div className="main-box side2">
              <div className="side2shadow bottom-shadow">
                <div className="box side2">
                  <div className="img-bg">
                    <img src={exchangeDev} alt="exchange development" />
                  </div>
                  <h3>Exchange Development</h3>
                  <p className="gray-txt">
                  </p>
                </div>
              </div>
            </div>
            <div className="main-box side2">
              <div className="side2shadow bottom-shadow">
                <div className="box side2">
                  <div className="img-bg">
                    <img src={softwareDev} alt="software development" />
                  </div>
                  <h3>Software Development</h3>
                  <p className="gray-txt">
                  </p>
                </div>
              </div>
            </div>
            <div className="main-box side12">
              <div className="side12shadow bottom-shadow">
                <div className="box side12">
                  <div className="img-bg">
                    <img src={websiteDev} alt="website development" />
                  </div>
                  <h3>Website Development</h3>
                  <p className="gray-txt">
                  </p>
                </div>
              </div>
            </div>
            <div className="main-box side11">
              <div className="side11shadow left-shadow">
                <div className="box side11">
                  <div className="img-bg">
                    <img src={appDev} alt="application development" />
                  </div>
                  <h3>Mobile Application Development</h3>
                  <p className="gray-txt">
                  </p>
                </div>
              </div>
            </div>
            <div className="main-box side21">
              <div className="side21shadow left-shadow">
                <div className="box side21">
                  <div className="img-bg">
                    <img src={uiuxDesign} alt="ui-ux-designing" />
                  </div>
                  <h3>UI-UX-Designing</h3>
                  <p className="gray-txt">
                  </p>
                </div>
              </div>
            </div>
            <div className="main-box side21">
              <div className="side21shadow left-shadow">
                <div className="box side21">
                  <div className="img-bg">
                    <img src={itConsStrategy} alt="it consultation strategy" />
                  </div>
                  <h3>IT Consultation Strategy</h3>
                  <p className="gray-txt">
                  </p>
                </div>
              </div>
            </div>
            <div className="main-box side13">
              <div className="side13shadow left-shadow">
                <div className="box side13">
                  <div className="img-bg">
                    <img src={erpSolutions} alt="erp software solutions" />
                  </div>
                  <h3>ERP Software Solutions</h3>
                  <p className="gray-txt">
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
