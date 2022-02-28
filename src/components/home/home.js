import React from "react";
import "./home.scss";
import $ from "jquery";
import borderIcon from "../../images/border.svg";
import headerLogoIcon from "../../images/header-logo.png";

const Home = () => {
  const msg = "Welcome to your Gatsby-app";

  function portfolio() {
    $("html, body").animate(
      {
        scrollTop: $("#portfolio").offset().top,
      },
      "slow"
    );
  }

  // function moveToPage(id) {
  //   $('html, body').animate({
  //     scrollTop: $(id).offset().top
  //   }, 'slow');
  // }

  function down() {
    $("html, body").animate(
      {
        scrollTop: $("#contact_us").offset().top,
      },
      "slow"
    );
  }
  // viewHandler(){
  //     $('.spans').css({"color": "#000000","visibility":"hidden"});
  //     $('.spans').eq(2).css({"color": "white","visibility":"visible"});
  //     $('.nav-items').removeClass("active-white-item");
  //     $('.nav-items').eq(2).addClass("active-white-item");
  // }

  return (
    <section id="home" className="home white-bg flex-display section">
      <div>
        <div className="container home-container">
          <div className="home-content black-txt">
            <h1 className="circle pad-all main-heading">Codifying</h1>
            <h1 className="main-heading">
              <span className="yellow-txt">into</span> Reality
            </h1>
            <p style={{marginBottom:"-1rem"}} className="mt20 content-para">
              Providing you the best blockchain solutions<br/>
              that fit your needs
            </p>
            <p className="content-para"></p>
            <div className="hire-us-container">
              <a
                className="bcd-btn"
                style={{ textDecoration: "none" }}
                onClick={() => portfolio()}
              >
                View Portfolio
              </a>
              <button
                className="bcd-btn hire invisible-hire-btn2"
                id="hire"
                onClick={() => down()}
              >
                Hire Us
              </button>
            </div>
          </div>
          <div className="logo-right">
            <img className="home-bg" src={borderIcon} />
            <div className="ractangle">
              <img className="ractangle-img" src={headerLogoIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
