import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import "./scss/style.scss";
import $ from "jquery";
import { navigate, Link } from "gatsby";
import bcdLogoImg from "../images/bcd-logo.png";
import menuIcon from "../images/menu-icon.svg";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Home from "../components/home/home";
import About from "../components/about/about";
import Services from "../components/services-comp/services";
import Portfolio from "../components/portfolio/portfolio";
import Technologies from "../components/technologies/technologies";
import Products from "../components/products/products";
import Partners from "../components/partners/partners";
import LifeAtBcd from "../components/life-at-bcd/life-at-bcd";
import Contact from "../components/contact/contact";
import Navbar from "../components/navbar/navbar";
import _ from "lodash";

const IndexPage = () => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState();
  const [url, seturl] = useState("");
 
  function click() {
    $(".menu").fadeToggle("slow");
  }

  function Up() {
    $("html, body").animate(
      {
        scrollTop: $("#home").offset().top,
      },
      "slow"
    );
  }

  function moveToPage(id) {
    $("html, body").animate(
      {
        scrollTop: $(id).offset().top,
      },
      "slow"
    );
    setShow(false);
  }
  function down() {
    $("html, body").animate(
      {
        scrollTop: $("#contact_us").offset().top,
      },
      "slow"
    );
  }

  function mounted() {
    var that = this;
    var r;
    $('.top-btn').hide();
    $('.nav-items').css('color', 'white');
    $('.spans').css('visibility', 'hidden');
    $('.spans').eq(0).css({
      "color": "#000000",
      'visibility': 'visible'
    });

    /////////
    $(window).scroll(function() {
      var position = $(this).scrollTop;

      if ($(document).scrollTop() > 100) {
        $('.top-btn').fadeIn('slow');
      } else {
        $('.top-btn').fadeOut('slow');
      }
      if ($(document).scrollTop() < (window.innerHeight) * 0.6) {

        $('.spans').css('visibility', 'hidden');
        $('.spans').eq(0).css({
          "color": "#000000",
          'visibility': 'visible'
        });
        $('.nav-items').removeClass("active-white-item");
        // $('.nav-items').eq(2).removeClass("active-white-item");
        $('.nav-items').eq(0).addClass("active-white-item");

      }

      var position = window.pageYOffset;
      

      $('.section').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');


        var navLinks = $('li a');

        if (position >= target - (window.innerHeight * 0.5)) {
          if (id == 'home' || id == 'services' || id == 'portfolio' || id == 'partners' || id == 'products' || id=='contact_us' || id=='bcd-life') {
            navLinks.removeClass('active-white-item');
            navLinks.removeClass('active-black-item');
            $('li a[href="#' + id + '"]').addClass('active-white-item');
          } else {
            navLinks.removeClass('active-white-item');
            navLinks.removeClass('active-black-item');
            $('li a[href="#' + id + '"]').addClass('active-black-item');
            // URL('uhuhuu');
          }


          if (id == 'home') {
            $('.spans').css('visibility', 'hidden');
            $('.spans').eq(0).css({
              "color": "black",
              'visibility': 'visible'
            });



            // that.$router.push('#home');
          }
          if (id == 'about') {
            $('.spans').css('visibility', 'hidden');
            $('.spans').eq(1).css({
              "color": "#FFCB05",
              'visibility': 'visible'
            });

          }
          if (id == 'services') {
            $('.spans').css('visibility', 'hidden');
            $('.spans').eq(2).css({
              "color": "black",
              'visibility': 'visible'
            });

          }
          if (id == 'portfolio') {
            $('.spans').css('visibility', 'hidden');
            $('.spans').eq(3).css({
              "color": "black",
              'visibility': 'visible'
            });
            // that.$router.push('#portfolio');
          }
          if (id == 'technologies') {
            $('.spans').css('visibility', 'hidden');
            $('.spans').eq(4).css({
              "color": "#0007700",
              'visibility': 'visible'
            });
            // that.$router.push('#technologies');
          }
          if (id == 'products') {
            $('.spans').css('visibility', 'hidden');
            $('.spans').eq(5).css({
              "color": "black",
              'visibility': 'visible'
            });
            // that.$router.push('#technologies');
          }
          if (id == 'partners') {
            $('.spans').css('visibility', 'hidden');
            $('.spans').eq(6).css({
              "color": "black",
              'visibility': 'visible'
            });
            // that.$router.push('#partners');
          }
          // if (id == 'our_team') {
          //   $('.spans').css('visibility', 'hidden');
          //   $('.spans').eq(7).css({
          //     "color": "#FFCB05",
          //     'visibility': 'visible'
          //   });
          // }
          if (id == 'bcd-life') {
            $('.spans').css('visibility', 'hidden');
            $('.spans').eq(7).css({
              "color": "#000",
              'visibility': 'visible'
            });
          }

          if (id == 'contact_us') {
            $('.spans').css('visibility', 'hidden');
            $('.spans').eq(8).css({
              "color": "#000",
              'visibility': 'visible'
            });
            // that.$router.push('#contact-us');
          }
        }
      });


    });

    $(window).scroll(_.throttle(function() {

      if ($('.spans').eq(0).css('visibility') === 'visible') {
        window.history.replaceState(null, null, '#home');
        return false;
      }
      if ($('.spans').eq(1).css('visibility') === 'visible') {
        window.history.replaceState(null, null, '#about_us');
        return false;
      }
      if ($('.spans').eq(2).css('visibility') === 'visible') {
        window.history.pushState(null, null, '#services');
        return false;
      }
      if ($('.spans').eq(3).css('visibility') === 'visible') {
        window.history.pushState(null, null, '#portfolio');
        return false;
      }
      if ($('.spans').eq(4).css('visibility') === 'visible') {
        window.history.pushState(null, null, '#technologies');
        return false;
      }
      if ($('.spans').eq(5).css('visibility') === 'visible') {
        window.history.pushState(null, null, '#partners');
        return false;
      }
      // if ($('.spans').eq(6).css('visibility') === 'visible') {
      //   history.pushState(null, null, '#our_team');
      //   return false;
      // }
      if ($('.spans').eq(6).css('visibility') === 'visible') {
        window.history.pushState(null, null, '#life_at_bcd');
        return false;
      }
      if ($('.spans').eq(7).css('visibility') === 'visible') {
        window.history.pushState(null, null, '#contact_us');
        return false;
      }
    }, 500));

    // ($('#yourElement').css('position') == 'absolute')
  }


  
  useEffect(() => {
     mounted();
     
  }, []);

  return (
    <div>
      <div className="nav-component">
        <div className="top-content container">
          <img className="logo" src={bcdLogoImg} />
          <div className="nav-menu">
            <button
              className="bcd-btn hire invisible-hire-btn1"
              id="hire"
              onClick={() => down()}
            >
              Hire Us
            </button>
            <img onClick={() => click()} className="menu-svg" src={menuIcon} />
            <ul className="menu">
              <li>
                <a
                  className="menu-items"
                  href="#home"
                  onClick={() => moveToPage("#about")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="menu-items"
                  href="#about"
                  onClick={() => moveToPage("#about")}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="menu-items"
                  href="#services"
                  onClick={() => moveToPage("#services")}
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  className="menu-items"
                  href="#portfolio"
                  onClick={() => moveToPage("#portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="menu-items"
                  href="#technologies"
                  onClick={() => moveToPage("#technologies")}
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  className="menu-items"
                  href="#partners"
                  onClick={() => moveToPage("#partners")}
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  className="menu-items"
                  href="#our_team"
                  onClick={() => moveToPage("#our_team")}
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  className="menu-items"
                  href="#bcd-life"
                  onClick={() => moveToPage("#bcd-life")}
                >
                  Life At BCD
                </a>
              </li>
              <li>
                <a
                  className="menu-items"
                  href="#contact_us"
                  onClick={() => moveToPage("#contact_us")}
                >
                  Contact us
                </a>
                s
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navbar />
      <button className="top-btn" onClick={() => Up()}>
        <HiOutlineChevronDoubleUp />
        <p>Top</p>
      </button>
      <Home className="section" />
      <About className="section" />
      <Services className="section" />
      <Portfolio className="section" />
      <Technologies className="section" />
      <Products className="section" />
      <Partners className="section" />
      {/* <Team className="section" /> */}
      <LifeAtBcd className="section" />
      <Contact className="section" />
    </div>
  );
};

export default IndexPage;
